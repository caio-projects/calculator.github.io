// Thermodynamics

// Basic variables
let pressure = 0;   // Pa
let volume = 0;     // m^3
let moles = 0;      // mol
let gasConstant = 8.314; // J/(mol*K)
let temperature = 0; // K
let heat = 0;        // J
let work = 0;        // J
let deltaU = 0;      // J

// Formulas
let idealGasLaw = pressure * volume - (moles * gasConstant * temperature);
let firstLaw = deltaU - (heat - work);
let efficiency = (work !== 0) ? work / heat : 0;

// Heat transfer
let k = 0;      // thermal conductivity
let A = 0;      // area
let deltaT = 0; // temperature difference
let d = 0;      // thickness
let h = 0;      // convection coeff
let Ts = 0;     // surface temp
let Tinf = 0;   // ambient temp

let conductionHeat = k * A * (deltaT / d) * time;
let convectionHeat = h * A * (Ts - Tinf) * time;
