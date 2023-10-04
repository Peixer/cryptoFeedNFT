import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import type { ImageProps } from "../utils/types";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
import axios from "axios";

const Home: NextPage = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function getUserPhotos(e) {
    e.preventDefault();
    setLoading(true);
    const mediaResponse = await axios.get(`/api/medias?username=${username}}`);

    if (mediaResponse.data) {
      setImages(
        mediaResponse.data.medias
          .filter((x) => x)
          .map((item: any, index) => {
            return {
              id: index,
              media_url: item,
              media_type: "",
              username: "",
              timestamp: "",
            } as ImageProps;
          })
      );
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="sm:col-span-2">
          <div className="mb-5 mt-2.5">
            <form onSubmit={getUserPhotos}>
              <input
                type="text"
                name="email"
                placeholder="Enter Instagram username"
                onChange={(e) => setUsername(e.target.value)}
                id="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-4xl sm:leading-6"
              />
            </form>
          </div>
        </div>
        {loading && (
          <div className="flex items-center justify-center text-white">
            <svg
              className="-ml-1 mr-3 h-10 w-10 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6z"
              ></path>
            </svg>
            <span className="text-white">Loading...</span>
          </div>
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, media_url }) => (
            <Link
              key={id}
              href={`/p/?media_url=${encodeURIComponent(media_url)}`}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                id={id}
                src={media_url}
                blurDataURL={media_url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      images: [],
    },
  };
}
