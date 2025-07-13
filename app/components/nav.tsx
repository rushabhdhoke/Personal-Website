// app/components/nav.tsx
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

// List of internal nav items
const navItems = [
  { path: "/blog",    name: "About Me" },
  { path: "/projects", name: "Projects" },
  { path: "/photos",   name: "Photos" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      {/* Site title */}
      <Link href="/" className="text-3xl font-semibold tracking-tight">
        {metaData.title}
      </Link>

      <div className="flex items-center gap-6">
        {/* Internal links */}
        {navItems.map(({ path, name }) => (
          <Link
            key={path}
            href={path}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {name}
          </Link>
        ))}

        {/* Resume button */}
        <a
          href="https://drive.google.com/file/d/1kkXGjgyL-KoT1HiXy25vSy28FfX-drpz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
        >
          View Resume
        </a>

        {/* Theme toggle */}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
