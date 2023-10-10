const About = () => {
  return (
    <div id="about">
      <section className="py-32">
        <div className="container mx-auto mb-20 text-center">
          <p className="block leading-relaxed text-transparent bg-clip-text bg-gradient-to-tl from-violet-600 to-violet-400  mb-2 text-5xl font-bold leadi sm:text-6xl">
            About Us
          </p>
          <h2 className="block tracking-normal text-lg font-bold text-slate-50 m-4">
            What is Crypto Feed?
          </h2>
          <p className="block antialiased text-lg font-normal leading-relaxed text-slate-200 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
            {`We've developed an innovative DApp that lets users turn their Instagram Photos into NFT’s with just one click.`}
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="grid justify-center text-center">
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full p-2.5 bg-gradient-to-tl from-violet-600 to-violet-400  text-slate-50 ring-8 ring-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h5 className="block tracking-normal  text-xl leading-snug text-slate-50 font-semibold">
              Onboarding
            </h5>
            <p className="block antialiased  text-base leading-relaxed text-slate-200 px-8 font-normal">
              Our mission is to unite artistic trailblazers and pioneering
              influencers from web2 with the endless capabilities of web3.
            </p>
          </div>
          <div className="grid justify-center text-center">
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full  p-2.5 bg-gradient-to-tl from-violet-600 to-violet-400  text-slate-50 ring-8 ring-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h5 className="block antialiased tracking-normal  text-xl leading-snug text-slate-50 font-semibold">
              Easy Mint
            </h5>
            <p className="block antialiased  text-base leading-relaxed text-slate-200 px-8 font-normal">
              AI filters and easy no-code solutions that even your grandparents
              could use.
            </p>
          </div>
          <div className="grid justify-center text-center">
            <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full  p-2.5 bg-gradient-to-tl from-violet-600 to-violet-400  text-slate-50 ring-8 ring-slate-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h5 className="block antialiased tracking-normal  text-xl leading-snug text-slate-50 font-semibold">
              Monetize
            </h5>
            <p className="block antialiased  text-base leading-relaxed text-slate-200 px-8 font-normal">
              Solana Pay - Empowering creators with seamless transactions,
              premium perks & royalties
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
