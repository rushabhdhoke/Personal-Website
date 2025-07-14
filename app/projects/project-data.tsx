import React, { ReactNode } from 'react';
import type { Metadata } from "next";
import Image from 'next/image';
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
    title: "Legged Robot Manipulation in IsaacLab on custom Terrains",
    year: 2025,
    description:
      "Deep RL framework for quadruped navigation over rough terrain via NVIDIA Isaac Sim Sim2Real transfer.",
    url: "https://github.com/rushabhdhoke/Terrains_for_Quadrupeds", 
    details: (
    <>
      <p>
        We build procedurally generated terrains in NVIDIA Isaac Lab using the Python SDK, varying slope, friction, and obstacle layouts to simulate real-world unstructured environments.
      </p>
      <p>
        A manager-based training loop orchestrates multiple expert “teacher” policies—each specialized for tasks like climbing, bounding, or traversing narrow paths—and distills them into a unified lightweight “student” network for efficient Sim2Real transfer.
      </p>
      <p>
        Reinforcement learning uses Proximal Policy Optimization with actor-critic networks (two 256-unit hidden layers) and domain randomization of payload, mass distribution, and terrain properties to ensure robustness under variable conditions.
      </p>
      <p>
        On hardware, a Jetson Orin Nano runs ROS2 nodes capturing synchronized stereo RealSense D435 point clouds via ROSbag. We filter out the robot’s silhouette and feed the data into a 3D CNN terrain classifier, enabling the controller to adjust gait parameters on the fly.
      </p>
    </>
  ),
    images: [
      {
        src: "https://moonlight-paper-snapshot.s3.ap-northeast-2.amazonaws.com/arxiv/robust-reinforcement-learning-based-locomotion-for-resource-constrained-quadrupeds-with-exteroceptive-sensing-0.png",
        href: "https://github.com/rushabhdhoke/Terrains_for_Quadrupeds",
        alt: "Quadruped in simulation",
      },
    ],
  },
{
    title: "Trajectory Estimation for Underwater Glider Robot",
    year: 2025,
    description:
      "Physics-aware RNN model for real-time underwater motion planning under environmental disturbances.",
    url: "https://github.com/rushabhdhoke/Slocan-Glider-Trajectory-Estimation", // update with repo or demo link when ready
    details: (
  <>
    <p>
      We fuse depth, pressure and IMU measurements in a 5 000-particle Sequential Monte Carlo filter that propagates a 6-DOF glider motion model including nonlinear drag and buoyancy forces.
    </p>
    <p>
      A two-layer LSTM takes the filter’s state estimates and control inputs over the last 20 timesteps to predict residual corrections, trained end-to-end with a combined mean-squared error on pose and KL divergence on the particle weights.
    </p>
    <p>
      Hydrodynamic coefficients are calibrated via CFD, and process noise is adapted at runtime based on the local Reynolds number to account for varying current conditions.
    </p>
    <p>
      A lightweight React GUI streams real-time trajectories with covariance ellipses and surface-fix overlays, and can export CSV logs and KML for downstream analysis.
    </p>
  </>
),
    images: [{
        src: "https://salem.njaes.rutgers.edu/wp-content/uploads/2024/02/2024-02-Figure02-1024x615.png",
        href: "https://github.com/rushabhdhoke/Slocan-Glider-Trajectory-Estimation",
        alt: "Glider Robot Trajectory",
      },
    ],  // add local or hosted screenshots when available
  },
{
    title: "Arduino-Based Autonomous FireFighting Robot",
    year: 2025,
    description: "Built a LiDAR-Capable, ultrasonic and IR-based Firefighting Robot AMR/AGV (Autonomous Mobile Robot/ Autonomous Ground Vehicle)",
    url: "https://github.com/rushabhdhoke/Arduino-Based-RC-and-Autonomous-Firefighting-Robot",
    details:( 
      <>
      <p>
        Runs on an Arduino Mega 2560 with nRF24L01+ SPI radios for dual‐mode RF control, automatically switching between manual WASD/button‐panel commands and autonomous fire‐seeking behavior.
      </p>
      <p>
        Flame detection uses two front‐mounted IR sensors that scan for modulated IR flicker; once detected, the bearing is calculated and a PID‐driven drive controller navigates the AGV toward the target.
      </p>
      <p>
        Obstacle avoidance relies on HC-SR04 ultrasonic modules with median‐filtered range measurements to build a local occupancy map at 20 Hz, halting or rerouting the robot when obstacles enter a 30 cm guard zone.
      </p>
      <p>
        Boundary detection employs QTI reflectance sensors sampled via analog multiplexing; grid‐following logic uses thresholding and hysteresis to keep the vehicle within a predefined arena.
      </p>
      <ul>
        <li>
          Ladder actuation is servo‐driven (MG996R, PWM at 50 Hz), deploying based on estimated flame distance and retracting upon “extinguish” confirmation.
        </li>
        <li>
          Feedback LEDs (IR, ultrasonic, line detection) and a piezo buzzer provide real‐time status and error alerts.
        </li>
        <li>
          Safety features include RF link watchdog timers and obstacle‐block timeouts to prevent runaway motion in case of sensor or communication failures.
        </li>
      </ul>
    </>
  ),
    images: [ 
    { src: "/photos/car.jpg",
      href: "https://github.com/rushabhdhoke/Arduino-Based-RC-and-Autonomous-Firefighting-Robot",
      alt: "Firefighting robot"},
    { src: "/photos/Remote.jpg",
      href: "https://github.com/rushabhdhoke/Arduino-Based-RC-and-Autonomous-Firefighting-Robot",
      alt: "Remote"
    } 
    ],
},
{
  title: "Autonomous Surface Vehicle - ASNE PEP25 Competition",
  year: 2025,
  description: "Built and competed in the ASNE PEP25 competition for the first time, representing University of Delaware at a national level.",
  url: "https://www.navalengineers.org/Delaware",
  details: (
    <>
      <p>
        The ASV uses a Seafloor Hydrone hull retrofitted with a custom CNC-cut polycarbonate frame and 3D-printed PLA brackets, reducing overall mass by 15% while supporting a 30 lb payload of sensors and actuators.
      </p>
      <p>
        Propulsion is handled by dual Blue Robotics T500 thrusters (35.5 lbf each), with thrust requirements validated through ANSYS hydrodynamic simulations to achieve a top speed of ~10 m/s in calm water.
      </p>
      <p>
        Power comes from a 24 V/20 Ah LiPo battery pack, sized for peak current draw during rapid acceleration and optimized via MATLAB/Simulink duty-cycle analysis to ensure 30 minutes of continuous operation.
      </p>
      <p>
        An ArduPilot stack on a Cube Orange flight controller runs GPS waypoint navigation and failsafe routines; manual override and emergency stop are available through an Arduino Mega–based RC interface with real-time telemetry feedback.
      </p>
      <ul>
        <li>
          Buoyancy and ballasting tests used Archimedes’ principle and a calibrated load cell to confirm 30 lb capacity, with epoxy-sealed compartments preventing seepage under 1 m submergence.
        </li>
        <li>
          Sensor suite includes a downward-facing lidar altimeter (Slamtec RPLidar) for depth-profiling and an IMU-GND fusion algorithm to compensate for wave-induced pitch/roll.
        </li>
        <li>
          In-water trials measured 7 m/s unloaded speed; data logging via ROSbag recorded motor voltage, current draw, GPS fix accuracy, and heading drift for post-race analysis.
        </li>
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
  title: "Underwater Scuba Sign Language Detection",
  year: 2024,
  description: "This project focuses on underwater gesture recognition using image detection. By leveraging neural networks and advanced image processing techniques, the objective was to train a model capable of accurately detecting and classifying underwater gestures.",
  url: "https://github.com/rushabhdhoke/Underwater-scuba-sign-language-Detection",
  details: (
    <>
      <p>
        Utilized the CADDY Underwater Hand Gesture Dataset with eight scenario-aware splits (biograd-A/B/C, genova-A, brodarski-A/B/C/D) and enforced dataset integrity via MD5 checks and deterministic seeding in numpy, Python hash, and PyTorch.
      </p>
      <p>
        Preprocessing scripts automate unzipping, validation, directory listing, and programmatic creation of train/valid/test folders (70/20/10 splits), exporting lists as CSV and pickle for downstream reproducibility.
      </p>
      <p>
        Built a Fast.ai cnn_learner with ResNet-50 backbone; training used ImageDataLoaders.from_folder with Resize(224), batch_tfms including rotations, zoom, lighting, warp, and ImageNet normalization; optimized via fit_one_cycle with Adam at lr_max 1e-3 and model checkpointing callbacks.
      </p>
      <p>
        Evaluation employed ClassificationInterpretation to plot top-loss examples and confusion matrices, achieving 98.37% peak validation accuracy and 98.45% overall F1–score across all scenarios.
      </p>
      <ul>
        <li>
          The trained Learner is exported via <code>learn.export('results/model-F.pkl')</code> for direct loading and inference on AUV Python stacks using <code>load_learner</code>.
        </li>
        <li>
          Deployment notebooks demonstrate live frame cropping, model.predict() calls, and CSV/KML log exports for telemetry and post-dive analysis.
        </li>
      </ul>
    </>
  ),
  images: [
    {
      src:    "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11760-021-01930-5/MediaObjects/11760_2021_1930_Fig1_HTML.jpg",
      href:   "https://github.com/rushabhdhoke/Underwater-scuba-sign-language-Detection",
      alt:    "Underwater gesture Recognition"
    },
    {
      src:    "https://www.mdpi.com/jmse/jmse-06-00091/article_deploy/html/images/jmse-06-00091-g007.png",
      href:   "https://github.com/rushabhdhoke/Underwater-scuba-sign-language-Detection",
      alt:    "Working Model"
    },
  ],
},
{
    title: "Fake News Detection using Machine Learning",
    year: 2024,
    description:
      "A binary classifier that distinguishes real from fake news articles.",
    url: "https://github.com/rushabhdhoke/Fake-News-Detection-Final-Project", 
    details: (
    <>
      <p>
        Combined two CSVs (≈23.5 K fake, ≈21.4 K real articles) into a single dataset with binary labels and dropped the date column for streamlined processing.
      </p>
      <p>
        Preprocessed text by lowercasing, stripping URLs and non-alphabetic characters via regex, removing NLTK English stopwords, and applying Snowball stemming to reduce words to their root forms.
      </p>
      <p>
        Transformed the cleaned corpus into a high-dimensional sparse feature matrix using TF-IDF vectorization on the concatenated title and body, emphasizing distinctive terms across documents.
      </p>
      <p>
        Trained Support Vector Machines with both linear and RBF kernels, tuned C and γ via grid search, and evaluated on an 80/20 train/test split—reporting accuracy, precision, recall, and F₁ metrics to compare model performance.
      </p>
    </>
  ),
    images: [
      {
        src: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11042-022-12788-1/MediaObjects/11042_2022_12788_Fig1_HTML.png",
        href: "https://github.com/rushabhdhoke/Terrains_for_Quadrupeds",
        alt: "Quadruped in simulation",
      },
    ],
  }

  
];
