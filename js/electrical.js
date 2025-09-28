// Electrical Engineering

// Basic variables
let voltage = 0;    // V
let current = 0;    // A
let resistance = 0; // Ohm
let charge = 0;     // Coulombs
let capacitance = 0; // Farads
let inductance = 0; // Henry
let time = 0;       // s

// Formulas
let ohmsLaw = voltage / resistance; // I = V/R
let power = voltage * current;      // P = V * I
let energyCapacitor = 0.5 * capacitance * Math.pow(voltage, 2); 
let capacitorCharge = capacitance * voltage; // Q = C * V
let inductorVoltage = inductance * (current / time); // dI/dt simplified
