import { NextPage } from "next";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";

const ModalPage: NextPage = () => {
  const router = useRouter();
  const { media_url } = router.query;
  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <Modal media_url={media_url as string} />
      </main>
    </>
  );
};

export default ModalPage;
