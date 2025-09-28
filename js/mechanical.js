// Mechanics / Torque

// Basic variables
let angle = 0;          // radians
let mass = 0;           // kg
let acceleration = 0;   // m/s^2
let distance = 0;       // m
let velocity = 0;       // m/s
let time = 0;           // s
let radius = 0;         // m
let inertia = 0;        // kg*m^2
let angularVelocity = 0; // rad/s
let gravity = 9.81;
// Formulas
let force = mass * acceleration; 
let work = force * distance * Math.cos(angle); 
let power = (time !== 0) ? work / time : 0;
let torque = force * radius * Math.sin(angle);
let rotationalKineticEnergy = 0.5 * inertia * Math.pow(angularVelocity, 2);
let momentum = mass * velocity;
let kineticEnergy = 0.5 * mass * Math.pow(velocity, 2);
let potentialEnergy = mass * gravity * distance; // assuming distance is height