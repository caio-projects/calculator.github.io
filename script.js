function Calculate(){
    var mass         = document.getElementById("mass").value;
    var acceleration = document.getElementById("acceleration").value;
    var distance     = document.getElementById("distance").value;
    var angle        = document.getElementById("angle").value;
    var time         = document.getElementById("time").value;

    var massunit         = document.getElementById("mass-unit").value; 
    var accelerationunit = document.getElementById("acceleration-unit").value; 
    var distanceunit     = document.getElementById("distance-unit").value; 
    var angleunit        = document.getElementById("angle-unit").value; 
    var timeunit         = document.getElementById("time-unit").value; 

    if(massunit == "t"){
        mass = mass * 1000;
    } else if(massunit == "g"){
        mass = mass * 0.001;
    } else if(massunit == "lb"){
        mass = mass * 0.453592;
    }

    if(accelerationunit == "ft/s2"){
        acceleration = acceleration * 0.3048;
    }

    if(distanceunit == "cm"){
        distance = distance * 0.01;
    } else if(distanceunit == "mm"){
        distance = distance * 0.001;
    } else if(distanceunit == "ft"){
        distance = distance * 0.3048;
    } else if(distanceunit == "in"){
        distance = distance * 0.0254;
    }

    if(angleunit == "deg"){
        angle = angle * (Math.PI / 180); 
    }

    if(timeunit == "ms"){
        time *= 0.001;
    } else if(timeunit == "us"){
        time *= 0.000001;
    } else if(timeunit == "min"){
        time *= 60;
    } else if(timeunit == "h"){
        time *= 3600;
    }

    var force = mass * acceleration; //F = m*a;
    var work = force * distance * Math.cos(angle); //work = Fdcos(angle)
    var power = work/time;
    var torque = force * distance * Math.sin(angle);

    document.getElementById("force").textContent = "Force = "+force.toFixed(2);
    document.getElementById("work").textContent = "Work = "+work.toFixed(2);
    document.getElementById("power").textContent = "Power = "+power.toFixed(2);
    document.getElementById("torque").textContent = "Torque = "+torque.toFixed(2);

}