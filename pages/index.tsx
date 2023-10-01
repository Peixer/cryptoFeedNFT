import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import type { ImageProps } from "../utils/types";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import Link from "next/link";
import { useIdentity } from "../lib/withIdentity";
import { useEffect, useState } from "react";

const axiosCache = Axios as any;

if (!axiosCache.defaults.cache) {
  setupCache(Axios, {
    ttl: 20 * 60 * 1000,
  });
}

const Home: NextPage = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const identity = useIdentity();
  if (!identity) {
    return null;
  }

  async function getUserPhotos() {
    const mediaResponse = await Axios.get(`/api/medias`);

    if (mediaResponse.data) {
      setImages(
        mediaResponse.data.medias.response.items.map((item: any) => {
          return {
            id: item.pk,
            media_url: item.image_versions2.candidates[1].url,
            media_type: item.media_type,
            username: item.user.username,
            timestamp: item.taken_at,
          } as ImageProps;
        })
      );
    }
  }

  useEffect(() => {
    if (identity && images.length === 0) {
      getUserPhotos();
    }
  }, [identity]);

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
