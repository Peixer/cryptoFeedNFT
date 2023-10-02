import { NextPage } from "next";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";

const Home: NextPage = () => {
  const router = useRouter();
  const { media_url } = router.query;
  function closeModal() {
    router.push("/", undefined, { shallow: true });
  }

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <Modal media_url={media_url as string} onClose={closeModal} />
      </main>
    </>
  );
};

export default Home;
