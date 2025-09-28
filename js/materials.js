// Materials / Strength

// Basic variables
let force = 0; 
let area = 0;
let length0 = 0;
let deltaLength = 0;
let E = 0;       // Young’s modulus
let T = 0;       // torque
let r = 0;       // radius
let J = 0;       // polar moment of inertia
let strength = 0;
let appliedLoad = 0;

// Formulas
let stress = force / area;
let strain = deltaLength / length0;
let hookesLaw = E * strain;
let shearStress = force / area;
let torsionalShear = (T * r) / J;
let factorOfSafety = strength / appliedLoad;
