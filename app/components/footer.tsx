"use client";

import React from "react";
import { FaGithub, FaRss, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-5 h-5 text-gray-600 hover:text-gray-900 transition" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={`mailto:${socialLinks.email}`} icon={TbMailFilled} />
      <a href="/rss.xml" target="_self">
        <FaRss className="w-5 h-5 text-gray-600 hover:text-gray-900 transition" />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a className="no-underline" href="/">
        {metaData.title}
      </a>

      {/* Preserve your custom responsive style */}
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>

      <SocialLinks />
    </small>
  );
}
