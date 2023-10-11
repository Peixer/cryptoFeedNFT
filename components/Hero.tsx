import { Button, ButtonGroup, Link } from "@nextui-org/react";

const Hero = () => {
  return (
    <section id="home" className=" dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            The New
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-violet-600 to-violet-400 ">
              {" "}
              Social{" "}
            </span>
            Candy Machine
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Minting NFTs never been easier before. We present you a no code
            solution for grandpas powered with AI.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/2.1.png"
            alt="My Image Alt Text"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;
