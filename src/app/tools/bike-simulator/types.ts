export interface Data {
  data: Point[]
  meta: {
    totalDistanceMeters: number
    totalGainMeters: number
  }
}


export interface Point {
  x: number
  y: number
  a: number
}


export interface Params {
  url: string
  avgPowerWatts: number
  avgCdA: number
  avgCrr: number
  lossDrivetrain: number
  massBikeKg: number
  massRiderKg: number
  velocityMin: number
  timestep: number
}


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

  errors?: string[]

  meta: {
    computeSec: number
    computeIters: number
    totalDistanceMeters: number
    totalGainMeters: number
  }
}