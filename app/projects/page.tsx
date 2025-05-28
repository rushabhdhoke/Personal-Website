// app/projects/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🐛 Test Projects",
  description: "Just a quick server-render test",
};

export default function ProjectsPage() {
  return (
    <div style={{ padding: "2rem", background: "#fee", color: "#900" }}>
      🚨 Server-rendered content here!
    </div>
  );
}
