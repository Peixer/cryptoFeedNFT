import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Modal({
  media_url,
  onClose,
}: {
  media_url: string;
  onClose?: () => void;
}) {
  let overlayRef = useRef();
  const router = useRouter();
  const [media, setMedia] = useState(media_url);

  function handleClose() {
    router.push("/", undefined, { shallow: true });
    onClose();
  }

  async function generateAIImage(media_url) {
    debugger;
    const response = await axios.post("/api", {
      media_url,
    });
    console.log(response.data);
    setMedia(response.data.output);
  }

  useEffect(() => {
    if (media_url) {
      generateAIImage(media_url).then(() => {
        console.log("done");
      });
    }
  }, [media_url]);

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <Image
        alt="Next.js Conf photo"
        className="mb-5 transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        placeholder="blur"
        src={media}
        blurDataURL={media}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
      />
    </Dialog>
  );
}
