// app/components/AboutHero.tsx
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-0 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column: narrative cards */}
        <div className="space-y-6">
          {/* Background */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Background</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I’m pursuing an M.S. in Automation, Robotics and Mechatronics
              at the University of Delaware. I build and test real-world robotic
              systems, design control algorithms, and turn sensor data into
              actionable insights.
            </p>
          </div>

          {/* Research Interests */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Research Interests</h2>
            <p className="text-gray-700 dark:text-gray-300">
              My current work spans particle-filter estimation for underwater
              gliders, Sim2Real reinforcement learning in Isaac Sim, and
              AI/ML methods for environmental robotics and autonomous vehicles.
            </p>
          </div>

          {/* Professional Philosophy */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Professional Philosophy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in leveraging cutting-edge robotics, AI to solve
              real-world challenges—balancing rigorous control theory with
              user-centered design and robust field deployment.
            </p>
          </div>
        </div>

        {/* Right column: photo, education + stats */}
        <div className="space-y-6">
          {/* Profile Photo */}
          <div className="flex justify-center">
            <Image
              src="/photos/ghiby_image.png"   // adjust to your path
              alt="Rushabh Dhoke"
              width={240}
              height={240}
              className="rounded-full border-4 border-blue-600"
              priority
            />
          </div>

          {/* Education Timeline */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-900 dark:text-gray-100 font-medium">
                  M.S. in Automation, Robotics &amp; Mechatronics
                </span>
                <span className="block text-gray-600 dark:text-gray-400">
                  University of Delaware, 2024–2026
                </span>
              </li>
              <li>
                <span className="block text-gray-900 dark:text-gray-100 font-medium">
                  B.E in Mechanical Engineering
                </span>
                <span className="block text-gray-600 dark:text-gray-400">
                  University of Mumbai (Terna Engineering College), 2019–2022
                </span>
              </li>
            </ul>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-blue-600">2+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                Years of Experience
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-green-500">5+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                Projects Completed
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center shadow">
              <div className="text-2xl font-bold text-purple-500">10+</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                Technical Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
