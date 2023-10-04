import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useReplicate } from "../hooks/useApi";
import MintButton from "./MintButton";

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
    const { generateAIImage, isLoading } = useReplicate(media_url, (output) => {
        setMedia(output);
    });

    function handleClose() {
        router.back();
        onClose();
    }

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            initialFocus={overlayRef}
            className="fixed inset-0 z-10 mx-auto flex max-w-[512px] flex-col items-center justify-center"
        >
            <Dialog.Panel className="relative rounded-3xl border border-white/10 bg-white/10 p-8">
                <Image
                    alt="Next.js Conf photo"
                    className={`z-40 mb-5 transform rounded-lg transition will-change-auto group-hover:brightness-110 ${
                        isLoading ? "brightness-50" : "brightness-90"
                    }`}
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    placeholder="blur"
                    src={media}
                    blurDataURL={media}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />
                {isLoading && (
                    <ClipLoader
                        className="absolute inset-0 mx-auto my-auto"
                        color="#FFF"
                    />
                )}
                <div className="flex flex-col gap-y-4">
                    <button
                        onClick={generateAIImage}
                        // className="w-full rounded-lg bg-gradient-to-r from-purple-300 to-pink-200 py-4 text-xl font-medium text-black"
                        className="w-full rounded-lg border border-white/25 bg-gradient-to-r py-4 text-xl font-medium text-white/50"
                    >
                        Generate Image
                    </button>
                    <MintButton media_url={media} />
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}
