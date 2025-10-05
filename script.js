function CalculationArea(){
  let bernoulli = document.getElementById("fluid-bernoulli-calculation-area");
  let flowrate = document.getElementById("volumetric-flow-rate-calculation-area");
  let general = document.getElementById("general-mechanics-calculation-area");
  let reynolds = document.getElementById("reynolds-number-calculation-area");
  let hydrostaticpressure = document.getElementById("hydrostatic-pressure-calculation-area");
  let conversion = document.getElementById("conversion-of-units-calculation-area");

  let selector = document.getElementById("calculation-area-selector").value;

  general.style.display = "none";
  bernoulli.style.display = "none";
  flowrate.style.display = "none";
  reynolds.style.display = "none";
  hydrostaticpressure.style.display = "none";
  conversion.style.display = "none";

  if(selector == "general"){
    general.style.display = "block";
  } else if(selector == "fluids1"){
    bernoulli.style.display = "block";
  } else if(selector == "fluids2"){
    flowrate.style.display = "block";
  } else if(selector == "fluids3"){
    reynolds.style.display = "block";
  }else if(selector == "fluids4"){
    hydrostaticpressure.style.display = "block";
  }else if(selector == "conversion"){
    conversion.style.display = "block";
  }
}

function AtmIn5(){
  let checkbox = document.getElementById("atm-box");
  let input_pressure1 = document.getElementById("5pressure1");
  if(checkbox.checked){
    input_pressure1.value = 101325;
  }else{
    input_pressure1.value = 1;
  }
}


const units = {
  mass: { "kg": 1, "g": 1000, "lb": 2.20462, "ton": 0.001 },
  length: { "m": 1, "cm": 100, "mm": 1000, "km": 0.001, "ft": 3.28084, "in": 39.3701 },
  area: { "m²": 1, "cm²": 10000, "mm²": 1000000, "ft²": 10.7639, "in²": 1550 },
  volume: { "m³": 1, "L": 1000, "cm³": 1000000, "ft³": 35.3147, "in³": 61023.7 },
  time: { "s": 1, "min": 60, "h": 3600 },
  velocity: { "m/s": 1, "km/h": 3.6, "ft/s": 3.28084, "mph": 2.23694 },
  acceleration: { "m/s²": 1, "ft/s²": 3.28084 },
  force: { "N": 1, "kN": 0.001, "lbf": 0.224809, "kgf": 0.101972 },
  pressure: { "Pa": 1, "kPa": 0.001, "MPa": 0.000001, "bar": 0.00001, "psi": 0.000145038 },
  energy: { "J": 1, "kJ": 0.001, "cal": 0.239006, "kcal": 0.000239006, "Wh": 0.000277778 },
  power: { "W": 1, "kW": 0.001, "hp": 0.00134102 }
};

// Selectors
const categorySelect = document.getElementById("category");
const unit1Select = document.getElementById("unit1");
const unit2Select = document.getElementById("unit2");

// Populate unit lists
function PopulateUnits() {
  const category = categorySelect.value;
  unit1Select.innerHTML = "";
  unit2Select.innerHTML = "";

  for (let u in units[category]) {
    unit1Select.innerHTML += `<option value="${u}">${u}</option>`;
    unit2Select.innerHTML += `<option value="${u}">${u}</option>`;
  }
}

categorySelect.addEventListener("change", PopulateUnits);
window.addEventListener("load", PopulateUnits);

// Conversion
function ConvertUnits() {
  let value = Number(document.getElementById("value").value);
  let category = categorySelect.value;
  let from = unit1Select.value;
  let to = unit2Select.value;
  let resultbox = document.getElementById("units-result");

  if (isNaN(value)) {
    resultbox.textContent = "Enter a valid number.";
    return;
  }

  const result = value * (units[category][from] / units[category][to]);
  resultbox.textContent = `${value} ${from} = ${result.toFixed(6)} ${to}`;
}