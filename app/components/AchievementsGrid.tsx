type Achievement = {
  label: string;
  icon?: React.ReactNode; // you can drop in an <FaMedal/> etc.
};

const achievements: Achievement[] = [
  { label: "AWRA Travel Award (NIWR/UCOWR 2024)" },
  { label: "ORISE Summer 2024 @ USACE ERDC-CERL" },
  { label: "Smart Prosthetic Arm Patent (2023)" },
  { label: "1st Place Poster @ BioRob 2024 (Germany)" },
  { label: "ASNE PEP25 Team Lead (2025)" },
  { label: "94% F1 Underwater Sign Language Model" },
];

export default function AchievementsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {achievements.map((a, i) => (
        <div
          key={i}
          className="p-4 border rounded-xl shadow hover:shadow-lg transition"
        >
          {/* If you want icons, render them here */}
          <p className="font-medium text-gray-800 dark:text-gray-200">
            {a.label}
          </p>
        </div>
      ))}
    </div>
  );
}
