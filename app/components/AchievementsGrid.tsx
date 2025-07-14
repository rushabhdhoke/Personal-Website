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
    href: "https://www.navalengineers.org/Delaware",
  },
  {
    label: "Frontiers AI vs Human in Oyster Detection Paper (2025)",
    href: "https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1587033/full",
  },
  {
    label: "UDEL Graduate Travel Award (2025)",
    href: "https://www.linkedin.com/posts/rushabhdhoke23_bostontech-robotics-rse2025-activity-7324935388173615104-C2e9?utm_source=share&utm_medium=member_desktop&rcm=ACoAACf-cbYBAp41saeuc8Ib5GIPB4YJEokRZdU/",
  },
  {
    label: "NMSF Best Management Team Award (2024)",
    href: "https://www.nmsf.us/awards/best-management-team",
  },
  {
    label: "AWRA Travel Award (NIWR/UCOWR 2024)",
    href: "https://www.linkedin.com/posts/rushabhdhoke23_awra2024-niwr-ucowr-activity-7248579771255709696-n7rS?utm_source=share&utm_medium=member_desktop&rcm=ACoAACf-cbYBAp41saeuc8Ib5GIPB4YJEokRZdU",
  },
  {
    label: "Smart Prosthetic Arm Patent (2023)",
    href: "https://drive.google.com/file/d/1te345t_xvWf0tcZFoO1ZNs75_qnkaJEs/view?usp=sharing",
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
