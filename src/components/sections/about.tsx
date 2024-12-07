
//TODO: remove all un wanted code

export function AboutSection() {
  return (
      <section className="relative overflow-hidden md:pt-40 " id="aboutus">
        <img src="/Vector.svg" alt="" className="absolute hidden object-top sm:block -top-96" />
        <img
          src="/Mask group copy.png"
          className="absolute hidden md:block top-80 h-44 -left-14 md:top-72 transform scale-x-[-1]"
          alt=""
        />
        <div className="flex flex-col items-center justify-center px-4 pt-10 pb-16 bg-blue lg:px-8">
          <h1  className="z-10 text-base font-bold tracking-wider text-justify text-white benz-grotesk md:text-xl lg:text-2xl xl:text-4xl ">
            <div className="flex justify-between">
              <span>CONNECTING</span>
              <span>AFRICANS</span>
              <span>TO</span>
            </div> OPPORTUNITIES WORLDWIDE
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

          <p 
          style={{
            textAlignLast: "center",
          }} className="z-10 flex items-center justify-center mx-4 text-justify text-white lg:text-xl 2xl:text-xl lg:tracking-wider max-w-7xl poppins">
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
  );
}
//TODO: remove all un wanted code
// const GreenComp = () => {
//   return (
//     <div id="whitepaper" className="relative bg-blue md:mt-60 sm:mt-28">
//       <div className="absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-[48%] w-screen h-[48rem] md:h-[60rem] lg:h-[23rem] xl:h-[27rem] 2xl:h-[30rem] bg-green z-0 overflow-hidden">
//         <div className="relative w-full h-full">
//           <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute left-[-360px] -top-[100px] z-10 w-44 h-[1500px] rotate-[-20deg] bg-white opacity-20 transition-all duration-500 animate-moveInfiniteSm md:animate-moveInfiniteMd"></div>
//         </div>
//       </div>
//       <div className="px-8 md:px-16">
//         <div className="flex flex-col items-center gap-5 rounded-lg lg:flex-row lg:items-center lg:justify-between xl:justify-between">
//           {/* Image Container */}
//           <div className="relative max-w-60 sm:max-w-none sm:w-72 md:w-96 lg:w-96 lg:left-6 lg:-top-2 xl:w-[500px] xl:left-10 2xl:left-10 2xl:w-[600px]">
//             <div className="relative w-full mx-auto aspect-square lg:max-w-none">
//               <img
//                 src="/Gif.gif"
//                 alt="People"
//                 className="object-contain w-full h-full rounded-3xl"
//               />
//             </div>
//           </div>

//           <div className="relative z-20 w-full mt-4 text-center lg:w-1/2 lg:text-left xl:pl-16 2xl:pr-16 ">
//             <div className="flex justify-center lg:block">
//               <h2 className="text-xl sm:pt- md:text-4xl lg:text-[40px] xl:text-[35px] xl:mt-16 2xl:tracking-wider 2xl:text-5xl text-white benz-grotesk mb-4 text-justify w-fit">
//                 <div className="flex justify-between">
//                   <span>GIVING</span>
//                   <span>POWER</span>
//                 </div>
//                 <div>BACK TO PEOPLE</div>
//               </h2>
//             </div>
//             <p className="pb-20 text-base text-justify text-black sm:w-full md:text-base xl:text-lg font-poppins xl:mb-9 xl:pr-8">
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



