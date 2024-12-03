import { ChevronsDown } from "lucide-react";

export function HeroSection() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="home">
      <div className="relative w-full aspect-[16/9] bg-hero bg-contain">
        <div className="px-5 sm:px-10 xl:px-20 flex flex-col justify-center h-full w-full" id="home">
          <div className="flex flex-col pb-40 sm:-translate-y-3 xl:-translate-y-5 2xl:-translate-y-10">
          {/* gap-5 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-20 */}
            <h1 className="text-white benz-grotesk text-[3.5vw] xl:text-[56px] leading-[5vw] pb-9 xl:leading-[70px] text-shadow tracking-wider">
              UNLOCKING POSSIBILITIES, <br /> EMPOWERING CONNECTIONS
            </h1>
            <button className="rounded-full text-[3vw] sm:text-lg lg:text-2xl py-2 px-4 md:py-4 md:px-10 lg:px-14 lg:py-6 bg-green text-black inter font-bold hover:bg-green/90 transition-all duration-150 max-w-fit ">
              Purchase $NIGE
            </button>
          </div>
          <ChevronsDown className="text-white w-14 sm:h-12 lg:h-16 xl:h-20 cursor-pointer -mb-80" onClick={scrollToBottom}/>
           
          
        </div>
      </div>
    </section>
  );
}
