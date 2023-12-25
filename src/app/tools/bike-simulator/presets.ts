// These are derived from power loss at 18mph and a rider weight of 42.5kg.
// See: https://www.bicyclerollingresistance.com/road-bike-reviews
export const presetsCRR = {
  // This is a Continental Gatorskin (20.2 W)
  bad: 0.006,
  // Slightly better than a Gatorskin.
  average: 0.005,
  // Middle of the pack on the website.
  good: 0.0035,
  // This is ~8W at 18mph and a rider weight of 42.5kg.
  excellent: 0.0024,
}

// https://efficientcyclist.com/drivetrain-efficiency/
export const presetsDtl = {
  bad: 4, // Bad is greater than this
  average: 3, // Average is less than this
  good: 2, // Good is less than this
  excellent: 1.5, // Excellent is less than this
}

export const presetsCdA = {
  upright: 0.3,
  drops: 0.27,
  aero: 0.25,
  pro: 0.22,
}