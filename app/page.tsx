"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { socialLinks } from "./config";
import { projects } from "./projects/project-data"; // adjust path

export default function Page() {
  const expertise = [
    "Mechatronics Engineer",
    "Robotics Engineer",
    "AI/ML Enthusiast",
    "Innovation Advocate",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % expertise.length), 3000);
    return () => clearTimeout(t);
  }, [idx]);

const featured = projects.slice(0, 3);

  return (
    <section className="max-w-3xl mx-auto p-6 prose prose-neutral dark:prose-invert">
      {/* Hero */}
      <div className="flex flex-col items-center text-center">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Image
            src="https://media.licdn.com/dms/image/v2/C4E03AQFlEyp3IPucYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1625729174702?e=1753920000&v=beta&t=LYk15CUWrirQhT9jVYXUS3xghf5EbgrYcdOHv5XjgSg"
            alt="Rushabh Dhoke"
            width={160}
            height={160}
            className="rounded-full grayscale hover:grayscale-0 transition"
            unoptimized
            priority
          />
        </a>
        <h1 className="mt-5 text-4xl font-bold">Rushabh Dhoke</h1>
        <p className="mt-2 text-xl text-gray-600">{expertise[idx]}</p>
        <p className="mt-4">
          I’m pursuing an M.S. in Automation, Robotics & Mechatronics at the
          University of Delaware. I love building real-world robotic systems,
          designing control algorithms, and turning data into actionable
          insights.
        </p>
        <p className="mt-2">
          <a href="/blog" className="text-blue-600 hover:underline font-medium">
           Learn more about me →
          </a>
       </p>        
        <div className="flex gap-4 mt-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            GitHub
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
          >
            Email Me
          </a>
        </div>
      </div>

            {/* Featured Projects */}
      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featured.map((p) => (
            <div
              key={p.title}
              className="p-4 border rounded shadow hover:shadow-lg transition"
            >
              <h3 className="font-medium text-lg">{p.title}</h3>
              <p className="mt-1 text-gray-600">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/projects"
            className="text-blue-600 hover:underline"
          >
            See all projects →
          </a>
        </div>
      </section>

      {/* Contact */}
      <h2 className="mt-16">Contact</h2>
      <p>
        I’m always open to collaborating on robotics or automation projects.
        Reach out via{" "}
        <a
          href={`mailto:${socialLinks.email}`}
          className="text-blue-600 hover:underline"
        >
          {socialLinks.email}
        </a>
        .
      </p>
      <ul className="flex gap-4 mt-4">
        <li>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
