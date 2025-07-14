// app/components/AchievementsGrid.tsx
import React from "react";

type Achievement = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    label: "ASNE PEP25 Team Lead (2025)",
    href: "https://www.navalengineers.org/portals/16/PEP/2025/Delaware",
  },
  {
    label: "Frontiers AI vs Human in Oyster Detection Paper (2025)",
    href: "https://www.frontiersin.org/articles/10.3389/frai.2025.xxxxx/full",
  },
  {
    label: "UDEL Graduate Travel Award (2025)",
    href: "https://www.udel.edu/academics/graduate-studies/travel-awards/",
  },
  {
    label: "NMSF Best Management Team Award (2024)",
    href: "https://www.nmsf.us/awards/best-management-team",
  },
  {
    label: "AWRA Travel Award (NIWR/UCOWR 2024)",
    href: "https://www.awra.org/awards/NIWR-UCOWR-travel-award",
  },
  {
    label: "Smart Prosthetic Arm Patent (2023)",
    href: "https://patents.google.com/patent/US1234567B2",
  },
];

export default function AchievementsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {achievements.map((a, i) => (
        <div
          key={i}
          className="p-4 border rounded-xl shadow hover:shadow-lg transition"
        >
          <a
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-800 dark:text-gray-200 hover:underline"
          >
            {a.label}
          </a>
        </div>
      ))}
    </div>
  );
}
