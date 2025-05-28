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
    </> 
    ),
    images: [ 
    { src: "https://miro.medium.com/v2/resize:fit:1400/1*wgFSrA_nX4n-sVEg5kdl0Q.jpeg",
      href: "https://miro.medium.com/v2/resize:fit:1400/1*wgFSrA_nX4n-sVEg5kdl0Q.jpeg",
      alt: "Front view of firefighting robot"},
    { src: "https://i.ytimg.com/vi/QbQV6Ye1jOE/maxresdefault.jpg",
      href: "https://i.ytimg.com/vi/QbQV6Ye1jOE/maxresdefault.jpg",
      alt: "Front view of firefighting robot"
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
