// app/components/AboutTimeline.tsx
import React from "react";
import Link from "next/link";

type Experience = {
  dateRange: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    dateRange: "June 2025 - Present",
    role: "Volunteer Researcher",
    company: " Dynamic Vision Lab - UDel",
    //companyUrl: "https://www.udel.edu",
    location: "Newark, DE",
    bullets: [
      "Developing a deep RL framework with Dr. Christopher Rasmussen to enable a Unitree Go2 quadruped robot to traverse unstructured terrain. Self-taught NVIDIA Isaac Sim’s Python SDK to build dynamic simulation maps and train reinforcement learning joint controllers via Sim2Real domain randomization. Mitigated sim-to-real foothold instability by integrating proprioceptive feedback loops..",
      "Working on a NVIDIA Jetson Orin Nano running ROS2 to fuse synchronized stereo depth streams from dual Intel RealSense D435 cameras; processed point clouds to extract “scan-dot” style geometric features, building a lightweight CNN to predict locomotion adjustments in outdoor environment"    
    ],
  },
  
  {
    dateRange: "May 2024 – May 2025",
    role: "Volunteer Researcher",
    company: "Centre of Robotics and Autonomous Systems - UDel",
    //companyUrl: "https://www.udel.edu",
    location: "Newark, DE",
    bullets: [
      "Volunteered in Dr. Herbert Tanner’s Lab focusing on autonomous underwater vehicles (AUVs) and ASV’s. Currently working on a Physics-aware RNN model for real-time underwater motion planning under environmental disturbances. Coupling a Particle filter based estimation technique with a LSTM architecture and collaborated with Rutgers Institute to prototype a user-friendly GUI for biologists.",
      "Overcame limited field data and nonlinear current effects by embedding physics-based priors into the network, enhancing planning robustness in variable conditions.",
      "Developed time delay estimation technique to optimize Jaiabot (AUV) submersion time for saltwater intrusion mapping in Delaware Bay. Addressed nonlinear pressure-induced sensor lag by calibrating dynamic delay models in the field, improving mapping resolution and reducing positional error.",
    ],
  },
  {
    dateRange: "May 2024 - Present",
    role: "Automation & Production Intern",
    company: "UDairy Creamery",
    //companyUrl: "https://www.udel.edu/udairy",
    location: "Newark, DE",
    bullets: [
      "Enhanced machine inter-connectivity using Allen-Bradley ControlLogix 1756-L83e PLC and Ethernet.",
      "Implemented Lean Manufacturing principles, achieving a 30% increase in production efficiency.", 
      "Reduced task times by 20% through Value Stream Mapping and creating Standard Operating Procedures (SOPs) data and automated KPI dashboards in Grafana."
    ],
  },
  {
    dateRange: "Jul 2021 - July 2022",
    role: "Research Assistant (ME Department)",
    company: "University of Mumbai (Terna Engineering College)",
    //companyUrl: "https://spu.ac.in",
    location: "Mumbai, India",
    bullets: [
      "Worked with Dr. C.M. Choudhari on the design and development of a novel 3D printed prosthetic arm, employing topology optimization techniques and iterative FEA simulations to maximize strength-to-weight ratio.",
      "Implemented signal processing techniques to analyze EMG sensor data for precise muscle movement and control of the prosthetic. Optimzed gain of EMG sensors to reduce sensor noise and obtain consistent results. Conducted FEA-based fatigue analysis (SolidWorks Simulation) and thermal modeling for user safety compliance; and to validate design robustness under variable operating conditions, culminating in the filing of Design Patent (390492-001)"
    ],
  },

  
  {
    dateRange: "Aug 2021 - Mar 2022",
    role: "3D Printing & Reverse Engineering Intern",
    company: "Simpliforge Pvt. Ltd.",
    //companyUrl: "https://simpliforge.co",
    location: "Mumbai, India",
    bullets: [
      "Developed custom 3D printed miniatures using SLS and FDM 3D Printing. Developed a Foldable Electric scooter; built a swappable battery design for the Indian Institute of Technology.",
      "Performed iterative testing (Shock, Thermal and Cycle) in Solidworks and Ansys to optimize design and build a POC (Proof of Concept.) of a battery pack."
    ],
  }
];

export default function AboutTimeline() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-2">
        Work Experience
      </h2>
      <p className="text-center text-gray-600 mb-12">
        My professional journey showcases a blend of research work, Robotics and Mechanical engineering.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"
          aria-hidden="true"
        />

        <ul className="space-y-12">
          {experiences.map((exp, idx) => (
            <li key={idx} className="relative flex">
              {/* Marker */}
              <div className="absolute left-3 mt-1">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-800" />
              </div>

              {/* Card */}
              <div className="ml-12 flex-1 bg-white dark:bg-gray-800 rounded-xl shadow p-6 relative">
                {/* Date badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-md">
                  {exp.dateRange}
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <Link
                  href={exp.companyUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  {exp.company}
                </Link>
                {exp.location && (
                  <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                )}

                <hr className="border-gray-200 dark:border-gray-700 mb-4" />

                {/* Bullets */}
                <ol className="list-decimal list-inside space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
