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
