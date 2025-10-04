function CalculateFluids() {
    // Pressures
    let p1 = Number(document.getElementById("2P1").value) || NaN;
    let p2 = Number(document.getElementById("2P2").value) || NaN;

    // Velocities
    let v1 = Number(document.getElementById("2v1").value) || NaN;
    let v2 = Number(document.getElementById("2v2").value) || NaN;

    // Heights
    let z1 = Number(document.getElementById("2z1").value) || NaN;
    let z2 = Number(document.getElementById("2z2").value) || NaN;

    // Fluid properties
    let rho = Number(document.getElementById("2rho").value) || NaN;
    let g = Number(document.getElementById("2g").value);

    let result = "";
    let formula = "P₁ + ½ρv₁² + ρgz₁ = P₂ + ½ρv₂² + ρgz₂";

    // Determine which variable is missing
    if(isNaN(rho)){
      result = "Input fluid density please."
    }else if (isNaN(p1)) {
        p1 = p2 + 0.5 * rho * (v2**2 - v1**2) + rho * g * (z2 - z1);
        result = "Calculated P₁: " + p1.toFixed(2) + " Pa";
    } else if (isNaN(p2)) {
        p2 = p1 + 0.5 * rho * (v1**2 - v2**2) + rho * g * (z1 - z2);
        result = "Calculated P₂: " + p2.toFixed(2) + " Pa";
    } else if (isNaN(v1)) {
        v1 = Math.sqrt(((p2 - p1) / (0.5 * rho)) + v2**2 + 2 * g * (z2 - z1));
        result = "Calculated v₁: " + v1.toFixed(2) + " m/s";
    } else if (isNaN(v2)) {
        v2 = Math.sqrt(((p1 - p2) / (0.5 * rho)) + v1**2 + 2 * g * (z1 - z2));
        result = "Calculated v₂: " + v2.toFixed(2) + " m/s";
    } else if (isNaN(z1)) {
        z1 = ((p2 - p1) / (rho * g)) + z2 + (v2**2 - v1**2) / (2 * g);
        result = "Calculated z₁: " + z1.toFixed(2) + " m";
    } else if (isNaN(z2)) {
        z2 = ((p1 - p2) / (rho * g)) + z1 + (v1**2 - v2**2) / (2 * g);
        result = "Calculated z₂: " + z2.toFixed(2) + " m";
    } else {
        result = "No variable to solve — all inputs provided!";
    }

    document.getElementById("bernoulli-result").innerHTML =
        "<p><strong>Formula:</strong> " + formula + "</p>" +
        "<p><strong>Result:</strong> " + result + "</p>";
}

function CalculateFlowRate(){
  let d = Number(document.getElementById("3diameter").value) || NaN;
  let v = Number(document.getElementById("3velocity").value) || NaN;
  let Q = Number(document.getElementById("3flow-rate").value) || NaN;

  if(isNaN(d)){
    d = Math.sqrt(Q / (Math.PI * v * 3600)) * 2;
    document.getElementById("3diameter-result").innerText = "d = "+d.toFixed(3);
    document.getElementById("3velocity-result").innerText = "v = "+v.toFixed(3);
    document.getElementById("3flowrate-result").innerText = "q = "+Q.toFixed(3);
  } 
  else if(isNaN(v)){
    v = Q / (Math.PI * (d/2)**2 * 3600);
    document.getElementById("3diameter-result").innerText = "d = "+d.toFixed(3);
    document.getElementById("3velocity-result").innerText = "v = "+v.toFixed(3);
    document.getElementById("3flowrate-result").innerText = "q = "+Q.toFixed(3);
  } 
  else if(isNaN(Q)){
    Q = Math.PI * (d/2)**2 * v * 3600;
    document.getElementById("3diameter-result").innerText = "d = "+d.toFixed(3);
    document.getElementById("3velocity-result").innerText = "v = "+v.toFixed(3);
    document.getElementById("3flowrate-result").innerText = "q = "+Q.toFixed(3);
  } 
  else {
    document.getElementById("3diameter-result").innerText = "No variable to solve — all inputs provided!";
    document.getElementById("3velocity-result").innerText = "";
    document.getElementById("3flowrate-result").innerText = "";
  }
}

function CalculateReynoldsNumber() {
    let rho = Number(document.getElementById("4density").value) || NaN;
    let v = Number(document.getElementById("4velocity").value) || NaN;
    let D = Number(document.getElementById("4diameter").value) || NaN;
    let mu = Number(document.getElementById("4dynamic-viscosity").value) || NaN;
    let nu = Number(document.getElementById("4kinematic-viscosity").value) || NaN;

    let result = "";

    if (isNaN(rho) || isNaN(v) || isNaN(D)) {
        result = "Please input density, velocity, and diameter.";
    } else if (!isNaN(mu)) {
        // Use dynamic viscosity
        let Re = (rho * v * D) / mu;
        result = "Reynolds Number (using dynamic viscosity): " + Re.toFixed(2);
    } else if (!isNaN(nu)) {
        // Use kinematic viscosity
        let Re = (v * D) / nu;
        result = "Reynolds Number (using kinematic viscosity): " + Re.toFixed(2);
    } else {
        result = "Please provide either dynamic or kinematic viscosity.";
    }

    document.getElementById("reynolds-result").innerText = result;
}