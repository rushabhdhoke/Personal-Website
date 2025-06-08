// app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me · Rushabh Dhoke",
  description: "Professional journey and achievements of Rushabh Dhoke",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">
        About Me
      </h1>

      {/* Professional & Academic Journey */}
      <div>
        <h2 className="text-2xl font-medium mb-4">My Journey</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>2024–2025:</strong> M.S. in Automation, Robotics &amp; Mechatronics, University of Delaware
          </li>
          <li>
            <strong>Summer 2024:</strong> Automation & Production Intern, UDairy Creamery
          </li>
          <li>
            <strong>2023:</strong> 3D Printing &amp; Reverse Engineering Intern, Simpliforge Pvt. Ltd.
          </li>
          <li>
            <strong>2022:</strong> B.Tech in Mechatronics Engineering, Savitribai Phule Pune University
          </li>
          {/* …continue adding your key positions, internships, and degrees… */}
        </ul>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-medium mb-4">Achievements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>AWRA Fully-Sponsored Travel Award to NIWR/UCOWR 2024</li>
          <li>ORISE Summer 2024 Participant — USACE ERDC-CERL</li>
          <li>Patent Granted (Smart Prosthetic Arm), 2023</li>
          <li>First Place Poster, BioRob 2024 (Germany)</li>
          <li>ASNE PEP25 Competition Team Lead, 2025 — Top scores in paper &amp; video</li>
          <li>94% F1 Underwater Sign Language Detection Model (FastAI + ResNet-50)</li>
          {/* …add any other awards, publications, qualifiers… */}
        </ul>
      </div>
    </section>
  );
}
