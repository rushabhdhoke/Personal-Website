import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
      <div className="md:flex-1 prose prose-neutral dark:prose-invert">
        <h2 className="text-3xl font-semibold mb-2">Hi, I’m Rushabh.</h2>
        <p>
          I’m pursuing an M.S. in Automation, Robotics & Mechatronics at the
          University of Delaware. I build and [test] robotics systems, design
          control algorithms, and turn sensor data into actionable insights.
        </p>
        <p>
          Over the years I’ve worked on underwater gliders, autonomous boats,
          firefighting robots, and more—always chasing better autonomy and
          real-world impact.
        </p>
      </div>
      <div className="md:flex-1 flex justify-center">
        <Image
          src="/profile.png"
          alt="Rushabh Dhoke"
          width={240}
          height={240}
          className="rounded-full border-4 border-blue-600"
          priority
        />
      </div>
    </div>
  );
}
