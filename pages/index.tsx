import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import type { ImageProps } from "../utils/types";
import Axios from "axios";
import { AxiosCacheInstance, setupCache } from "axios-cache-interceptor";
import Link from "next/link";

const axiosCache = Axios as any;

if (!axiosCache.defaults.cache) {
  setupCache(Axios, {
    ttl: 20 * 60 * 1000,
  });
}

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
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
  const access_token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = 6549937128377215;
  const medias = await Axios.get(
    `https://graph.instagram.com/v18.0/${userId}/media?access_token=${access_token}`,
    {}
  );
  let promises = [];
  medias.data.data.forEach((media) => {
    promises.push(
      Axios.get(
        `https://graph.instagram.com/${media.id}?access_token=${access_token}&fields=id,media_type,media_url,username,timestamp`
      )
    );
  });

  const results = (await Promise.all(promises)).map((res) => res.data);
  console.log(results);

  return {
    props: {
      images: results,
    },
  };
}
