export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Underwater Salinity Logger",
    year: 2024,
    description:
      "Built JAIABots with salinity & depth sensors to map salt fronts in rivers (ROS2 + Python).",
    url: "https://github.com/rushabhdhoke/underwater-logger",
  },
  {
    title: "Active Knee Orthosis Controller",
    year: 2024,
    description:
      "Re-implemented an H∞ torque controller from the 2015 RSEA paper in Simulink.",
    url: "https://github.com/rushabhdhoke/knee-orthosis",
  },
  {
    title: "Terrestrial Modular Robot",
    year: 2023,
    description:
      "Designed a modular rover for obstacle avoidance using ROS2 and ArUco markers.",
    url: "https://github.com/rushabhdhoke/terrestrial-robot",
  },
  {
    title: "Dynamic Saltwater Intrusion Analysis",
    year: 2023,
    description:
      "Assessed saltwater front migration in Delaware rivers since the 1960s.",
    url: "https://github.com/rushabhdhoke/saltwater-intrusion",
  },
  {
    title: "BioRob Conference Poster",
    year: 2024,
    description:
      "Developed and presented a poster on disturbance observer control for knee orthosis.",
    url: "https://github.com/rushabhdhoke/biobap-poster",
  },
];
