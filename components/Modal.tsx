import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useReplicate } from "../hooks/useApi";
import MintButton from "./MintButton";

function RadioGroups({
  setSelected,
  models,
}: {
  setSelected: any;
  models: any[];
}) {
  return (
    <div>
      <fieldset className="m-4">
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {models.map(({ id, title }) => (
            <div key={id} className="flex items-center">
              <input
                id={id}
                name="notification-method"
                type="radio"
                defaultChecked={id === "barbie"}
                onChange={(e) => setSelected(id)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={id}
                className="ml-3 block text-sm font-medium leading-6 text-white"
              >
                {title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default function Modal({ media_url }: { media_url: string }) {
  const router = useRouter();
  const [media, setMedia] = useState(media_url);
  const { generateAIImage, isLoading } = useReplicate(media_url, (output) => {
    setMedia(output);
  });

  const [selected, setSelected] = useState("barbie");
  const models = [
    { id: "barbie", title: "Barbie" },
    { id: "emoji", title: "Emoji" },
    { id: "notion", title: "Notion Style" },
    { id: "sdxl", title: "SDXL" },
  ];

  function handleClose() {
    router.back();
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className="fixed inset-0 z-10 mx-auto flex max-w-[512px] flex-col items-center justify-center"
    >
      <Dialog.Panel className="relative rounded-3xl border border-white/10 bg-white/10 p-8">
        <Dialog.Title className="mb-5 text-center text-2xl font-bold text-white">
          Generate AI Art from Your Photo ✨
        </Dialog.Title>
        <div className="relative">
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
        </div>
        <RadioGroups setSelected={setSelected} models={models} />
        <div className="flex flex-col gap-y-4">
          <button
            onClick={() => generateAIImage(selected)}
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
