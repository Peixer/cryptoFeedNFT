import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import axios from "axios";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  async function generateAIImage(media_url) {
    const response = await axios.post("/api", {
      media_url,
    });
    console.log(response.data);
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
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          {images.map(({ id, media_url }) => (
            <Image
              alt="Next.js Conf photo"
              className="mb-5 transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              id={id}
              src={media_url}
              blurDataURL={media_url}
              width={720}
              height={480}
              onClick={(e) => {
                generateAIImage(media_url);
              }}
              sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
            />
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
  const medias = await axios.get(
    `https://graph.instagram.com/v18.0/${userId}/media?access_token=${access_token}`
  );
  let promises = [];
  medias.data.data.forEach((media) => {
    promises.push(
      axios.get(
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
