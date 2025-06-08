// app/blog/page.tsx
import type { Metadata } from "next";
//import AboutHero from "app/components/AboutHero";
import AboutTimeline from "app/components/AboutTimeline";
import AchievementsGrid from "app/components/AchievementsGrid";

export const metadata: Metadata = {
  title: "About Me · Rushabh Dhoke",
  description: "Professional journey and key achievements",
};

export default function AboutPage() {
  return (

      <section>
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <AboutTimeline />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <AchievementsGrid />
      </section>
    </main>
  );
}
