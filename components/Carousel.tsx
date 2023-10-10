export default function Carousel() {
  const images = [
    {
      image:
        "url('https://pbxt.replicate.delivery/W2i0lH5VBd6dHl17Ht7Efp8h50Ab4FWEdNlpyz1HfUedlxVjA/out-0.png')",
      number: 12445,
    },
    {
      image:
        "url('https://pbxt.replicate.delivery/q6SkFQYHnQZOAZmPPru2amSf1XwP56yi3LB9eGKYxq5fnrVjA/out-0.png')",
      number: 23311,
    },
    {
      image:
        "url('https://pbxt.replicate.delivery/c6Ph5OaMc078KZ2NNpbfpO9jVAcExql0KPNOw665neo9ymrRA/output.png')",
      number: 12422,
    },
    {
      image:
        "url('https://pbxt.replicate.delivery/VIxhJGxNtRorBZHCOm9IYCfa4ZDMyzf7qQen6639OvMgeauGB/out-0.png')",
      number: 3421,
    },
    {
      image:
        "url('https://pbxt.replicate.delivery/NzVT6YxpqX5rBNjeRBejLDrtFiHAi1eosLntP59rmLgw0yVjA/out-0.png')",
      number: 1223,
    },
  ];

  return (
    <div id="minted">
      <div className="container mx-auto mb-20 text-center">
        <p className="block leading-relaxed text-transparent bg-clip-text bg-gradient-to-tl from-violet-600 to-violet-400  mb-2 text-5xl font-bold leadi sm:text-6xl">
          Minted NFTs
        </p>
        <p className="block antialiased text-lg font-normal leading-relaxed text-slate-200 mx-auto w-full px-4 md:w-10/12 lg:w-7/12 lg:px-8">
          In this section you can explore other NFTs.
        </p>
      </div>
      <div className="container mb-32 mx-auto w-full overflow-hidden p-0 relative">
        <div className="w-full h-full absolute">
          <div
            className="w-1/4 h-full absolute z-50 left-0"
            style={{
              background:
                "linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="w-1/4 h-full absolute z-50 right-0"
            style={{
              background:
                "linear-gradient(to left, #fff 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>
        <div
          className="carousel-items flex items-center justify-center"
          style={{
            width: "fit-content",
            animation: "carouselAnim 10s infinite alternate linear",
          }}>
          {images.map((data) => {
            return (
              <div
                key={data.image}
                className="carousel-focus flex items-center justify-end flex-col relative bg-white mx-5 p-4 mb-4 overflow-hidden rounded-2xl shadow-soft-lg"
                style={{
                  width: 300,
                  height: 300,
                  backgroundImage: data.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="mt-3 mb-0 p-3 text-white font-semibold backdrop-blur-md rounded-lg border border-white/20 bg-white/10 w-full">
                  NFT #{data.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
