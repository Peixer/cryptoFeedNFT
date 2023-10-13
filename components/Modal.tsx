import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useReplicate } from "../hooks/useApi";
import MintButton from "./MintButton";
import Notification from "../components/Notification";

function RadioGroups({
  setSelected,
  models,
}: {
  setSelected: any;
  models: any[];
}) {
  return (
    <div>
      <fieldset className="m-2">
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
                className="ml-3 block text-sm font-medium leading-6 text-white">
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
    setShow(true);
  });
  const [show, setShow] = useState(false);

  const [selected, setSelected] = useState("barbie");
  const models = [
    { id: "barbie", title: "Barbie" },
    { id: "emoji", title: "Emoji" },
    { id: "notion", title: "Notion Style" },
    { id: "cartoonify", title: "Cartoonify" },
  ];

  function handleClose() {
    router.back();
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      className="fixed inset-0 z-10 mx-auto flex flex-col items-center justify-center bg-gradient-to-tr from-violet-500 to-violet-400 ">
      <Dialog.Panel className="relative w-full max-w-screen-sm rounded-3xl border  border-white/10  bg-white/10 bg-zinc-800 px-6 py-16 ">
        <Dialog.Title className="mb-2 text-center text-2xl font-bold text-white sm:mb-5">
          Generate AI Art from Your Photo ✨
        </Dialog.Title>
        <div className="relative h-auto w-full flex justify-center items-center">
          <Image
            alt="Next.js Conf photo"
            className={`z-40 h-auto w-auto transform rounded-lg transition will-change-auto group-hover:brightness-110 ${
              isLoading ? "brightness-50" : "brightness-90"
            }`}
            style={{ transform: "translate3d(0, 0, 0)" }}
            placeholder="blur"
            src={media}
            blurDataURL={media}
            width={640}
            height={640}
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
        <div className="flex flex-col items-center  justify-center gap-y-4">
          <button
            onClick={() => generateAIImage(selected)}
            className="w-full rounded-lg bg-gradient-to-tl from-violet-600 to-violet-400 py-3 text-medium font-medium text-slate-200 hover:bg-gradient-to-tl hover:from-violet-700 hover:to-violet-500 ">
            Generate Image
          </button>
          <MintButton media_url={media} setShow={setShow} />
        </div>
      </Dialog.Panel>
      <Notification setShow={setShow} show={show} />
    </Dialog>
  );
}
