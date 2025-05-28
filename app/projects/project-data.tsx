export interface Project {
title: string;
year: number;
description: string;
url: string;
details?: string;
images?: string[];
}

export const projects: Project[] = [
{
    title: "Arduino-Based Autonomous FireFighting Robot",
    year: 2025,
    description: "Built a LiDAR-Capable, ultrasonic and IR-based Firefighting Robot AMR/AGV (Autonomous Mobile Robot/ Autonomous Ground Vehicle)",
    url: "https://github.com/rushabhdhoke/underwater-logger",
    details: `
      <h3>LiDAR Technology:</h3>
      <ul>
        <li><strong>360° Mapping:</strong> LiDAR enables precise real-time environmental mapping and navigation.</li>
        <li><strong>Range:</strong> Detects objects up to 30 meters with sub-centimeter accuracy.</li>
        <li><strong>Use Case:</strong> Ensures obstacle avoidance and effective navigation in hazardous, low-visibility environments.</li>
      </ul>
      
      <h3>Ultrasonic Sensors:</h3>
      <ul>
        <li><strong>Range:</strong> Detects objects from 2 cm to 4 meters for close-range obstacle avoidance.</li>
        <li><strong>Use Case:</strong> Enhances navigation through tight spaces like corridors and doorways.</li>
      </ul>

      <h3>Infrared (IR) Sensors:</h3>
      <ul>
        <li><strong>IR Emitter Signal Detection:</strong> Identifies fire sources by detecting IR Emitter signal and lowers a ladder to stop the fire.</li>
      </ul>

      <h3>Autonomous Navigation:</h3>
      <ul>
        <li><strong>Mapping & Navigation:</strong> Uses LiDAR, ultrasonic, and IR sensors for autonomous navigation with real-time mapping.</li>
        <li><strong>Speed:</strong> Can travel at [Specify speed] meters per second.</li>
      </ul>

      <h3>Control and Safety Features:</h3>
      <ul>
        <li><strong>Wireless Control:</strong> Remote control using a self-made Radio-Controlled remote.</li>
        <li><strong>Emergency Stop:</strong> Remote emergency shutdown capability.</li>
        <li><strong>Redundancy:</strong> Dual sensors for obstacle detection, ensuring no single point of failure.</li>
      </ul>

      <h3>Applications:</h3>
      <ul>
        <li><strong>Industrial Firefighting:</strong> Ideal for hazardous environments with minimal human exposure.</li>
        <li><strong>Search & Rescue:</strong> Assists in urban rescue operations.</li>
      </ul>
    `,
    images: [
      "/images/salinity-logger-1.jpg",
      "/images/salinity-logger-2.jpg"],
},
{
  title: "Underwater Salinity Logger",
  year: 2024,
  description: "Built JAIABots with salinity & depth sensors to map salt fronts in rivers (ROS2 + Python).",
  url: "https://github.com/rushabhdhoke/underwater-logger",
  details:
  "This project involved deploying JAIABots equipped with calibrated salinity and depth sensors to collect vertical profiles of salinity in real river environments. Data was logged via ROS2 nodes, post-processed in Python, and visualized to identify salt intrusion dynamics.",
  images: [
  "/images/salinity-logger-1.jpg",
  "/images/salinity-logger-2.jpg"],
  },  
{
  title: "Active Knee Orthosis Controller",
  year: 2024,
  description:
  "Re-implemented an H∞ torque controller from the 2015 RSEA paper in Simulink.",
  url: "https://github.com/rushabhdhoke/knee-orthosis",
  details:
  "Modeled the rotary series elastic actuator and designed an H∞ torque controller in MATLAB/Simulink. Simulations validated the controller's robustness to external disturbances, and initial bench tests demonstrated safe, low-impedance behavior.",
  images: [
  "/images/knee-orthosis-1.jpg",
  "/images/knee-orthosis-2.jpg"],
  },
{
  title: "Terrestrial Modular Robot",
  year: 2023,
  description:
  "Designed a modular rover for obstacle avoidance using ROS2 and ArUco markers.",
  url: "https://github.com/rushabhdhoke/terrestrial-robot",
  details:
  "Developed a scalable rover platform with swappable sensor modules. Used ROS2 for navigation and ArUco-based visual servoing to achieve reliable obstacle detection and real-time path correction.",
  images: [
  "/images/terrestrial-robot-1.jpg",
  "/images/terrestrial-robot-2.jpg"],
  },
// …add other projects here…
];
