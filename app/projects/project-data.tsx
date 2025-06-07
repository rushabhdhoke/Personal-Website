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
    title: "Legged Robot Manipulation without Computer Vision",
    year: 2025,
    description:
      "Deep RL framework for quadruped navigation over rough terrain via Nvidia IsaacSim Sim2Real transfer.",
    url: "#", // update when you have a repo or paper link
    details: (
      <>
        <h2><strong>Sim2Real Framework:</strong></h2>
        <ul>
          <li>
            Developed in NVIDIA Isaac Sim; neural joint-control maps for dynamic
            obstacle negotiation using only proprioceptive feedback.
          </li>
        </ul>
        <h2><strong>Reinforcement Learning:</strong></h2>
        <ul>
          <li>
            Trained with PPO in simulation; successfully transferred policies
            to a real quadruped platform.
          </li>
        </ul>
      </>
    ),
    images: [
      {
        src: "https://moonlight-paper-snapshot.s3.ap-northeast-2.amazonaws.com/arxiv/robust-reinforcement-learning-based-locomotion-for-resource-constrained-quadrupeds-with-exteroceptive-sensing-0.png",
        href: "https://moonlight-paper-snapshot.s3.ap-northeast-2.amazonaws.com/arxiv/robust-reinforcement-learning-based-locomotion-for-resource-constrained-quadrupeds-with-exteroceptive-sensing-0.png",
        alt: "Quadruped in simulation",
      },
    ],
  },
{
    title: "Particle Filter Estimation for Underwater Glider Robot",
    year: 2025,
    description:
      "Developing a particle filter–based state estimator that accounts for hydrodynamic effects and environmental disturbances.",
    url: "https://github.com/Jdubs6/UD-Glider-Particle-Filter/tree/main", // update with repo or demo link when ready
    details: (
      <>
        <h2><strong>Estimator Design:</strong></h2>
        <ul>
          <li>
            Implementing a particle filter to fuse IMU, depth, and vehicle
            dynamics for robust underwater localization.
          </li>
          <li>
            Incorporates hydrodynamic drag and buoyancy models to improve
            accuracy in varying currents.
          </li>
        </ul>
        <h2><strong>GUI for Biologists:</strong></h2>
        <ul>
          <li>
            Co-developed a user-friendly interface in React/Electron for
            visualizing glider tracks and surface position estimates.
          </li>
          <li>
            Real-time plotting of trajectories, state uncertainty, and
            environmental parameters.
          </li>
        </ul>
      </>
    ),
    images: [{
        src: "https://salem.njaes.rutgers.edu/wp-content/uploads/2024/02/2024-02-Figure02-1024x615.png",
        href: "https://salem.njaes.rutgers.edu/wp-content/uploads/2024/02/2024-02-Figure02-1024x615.png",
        alt: "Glider Robot Trajectory",
      },
    ],  // add local or hosted screenshots when available
  },
{
    title: "Arduino-Based Autonomous FireFighting Robot",
    year: 2025,
    description: "Built a LiDAR-Capable, ultrasonic and IR-based Firefighting Robot AMR/AGV (Autonomous Mobile Robot/ Autonomous Ground Vehicle)",
    url: "https://github.com/rushabhdhoke/underwater-logger",
    details: (
        <>
      <h2><strong>LiDAR Mount:</strong></h2>
      <ul>
        <li>• Built LiDAR Mount can enable precise real-time environmental mapping and navigation. Help detecting objects up to 30 meters.</li>
        <li>• Reinforce obstacle avoidance and effective navigation in hazardous, low-visibility environments.</li>
      </ul>
      <h2><strong>Ultrasonic Sensors:</strong></h2>
      <ul>
        <li>• Detects objects from 2 cm to 4 meters for close-range obstacle avoidance. Vehicle navigates around the Obstacle to detect IR signal and Identify Fire.</li>
        <li>• Enhanced Path Planning Algorithm allows vehcile to use just 1 Ultrasonic sensor and navigate its way through tight spaces.</li>
      </ul>
      <h2><strong>Infrared (IR) Sensors:</strong></h2>
      <ul>
        <li>• Two IR sensors identify fire sources by detecting IR Emitter signal which triggers a servo to lower a ladder to stop the fire.</li>
      </ul>
      <h2><strong>Control:</strong></h2>
      <ul>
        <li>• Uses Sesnor fusion for autonomous Path Planning and obstacle avoidance. Created a Matrix of total area and applied Navigarion algorithms like Breadth First Search.</li>
        <li>• Built a custom Remote control using an Ardunino Mega with RC Transmitter.</li>
      </ul>
      <h2><strong>Additional Features:</strong></h2>
      <ul>
        <li>• Dual sensors for obstacle detection, ensuring no single point of failure.</li>
        <li>• Remote emergency button.</li>
      </ul> 
    </> 
    ),
    images: [ 
    { src: "./car.jpg",
      href: "./car.jpg",
      alt: "Firefighting robot"},
    { src: "./Remote.jpg",
      href: "./Remote.jpg",
      alt: "Remote"
    } 
    ],
},
{
  title: "Autonomous Surface Vehicle - ASNE PEP25 Competition",
  year: 2025,
  description: "Built and competed in the ASNE PEP25 competition for the First time. Represented University at this national level competition.",
  url: "https://www.navalengineers.org/Delaware",
  details: (
        <>
    <h2><strong>Hull & Frame Adaptation: </strong></h2>
    <ul>
      <li>• Repurposed Seafloor Hydrone ASV hull; all connecting frame and electronics replaced with custom CNC-cut polycarbonate and 3D-printed PLA brackets for a lightweight yet robust structure.</li>
      <li>• Topology-optimized polycarbonate frame reduced weight while supporting a 30 lb payload capacity.</li>
    </ul>
    <h2><strong>Thrusters & Power: </strong></h2>
    <ul>
      <li>• ANSYS hydrodynamic simulations determined required thrust; selected Blue Robotics T500 thrusters (35.5 lbf each) to achieve ~10 m/s top speed.</li>
      <li>• Powered by a 24 V, 20 Ah LiPo battery pack sized to handle peak current draw and ensure competitive endurance.</li>
    </ul>
    <h2><strong>Autonomous & RC Control: </strong></h2>
    <ul>
      <li>• Integrated Seafloor AutoNav system with Cube Orange flight controller and GPS waypoint navigation via ArduPilot Mission Planner.</li>
      <li>• Manual override and emergency-stop control through an Arduino Mega–based RC transmitter interface.</li>
    </ul>
    <h2><strong>Testing & Competition Results: </strong></h2>
    <ul>
      <li>• Buoyancy and ballasting tests confirmed 30 lb capacity; identified and sealed water-seepage points for improved reliability.</li>
      <li>• Field trials reached ~7 m/s unloaded speed and completed 1.7 mi in the finals before a critical failure; scored 61 points overall (Paper: 13.7, Video: 14.3).</li>
    </ul> 
    </> 
  ),
  images: [
    {
      src:    "https://www.navalengineers.org/portals/16/PEP/2025/Delaware/Delaware25_1.jpg",
      href:   "https://www.navalengineers.org/portals/16/PEP/2025/Delaware/Delaware25_1.jpg",
      alt:    "U Delaware boat competing in the ASNE PEP25"
    },
    {
      src:    "https://www.navalengineers.org/portals/16/PEP/2025/Delaware/Delaware25_4.jpg",
      href:   "https://www.navalengineers.org/portals/16/PEP/2025/Delaware/Delaware25_4.jpg",
      alt:    "U Delaware boat competing in the ASNE PEP25"
    },
  ],
},    
{
  title: "Underwater ASL Detection Neural Network",
  year: 2024,
  description: "This project focuses on underwater gesture recognition using image detection. By leveraging neural networks and advanced image processing techniques, the objective was to train a model capable of accurately detecting and classifying underwater gestures.",
  url: "https://github.com/rushabhdhoke/underwater-logger",
  details: (
  <>
    <h3><strong>Project Overview: </strong></h3>
    <ul>
      <li>• Developed an underwater gesture‐recognition pipeline to enable ASV/AUV communication using visual hand signals.</li>
      <li>• Leveraged the CADDY Underwater Gestures dataset, covering 16 distinct gestures in clear, cloudy, and dark conditions.</li>
    </ul>

    <h3><strong>Data Pre-processing: </strong></h3>
    <ul>
      <li>• Set a fixed random seed for reproducible splits and training runs.</li>
      <li>• Mounted Google Drive and monitored NVIDIA GPU memory for efficient data loading.</li>
      <li>• Verified dataset integrity via MD5 checks and structured files into scenario folders.</li>
    </ul>

    <h3><strong>Dataset Splitting & Organization: </strong></h3>
    <ul>
      <li>• Defined training/validation/test splits (70/20/10) per scenario using `sklearn.model_selection`.</li>
      <li>• Automated directory creation and file copying for each split, logging counts for transparency.</li>
      <li>• Exported split metadata to CSV and pickle for downstream analysis and reproducibility.</li>
    </ul>

    <h3><strong>Model Architecture & Training: </strong></h3>
    <ul>
      <li>• Built a ResNet-50 CNN via FastAI’s `vision_learner`, applying ImageNet‐style normalization.</li>
      <li>• Applied extensive data augmentations (rotation, zoom, lighting, warping) to simulate underwater variability.</li>
      <li>• Used a 1× cycle‐fit schedule over 3 epochs at a learning rate of 1e-3, with callbacks to save best checkpoints.</li>
    </ul>

    <h3><strong>Results & Performance: </strong></h3>
    <ul>
      <li>• Achieved a peak validation accuracy of 98.37% (10,905/11,085 correct) with low error rates.</li>
      <li>• Observed confusion primarily between similar gestures (e.g., `num_delimiter` vs. `end_comm`), guiding future augmentation.</li>
      <li>• Model-F (all scenarios) scored <strong>98.45%</strong> on the overall test set, demonstrating strong generalization.</li>
    </ul>

    <h3><strong>Export & Deployment: </strong></h3>
    <ul>
      <li>• Exported the trained learner as `Scuba_Gesture_Detection_NN.pkl` for lightweight inference.</li>
      <li>• Provided a Jupyter Notebook (`Verifying_Results.ipynb`) for manual prediction checks without retraining.</li>
    </ul>

    <h3><strong>Contributions & Next Steps: </strong></h3>
    <ul>
      <li>• Packaged a complete gesture‐classification workflow, from raw data to exportable model.</li>
      <li>• Plan to refine underrepresented classes via targeted augmentation and explore real‐time embedded inference on AUV hardware.</li>
    </ul>
  </>
),
  images: [
    {
      src:    "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11760-021-01930-5/MediaObjects/11760_2021_1930_Fig1_HTML.jpg",
      href:   "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11760-021-01930-5/MediaObjects/11760_2021_1930_Fig1_HTML.jpg",
      alt:    "Underwater gesture Recognition"
    },
    {
      src:    "https://www.mdpi.com/jmse/jmse-06-00091/article_deploy/html/images/jmse-06-00091-g007.png",
      href:   "https://www.mdpi.com/jmse/jmse-06-00091/article_deploy/html/images/jmse-06-00091-g007.png",
      alt:    "Working Model"
    },
  ],
},
];
