// app/components/AboutTimeline.tsx

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
    description: "Research in Autonomous Systems.",
  },
  {
    year: "2024",
    title: "Automation Intern",
    subtitle: "UDairy Creamery",
    description: "Built automation scripts and optimized production lines.",
  },
  {
    year: "2022",
    title: "3D Printing & Reverse Engineering Intern",
    subtitle: "Simpliforge Pvt. Ltd.",
    description: "Designed custom parts and improved CAD-to-print workflows.",
  },
  {
    year: "2022",
    title: "B.E Mechanical Engineering",
    subtitle: "Mumbai University (Terna Engieering College)",
    description: "Graduated in top 10% of batch.",
  },
];

export default function AboutTimeline() {
  return (
    <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-12">
      {milestones.map((m, i) => (
        <div key={i} className="mb-12 relative">
          {/* Year badge: larger, centered on the line */}
          <div
            className="
              absolute 
              -left-6 
              top-1/2 
              transform -translate-y-1/2 
              bg-blue-600 
              rounded-full 
              w-10 h-10 
              flex items-center justify-center 
              text-white 
              text-xs 
              font-semibold
            "
          >
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
