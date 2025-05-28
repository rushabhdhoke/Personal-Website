// app/projects/page.tsx (server component)
import type { Metadata } from "next";
import ClientProjects from "./ClientProjects";

export const metadata: Metadata = {
  title: "Projects · Rushabh Dhoke",
  description: "A complete list of Rushabh Dhoke’s robotics & software projects.",
};

export default function Projects() {
  return <ClientProjects />;
}
