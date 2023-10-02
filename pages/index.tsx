import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import type { ImageProps } from "../utils/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";

const Home: NextPage = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const { data: session } = useSession();

  async function getUserPhotos() {
    const mediaResponse = await axios.get(`/api/medias`);

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
  }

  useEffect(() => {
    if (session?.user && images.length === 0) {
      getUserPhotos();
    }
  }, [session]);

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
        {!session && (
          <>
            <button className="text-white" onClick={() => signIn("instagram")}>
              Sign in
            </button>
          </>
        )}
        {session && (
          <>
            <button className="text-white" onClick={() => signOut()}>
              Sign Out
            </button>
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
          </>
        )}
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
