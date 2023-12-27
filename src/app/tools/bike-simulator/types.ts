export interface State {
  t: number
  x: number
  v: number 
  alt: number
  rho: number
  F_drag: number
  F_grav: number
  F_roll: number
}


export interface Results {
  states: State[]

  course_distance_m: number
  course_gain_m: number
  avg_speed_m_per_s: number

  meta: {
    compute_sec: number
    compute_iters: number
    simulation_sec: number
    errors: string[]
  }
}