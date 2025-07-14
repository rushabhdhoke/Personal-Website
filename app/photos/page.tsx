import React from "react";
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

// Replace with your actual image data and captions
const photos = [
  {
    src: "/photos/selfie boat.jpg",
    alt: "ASNE Competition Day",
    caption: "Competing in National Marine Robotics Competition",
    href: "/photos/selfie boat.jpg",
  },
  {
    src: "/photos/nmfs.jpg",
    alt: "Best Management Team Award at NMSF",
    caption: "Won Award for presentation at NMSF Coral Reef Restoration Challenge",
    href: "/photos/nmfs.jpg",
  },
  {
    src: "/photos/boat launch.jpg",
    alt: "Deploying the ASV in the river",
    caption: "Deploying our ASNE ASV on the water for testing",
    href: "/photos/boat launch.jpg",
  },
  {
    src: "/photos/0714.gif",
    alt: "Running the FireFighting Robot",
    caption: "Showcasing the Ardunio based RC firefighting robot on an obstacle Task.",
    href: "/photos/0714.gif",
  },
  {
    src: "/photos/AWRA.jpg",
    alt: "Poster Presentation aT AWRA conference",
    caption: "Presented poster for using ASV for dynamic saltwater intrusion detection in Delaware",
    href: "/photos/AWRA.jpg",
  },
  {
    src: "/photos/Boston expo.jpg",
    alt: "Robotics Expo",
    caption: "Representing UD at Robotics and AI summit, in Boston",
    href: "/photos/Boston expo.jpg",
  },
];

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map(({ src, alt, caption, href }, i) => (
          <figure key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </a>
            <figcaption className="p-4 text-sm text-gray-600 text-center">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
