function CalculateFluids() {
    // Pressures
    let p1 = Number(document.getElementById("P1").value) || NaN;
    let p2 = Number(document.getElementById("P2").value) || NaN;

    // Velocities
    let v1 = Number(document.getElementById("v1").value) || NaN;
    let v2 = Number(document.getElementById("v2").value) || NaN;

    // Heights
    let z1 = Number(document.getElementById("z1").value) || NaN;
    let z2 = Number(document.getElementById("z2").value) || NaN;

    // Fluid properties
    let rho = Number(document.getElementById("rho").value);
    let g = Number(document.getElementById("g").value);

    let result = "";
    let formula = "P₁ + ½ρv₁² + ρgz₁ = P₂ + ½ρv₂² + ρgz₂";

    // Determine which variable is missing
    if (isNaN(p1)) {
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