import { State, Params, Point, Data } from "./types";


const G = 9.81 // m/s2


function getCurrentIndex(data: Point[], i: number, x: number): number[] {
  let _i = i;
  while (_i < data.length && data[_i].x < x) {
    ++_i;
  }

  const i2 = _i;

  if (i2 <= 1) {
    return [0, 1];
  } else if (i2 >= data.length) {
    return [data.length - 2, data.length - 1];
  }

  return [i2 - 1, i2];
}


function interpolate(data: Point[], i0: number, i1: number, x: number, property: "y" | "a") {
  const x0 = data[i0].x;
  const x1 = data[i1].x;
  const alpha = Math.max(0, Math.min(1, (x - x0) / (x1 - x0))); // clamp 0-1
  const v0 = data[i0][property];
  const v1 = data[i1][property];
  return v0 * (1 - alpha) + v1 * (alpha)
}


function getRho(y: number) {
  return 1.225;
}


export async function simulate(params: Params) {
  const response = await fetch(params.url);
  const data: Data = await response.json();

  let errors = [];
  let results: State[] = [];

  let i = 0;
  let t = 0;
  let x_t = 0;
  let v_t = 0;

  const totalDist = data.meta.totalDistanceMeters;
  const massTotalKg = params.massBikeKg + params.massRiderKg;

  let iter = 1;
  while (x_t < totalDist) {
    const P_legs = params.avgPowerWatts;
    const CdA = params.avgCdA;

    let F_dt = P_legs * (1 - 0.01*params.lossDrivetrain) / Math.max(v_t, 1);

    const I = getCurrentIndex(data.data, i, x_t);
    const alt = interpolate(data.data, I[0], I[1], x_t, "y");
    const theta = interpolate(data.data, I[0], I[1], x_t, "a");
    const rho = getRho(alt);
    const v_hw = 0;

    const F_drag = 0.5 * rho * CdA * (v_t + v_hw)**2;
    const F_grav = G * massTotalKg * Math.sin(theta);
    const F_roll = G * massTotalKg * params.avgCrr * Math.cos(theta);

    // Check if velocity will go zero or negative and override.
    let P_legs_override = 0;
    if (F_dt < (F_drag + F_grav + F_roll + (massTotalKg * (params.velocityMin - v_t))/params.timestep)) {
      F_dt = (F_drag + F_grav + F_roll + (massTotalKg * (params.velocityMin - v_t))/params.timestep);
      P_legs_override = F_dt;
      errors.push("override_power");
    }

    const F_h = F_dt - F_drag - F_grav - F_roll;
    const a_h = F_h / massTotalKg;

    // Simulate the position and velocity at the next timestep.
    x_t = x_t + params.timestep * v_t;
    v_t = v_t + params.timestep * a_h;
    t = t + params.timestep;
    i = I[0];

    results.push({
      t,
      x: x_t,
      v: v_t, 
      alt,
      rho,
      F_drag,
      F_grav,
      F_roll,
    });

    ++iter;
  }

  return {
    results,
    errors,
    meta: { ...data.meta, computeSec: 0.1, computeIters: iter }
  };
}
