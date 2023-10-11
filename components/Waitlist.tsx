import React from "react";

const Waitlist = () => {
  return (
    <div>
      <section className="py-6 dark:text-gray-50" id="waitlist">
        <div className="container mx-auto flex flex-col justify-center space-y-8 p-4 md:p-10 lg:flex-row lg:justify-between lg:space-x-12 lg:space-y-0">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="leadi text-5xl font-bold">Stay in the loop</h1>
            <p className="text-lg">
              Our mission is to unite artistic trailblazers and pioneering
              influencers from web2 with the endless capabilities of web3.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
