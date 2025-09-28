// Fluids

// Basic variables
let rho = 0;        // density (kg/m^3)
let velocity = 0;   // m/s
let g = 9.81;       // gravity
let h = 0;          // height (m)
let P = 0;          // pressure (Pa)
let D = 0;          // diameter (m)
let mu = 0;         // dynamic viscosity (Pa*s)
let A1 = 0;         // area 1 (m^2)
let A2 = 0;         // area 2 (m^2)
let v1 = 0;         // velocity 1
let v2 = 0;         // velocity 2

// Formulas
let bernoulli = P + 0.5 * rho * Math.pow(velocity, 2) + rho * g * h;
let continuity = A1 * v1 - A2 * v2;
let reynolds = (rho * velocity * D) / mu;
