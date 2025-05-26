import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        PERSONAL PROFILE!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          :DDDD.
        </p>
        <p>
          YES AND {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          MY PROFILE IS {" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          fully customizable.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          I AM READY IN MINUTES{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Built and maintained by {" "}
          <a href="https://imsirius.xyz/" target="_blank">
            MEE
          </a>
          .
        </p>
      </div>
    </section>
  );
}
