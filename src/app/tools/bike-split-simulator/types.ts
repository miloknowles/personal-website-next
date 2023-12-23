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

  meta: {
    compute_sec: number
    compute_iters: number
  }
}