# 🌱 Smart Greenhouse Decision System

**Overview:** The Smart Greenhouse Decision System is a JavaScript simulation that models an intelligent greenhouse using rule-based and fuzzy decision logic. It generates simulated sensor data for temperature, humidity, light, soil moisture, and CO₂, and automatically decides on watering, shading, and risk alerts. All outputs appear in the Command Line Interface (CLI). The system demonstrates fuzzy and rule-based logic to make human-like decisions and persistent risk monitoring.

**Sensor Simulation:** The system generates simulated readings: Temperature (20–45 °C), Humidity (15–70 %), Light (100–1200 lux), Soil Moisture (20–80 %), CO₂ (900–1300 ppm).

**Watering Logic:** Watering depends on soil moisture, humidity, and temperature. Outputs: `Start Watering` if soil moisture is low and either humidity is low or temperature is high, `Light Watering` if soil moisture is moderate but temperature is very high, `Skip Watering` if soil moisture is high, `No Watering Needed` otherwise.

**Shading Logic:** Shading decisions depend on light intensity: `<300 lux` → `Open Shades`, `300–800 lux` → `No Action`, `800–1000 lux` → `Close Shades Partially`, `>1000 lux` → `Close Shades Fully`.

**Risk Alert System:** Monitors critical conditions: high temperature (>36°C), low humidity (<25%), high CO₂ (>1200 ppm), low soil moisture (<30%), excessive light (>1100 lux). If 3+ conditions occur, an alert triggers; consecutive alerts raise a CRITICAL RISK FLAG.

**Simulation Flow:** Generate sensor data → Evaluate watering → Evaluate shading → Check risk conditions → Track consecutive alerts → Raise critical flag if needed → Display results in CLI.

**Example CLI Output:**

**How to Run:** Save the code in a file (e.g., `greenhouse.js`) and run `node greenhouse.js` using Node.js, or run in a browser console.

**Architecture:** Sensors → Decision Logic → Control Actions → Alerts. Sensors provide readings, decision logic evaluates them, control actions implement watering/shading, and the alert system monitors critical conditions.

**Relevance:** Useful for Computational Logic (CL), AI basics, IoT systems, and automation. Demonstrates intelligent decision-making in environmental monitoring.

**Future Enhancements:** Real IoT integration, machine learning predictions, dashboards, historical logging, real-time monitoring, mobile notifications.

**Author:** Wycliff — Full-Stack Developer in Training.

**License:** Educational purposes.
