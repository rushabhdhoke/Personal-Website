// app/projects/page.tsx
import type { Metadata } from "next";
import ClientProjects from "./ClientProjects";

export const metadata: Metadata = {
  title: "Projects · Rushabh Dhoke",
  description: "All of my robotics & software work.",
};

export default function ProjectsPage() {
  return <ClientProjects />;
}
