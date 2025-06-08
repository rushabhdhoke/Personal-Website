type Milestone = {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "2025",
    title: "M.S. in Robotics & Mechatronics",
    subtitle: "University of Delaware",
    description: "Research in particle filter estimation for underwater gliders.",
  },
  {
    year: "Summer 2024",
    title: "Automation Intern",
    subtitle: "UDairy Creamery",
    description: "Built automation scripts and optimized production lines.",
  },
  {
    year: "2023",
    title: "3D Printing & Reverse Engineering Intern",
    subtitle: "Simpliforge Pvt. Ltd.",
    description: "Designed custom parts and improved CAD-to-print workflows.",
  },
  {
    year: "2022",
    title: "B.Tech in Mechatronics Engineering",
    subtitle: "Savitribai Phule Pune University",
    description: "Graduated top 5% with a focus on control systems and robotics.",
  },
];

export default function AboutTimeline() {
  return (
    <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-8">
      {milestones.map((m, i) => (
        <div key={i} className="mb-12 relative">
          <div className="absolute -left-4 top-0 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white">
            {m.year}
          </div>
          <h3 className="text-xl font-semibold">{m.title}</h3>
          {m.subtitle && (
            <p className="text-sm text-gray-500 mb-1">{m.subtitle}</p>
          )}
          <p className="text-gray-700 dark:text-gray-300">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
