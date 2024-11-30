 
import { MakingVision } from "./making-vision";

 

export function AboutSection() {
  
  return (
    <>
<section className="relative" id="aboutus">
  <img
    src="/public/Mask group copy.png"
    className="absolute hidden md:block top-80 h-44 -left-14 md:top-36 transform scale-x-[-1]"
    alt=""
  />
  <div className="bg-blue flex flex-col items-center justify-center pt-10 pb-16 px-4 lg:px-8">
    <h1 className="text-center z-10 benz-grotesk text-white text-base md:text-xl lg:text-2xl xl:text-4xl font-bold">
      Connecting Africans to <br /> Opportunities Worldwide
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
        src="/public/coin.gif"
        alt="Coin"
        className="relative pt-6 pb-6 w-[21rem] md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[35vw] shadow-custom"
      />
    </div>

    <p className="text-white z-10 text-sm md:text-lg max-w-7xl text-start 2xl:text-3xl mx-4 poppins">
      Across Africa, with unemployment rates reaching 30% in some areas,
      job instability affects millions. Nige Coin offers hope through a
      blockchain platform connecting employers with skilled workers. By
      promoting transparent job placements, it aims to reduce unemployment
      and empower individuals with stable jobs, driving economic growth
      and inviting global investment in Africa's vibrant future.
    </p>
  </div>
  <img
    src="/public/Mask group copy.png"
    className="absolute hidden md:block h-72 -right-28 top-12"
  />
</section>


       

      <div className="bg-blue py-10 md:py-40 relative">
        {/* Green Background */}
        <div className="absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-[48%] w-screen h-[48rem] md:h-[60rem] lg:h-[21rem] xl:h-[24rem] 2xl:h-[30rem] bg-green z-0 overflow-hidden">
          <div className="relative h-full w-full">
            <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute left-[-360px] -top-[100px] z-10 w-44 h-[1500px] rotate-[-20deg] bg-white opacity-20 transition-all duration-500 animate-moveInfiniteSm md:animate-moveInfiniteMd"></div>
          </div>
        </div>
        {/* Content Section */}
        <div className="container gap-9  px-4 ">
          <div className="rounded-lg p-8 flex flex-col lg:flex-row lg:items-center">
            {/* Image Container */}
            <div className="relative w-full lg:w-1/2 lg:-ml-8 lg:-mt-8 lg:mb-8">
              <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:max-w-none">
                <img
                  src="/public/Frame.png"
                  alt="People"
                  width={700}
                  height={700}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Text Container */}
            <div className=" mt-4 lg:-mt-8 w-full lg:w-1/2 relative z-20 text-center lg:text-left">
              <h2 className="text-xl md:text-4xl lg:text-[47px]  leading-tight text-white benz-grotesk mb-4">
                GIVING POWER <br /> BACK TO PEOPLE
              </h2>
              <p className="text-black text-base md:text-base xl:text-xl  font-poppins tracking-wide text-justify">
                The Nige Community provides a platform for traders to sharpen
                their skills, collaborate, and achieve financial success.
                Members gain funded trading accounts, eliminating financial
                barriers and focusing on strategy refinement. The community
                offers exclusive resources such as market analysis tools,
                trading signals, and expert webinars. With regular trading
                challenges and mentorship, it supports a dynamic environment for
                traders at all levels to thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MakingVision />
    </>
  );
}
