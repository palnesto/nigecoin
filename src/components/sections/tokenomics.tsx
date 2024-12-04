import React from "react";
import { ChartComponent } from "../chart";

export const TokenomicsSection: React.FC = () => {
  return (
    <section
      className="h-full relative  bg-[#f7f6e1] xs:pt-20 sm:pt-28 md:pt-32 xl:pt-40"
      id="tokenomics"
    >
      <h2 className="text-3xl xs:pl-[10vw] xs:text-2xl sm:pl-[30vw] sm:text-[6vw] lg:pl-[6vw] lg:pt-30 md:pl-[20vw] absolute benz-grotesk md:text-5xl lg:text-[4vw] xl:text-5xl">
        Tokenomics of Nige
      </h2>
      <section className="flex flex-col-reverse lg:flex-row lg:items-baseline lg:justify-between">
        <div className="flex flex-col lg:w-1/2 lg:items-center">
          <img
            src="/people.png"
            alt="People"
            className="w-full lg:pl-7 xl:w-[40vw] "
          />
        </div>

        <div className="lg:w-1/2 flex justify-center w-full">
          <ChartComponent />
        </div>
      </section>
    </section>
  );
};
