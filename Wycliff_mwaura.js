// ========== SMART GREENHOUSE DECISION SYSTEM ==========

// Helper to generate random values in a given range
function getRandom(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(1);
}

// Simulate sensor readings
function generateSensorData() {
  return {
    temperature: getRandom(20, 45),      // °C
    humidity: getRandom(15, 70),         // %
    light: getRandom(100, 1200),         // lux
    soilMoisture: getRandom(20, 80),     // %
    co2: getRandom(900, 1300)            // ppm
  };
}

// Watering decision based on fuzzy logic
function wateringControl(data) {
  const { soilMoisture, humidity, temperature } = data;

  if (soilMoisture < 35 && (humidity < 40 || temperature > 30)) {
    return "Start Watering";
  } else if (soilMoisture >= 35 && soilMoisture <= 50 && temperature > 35) {
    return "Light Watering";
  } else if (soilMoisture > 70) {
    return "Skip Watering";
  } else {
    return "No Watering Needed";
  }
}

// Shading control using switch-style logic
function shadingControl(light) {
  if (light < 300) {
    return "Open Shades";
  } else if (light >= 300 && light < 800) {
    return "No Action";
  } else if (light >= 800 && light <= 1000) {
    return "Close Shades Partially";
  } else {
    return "Close Shades Fully";
  }
}

// AI Alert system
function riskAlert(data) {
  let conditionsMet = 0;

  if (data.temperature > 36) conditionsMet++;
  if (data.humidity < 25) conditionsMet++;
  if (data.co2 > 1200) conditionsMet++;
  if (data.soilMoisture < 30) conditionsMet++;
  if (data.light > 1100) conditionsMet++;

  return conditionsMet >= 3;
}

// Main simulation function
function runSimulation(intervals = 10) {
  let consecutiveAlerts = 0;

  for (let hour = 1; hour <= intervals; hour++) {
    console.log(`\n--- Hour ${hour} ---`);

    const data = generateSensorData();
    console.log("Sensor Data:", data);

    const watering = wateringControl(data);
    const shading = shadingControl(data.light);
    const alert = riskAlert(data);

    let criticalFlag = false;
    if (alert) {
      consecutiveAlerts++;
      console.log("Alert Triggered!");
    } else {
      consecutiveAlerts = 0;
    }

    if (consecutiveAlerts > 2) {
      criticalFlag = true;
      console.log(" CRITICAL RISK FLAG RAISED!");
    }

    console.log("Watering Decision:", watering);
    console.log("Shading Decision:", shading);
    console.log("Risk Alert:", alert ? "Yes" : "No");
    console.log("Critical Flag:", criticalFlag ? "Yes" : "No");
  }
}

// Run the simulation
runSimulation(10);