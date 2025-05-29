import React, { ReactNode } from 'react';

export interface ImageLink {
  src: string;        // the thumbnail or inline img URL
  href?: string;      // where you want people to land if they click
  alt?: string;       // for accessibility
}

export interface Project {
title: string;
year: number;
description: string;
url: string;
details?: ReactNode;
images?: ImageLink[];
}

export const projects: Project[] = [
{
    title: "Arduino-Based Autonomous FireFighting Robot",
    year: 2025,
    description: "Built a LiDAR-Capable, ultrasonic and IR-based Firefighting Robot AMR/AGV (Autonomous Mobile Robot/ Autonomous Ground Vehicle)",
    url: "https://github.com/rushabhdhoke/underwater-logger",
    details: (
        <>
      <h3>LiDAR Technology:</h3>
      <ul>
        <li><strong>360° Mapping:</strong>Build LiDAR Mount can enable precise real-time environmental mapping and navigation. Help detecting objects up to 30 meters</li>
        <li>Would reinforce obstacle avoidance and effective navigation in hazardous, low-visibility environments.</li>
      </ul>
      <h3>Ultrasonic Sensors:</h3>
      <ul>
        <li><strong>Obstacle avoidance:</strong> Detects objects from 2 cm to 4 meters for close-range obstacle avoidance. Vehicle navigates around the Obstacle to detect IR signal and Identify Fire.</li>
        <li>Enhanced Path Planning Algorithm allows vehcile to use just 1 Ultrasonic sensor and navigate its way through tight spaces.</li>
      </ul>

      <h3>Infrared (IR) Sensors:</h3>
      <ul>
        <li><strong>IR Emitter Signal Detection:</strong> Two IR sensors identify fire sources by detecting IR Emitter signal which triggers a servo to lower a ladder to stop the fire.</li>
      </ul>
      <h3>Control:</h3>
      <ul>
        <li><strong>Autonomous Control:</strong> Uses Sesnor fusion for autonomous Path Planning and obstacle avoidance. Created a Matrix of total area and applied Navigarion algorithms like Breadth First Search.</li>
        <li><strong>Wireless Control:</strong> Built a custom Remote control using an Ardunino Mega with RC Transmitter.</li>
      </ul>

      <h3>Additional Features:</h3>
      <ul>
        <li>Dual sensors for obstacle detection, ensuring no single point of failure.</li>
        <li>Remote emergency button.</li>
      </ul> 
    </> 
    ),
    images: [ 
    { src: "https://drive.google.com/file/d/1bQdSKAcGJ88MM3_Rjl0OY8l6Deg58uEo/view?usp=drive_link",
      href: "https://drive.google.com/file/d/1bQdSKAcGJ88MM3_Rjl0OY8l6Deg58uEo/view?usp=drive_link",
      alt: "Front view of firefighting robot"},
    { src: "https://drive.google.com/file/d/1dAcw2yA5aLoTP1Ug-nONBNsn5a7cY_00/view?usp=drive_link",
      href: "https://drive.google.com/file/d/1dAcw2yA5aLoTP1Ug-nONBNsn5a7cY_00/view?usp=drive_link",
      alt: "Remote"
    } 
    ],
},
{
  title: "Underwater Salinity Logger",
  year: 2024,
  description: "Built JAIABots with salinity & depth sensors to map salt fronts in rivers (ROS2 + Python).",
  url: "https://github.com/rushabhdhoke/underwater-logger",
  details: "This project involved deploying JAIABots…",
  images: [
    {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*wgFSrA_nX4n-sVEg5kdl0Q.jpegg",
      href:   "https://miro.medium.com/v2/resize:fit:1400/1*wgFSrA_nX4n-sVEg5kdl0Q.jpeg",
      alt:    "JAIABot logging salinity profile"
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*wgFSrA_nX4n-sVEg5kdl0Q.jpeg",
      href:   "https://miro.medium.com/v2/resize:fit:1400/1*wgFSrA_nX4n-sVEg5kdl0Q.jpeg",
      alt:    "Close-up of depth & salinity sensors"
    },
  ],
},
// …add other projects here…
];
