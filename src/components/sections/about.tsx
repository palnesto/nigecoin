import { MakingVision } from "./making-vision";

export function AboutSection() {
  return (
    <>
      <section className="relative overflow-hidden pt-20" id="aboutus">
        <img src="/Vector.svg" alt="" className="absolute object-top -top-96" />
        <img
          src="/Mask group copy.png"
          className="absolute hidden md:block top-80 h-44 -left-14 md:top-72 transform scale-x-[-1]"
          alt=""
        />
        <div className="bg-blue flex flex-col items-center justify-center pt-10 pb-16 px-4 lg:px-8">
          <h1 className="z-10 benz-grotesk text-white text-base md:text-xl lg:text-2xl xl:text-4xl font-bold tracking-wider text-justify">
            CONNECTING AFRICANS TO <br /> OPPORTUNITIES WORLDWIDE
          </h1>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute lg:w-[600px] md:w-[500px] z-0 xl:w-[900px] xl:h-[300px] 2xl:w-[1100px] 2xl:h-[500px] w-[300px] h-[200px] blur-[100px] rounded-full"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #2D767B 30%, #030E2D 100%)",
              }}
            ></div>

            <img
              src="/coin.gif"
              alt="Coin"
              className="relative pt-6 pb-6 w-[21rem] md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[35vw] shadow-custom"
            />
          </div>

          <p className="text-white lg:text-xl 2xl:text-xl tracking-wider z-10 text-justify  max-w-7xl mx-4 poppins leading-7">
            Across Africa, with unemployment rates reaching 30% in some areas,
            job instability affects millions. Nige Coin offers hope through a
            blockchain platform connecting employers with skilled workers. By
            promoting transparent job placements, it aims to reduce unemployment
            and empower individuals with stable jobs, driving economic growth
            and inviting global investment in Africa's vibrant future.
          </p>
        </div>
        <img
          src="/Mask group copy.png"
          className="absolute hidden md:block h-72 -right-28 top-12"
        />
      </section>
 
      <GreenComp2 />

      <MakingVision />
    </>
  );
}

// const GreenComp = () => {
//   return (
//     <div id="whitepaper" className="bg-blue  md:mt-60 sm:mt-28  relative">
//       <div className="absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-[48%] w-screen h-[48rem] md:h-[60rem] lg:h-[23rem] xl:h-[27rem] 2xl:h-[30rem] bg-green z-0 overflow-hidden">
//         <div className="relative h-full w-full">
//           <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute left-[-360px] -top-[100px] z-10 w-44 h-[1500px] rotate-[-20deg] bg-white opacity-20 transition-all duration-500 animate-moveInfiniteSm md:animate-moveInfiniteMd"></div>
//         </div>
//       </div>
//       <div className="px-8 md:px-16">
//         <div className="rounded-lg flex flex-col items-center lg:flex-row lg:items-center lg:justify-between xl:justify-between gap-5">
//           {/* Image Container */}
//           <div className="relative max-w-60 sm:max-w-none sm:w-72 md:w-96 lg:w-96 lg:left-6 lg:-top-2 xl:w-[500px] xl:left-10 2xl:left-10 2xl:w-[600px]">
//             <div className="relative  aspect-square w-full mx-auto lg:max-w-none">
//               <img
//                 src="/Gif.gif"
//                 alt="People"
//                 className="h-full w-full object-contain rounded-3xl"
//               />
//             </div>
//           </div>

//           <div className="mt-4 w-full lg:w-1/2 relative z-20 text-center lg:text-left xl:pl-16 2xl:pr-16 ">
//             <div className="flex justify-center lg:block">
//               <h2 className="text-xl sm:pt- md:text-4xl lg:text-[40px] xl:text-[35px] xl:mt-16 2xl:tracking-wider 2xl:text-5xl text-white benz-grotesk mb-4 text-justify w-fit">
//                 <div className="flex justify-between">
//                   <span>GIVING</span>
//                   <span>POWER</span>
//                 </div>
//                 <div>BACK TO PEOPLE</div>
//               </h2>
//             </div>
//             <p className="text-black text-base pb-20 sm:w-full md:text-base xl:text-lg font-poppins xl:mb-9 xl:pr-8 text-justify">
//               The Nige Community provides a platform for traders to sharpen
//               their skills, collaborate, and achieve financial success. Members
//               gain funded trading accounts, eliminating financial barriers and
//               focusing on strategy refinement. The community offers exclusive
//               resources such as market analysis tools, trading signals, and
//               expert webinars. With regular trading challenges and mentorship,
//               it supports a dynamic environment for traders at all levels to
//               thrive.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const GreenComp2 = () => {
  return (
    <section className="bg-green mt-40 lg:my-32 xl:my-48 px-8 md:px-16 xl:px-24 pb-20 lg:py-12 xl:py-20 relative h-full" id="aboutus">
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute left-[-360px] -top-[100px] w-44 h-[1500px] rotate-[-20deg] bg-white opacity-20 transition-all duration-500 animate-moveInfiniteSm md:animate-moveInfiniteMd"></div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex flex-col items-center gap-5 md:gap-10" >
        <div className="aspect-square w-full max-w-32 transform scale-[2] translate-y-[-50%] overflow-hidden rounded-md">
          <img
            src="/Gif.gif"
            alt="People"
            className="h-full w-full object-contain"
          />
        </div>
        <GivingText />
      </div>

      {/* desktop */}
      <div className="hidden lg:grid grid-cols-5 w-full gap-5">
        <div className="col-span-3 grid place-items-center">
          <div>
            <div className="aspect-square w-full max-h-20 transform scale-[6] xl:scale-[7] 2xl:scale-[8.7] rounded-sm overflow-hidden ">
              <img
                src="/Gif.gif"
                alt="People"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <GivingText />
        </div>
      </div>
    </section>
  );
};

const GivingHeading = () => {
  return (
    <h2 className="text-xl md:text-4xl lg:text-[40px] 2xl:text-5xl xl:text-[35px] 2xl:tracking-wider text-white benz-grotesk w-fit">
      <div className="flex justify-between">
        <span>GIVING</span>
        <span>POWER</span>
      </div>
      <div>BACK TO PEOPLE</div>
    </h2>
  );
};

const GivingText = () => {
  return (
    <div className="flex flex-col gap-3 items-center lg:items-start" >
      <GivingHeading />
      <p className="text-justify poppins lg:text-lg 2xl:text-xl tracking-wide">
        The Nige Community provides a platform for traders to sharpen their
        skills, collaborate, and achieve financial success. Members gain funded
        trading accounts, eliminating financial barriers and focusing on
        strategy refinement. The community offers exclusive resources such as
        market analysis tools, trading signals, and expert webinars. With
        regular trading challenges and mentorship, it supports a dynamic
        environment for traders at all levels to thrive.
      </p>
    </div>
  );
};
