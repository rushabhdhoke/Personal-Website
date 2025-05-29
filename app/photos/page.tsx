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
    src: "/photos/photo1.jpg",
    alt: "Calibrating LiDAR on ASV",
    caption: "Calibrating the LiDAR sensor before autonomous trials",
    href: "/photos/photo1.jpg",
  },
  {
    src: "/photos/photo2.jpg",
    alt: "Testing ultrasonic navigation",
    caption: "Running ultrasonic navigation tests in the lab",
    href: "/photos/photo2.jpg",
  },
  {
    src: "/photos/photo3.jpg",
    alt: "Deploying the ASV in the river",
    caption: "Deploying our ASNE PEP ASV on the water for demos",
    href: "/photos/photo3.jpg",
  },
  {
    src: "/photos/photo4.jpg",
    alt: "Building the robot chassis",
    caption: "3D printing and assembling the robot chassis in the workshop",
    href: "/photos/photo4.jpg",
  },
  {
    src: "/photos/photo5.jpg",
    alt: "Programming in the field",
    caption: "Field coding session: tuning control loops outdoors",
    href: "/photos/photo5.jpg",
  },
  {
    src: "/photos/photo6.jpg",
    alt: "Team discussion",
    caption: "Team huddle to review mission plan",
    href: "/photos/photo6.jpg",
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
