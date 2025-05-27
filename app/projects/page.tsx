"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects · Rushabh Dhoke",
  description: "A complete list of Rushabh Dhoke’s Robotics & software projects.",
};


export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-semibold">Projects</h1>

      {projects.map((proj, idx) => (
        <div key={proj.title} className="border rounded-lg p-4">
          <button
            onClick={() =>
              setExpandedIndex(expandedIndex === idx ? null : idx)
            }
            className="w-full text-left flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-medium">{proj.title}</h2>
              <p className="text-sm text-gray-500">{proj.year}</p>
            </div>
            <span className="text-lg">
              {expandedIndex === idx ? "−" : "+"}
            </span>
          </button>

          <p className="mt-2 text-gray-700">{proj.description}</p>

          {expandedIndex === idx && (
            <div className="mt-4 space-y-4">
              <p className="text-gray-600">{proj.details}</p>

              {proj.images?.length && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {proj.images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${proj.title} screenshot ${i + 1}`}
                      width={600}
                      height={400}
                      className="rounded shadow"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

