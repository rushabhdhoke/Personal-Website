import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects · Rushabh Dhoke",
  description: "A complete list of Rushabh Dhoke’s robotics & software projects.",
};


export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="mb-8 text-3xl font-semibold">All Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            className="block p-4 border rounded hover:shadow-lg transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">{project.title}</h2>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
            <p className="mt-1 text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
