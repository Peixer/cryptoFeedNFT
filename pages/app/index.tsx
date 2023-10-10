import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  const router = useRouter();
  const initialUsername = (router.query.username as string) ?? "";

  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [usernameField, setUsernameField] = useState<string>(initialUsername);
  const [username, setUsername] = useState<string>(initialUsername);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/app?username=${usernameField}`, undefined);
    if (!usernameField) {
      setImages([]);
      router.push("/app");
      return;
    }
  }

  const getUserPhotos = useCallback(async (username) => {
    if (!username) return;

    setLoading(true);
    const mediaResponse = await axios.get(`/api/medias?username=${username}`);

    if (mediaResponse.data) {
      setImages(
        mediaResponse.data.medias
          .filter((x) => x)
          .map((item: any, index) => {
            return {
              id: index,
              media_url: item.url,
              description: item.description,
            };
          })
      );
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const queryUsername = router.query.username as string;
    if (!queryUsername) return setUsername("");
    setUsername(queryUsername);
    setUsernameField(queryUsername);
  }, [router.query.username]);

  useEffect(() => {
    if (!username) {
      setImages([]);
      return;
    }
    getUserPhotos(username);
  }, [username]);

  return (
    <>
      <Head>
        <title>Crypto Feed NFT</title>
        <meta
          property="og:image"
          content="https://www.cryptofeednft.com/logo.png"
        />
        <meta
          name="twitter:image"
          content="https://www.cryptofeednft.com/logo.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="sm:col-span-2">
          <div className="mb-5 w-full sm:flex sm:flex-auto">
            <form className="mt-2.5 w-full" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Enter Instagram username"
                value={usernameField}
                onChange={(e) => setUsernameField(e.target.value)}
                id="email"
                className="w-full rounded-md border-0 px-2.5 py-2.5 text-lg text-gray-900 shadow-md  placeholder:text-gray-400 focus:outline-none sm:leading-6"
              />
            </form>
            <div className="mt-2.5 w-52 sm:m-auto sm:ml-4">
              <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex text-3xl md:hidden" />
            </div>
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
          {images.map(({ id, media_url, description }) => (
            <Link
              key={id}
              href={`/p/?media_url=${encodeURIComponent(media_url)}`}
              onClick={(e) => {
                localStorage.setItem("description", description);
              }}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="selected image"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                id={id}
                src={media_url}
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
