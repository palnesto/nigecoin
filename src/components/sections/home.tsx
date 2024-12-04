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
      <div className="relative aspect-[16/9] bg-hero bg-contain">
      <ChevronsDown className="text-white w-10 sm:h-10 lg:h-16 xl:h-20 cursor-pointer absolute sm:bottom-1  xs:bottom-1 md:bottom-7 md:left-5 lg:bottom-20 lg:left-25 xl:left-20" onClick={scrollToBottom}/>
        <div className="px-5 sm:px-10 xl:px-20 flex flex-col justify-center h-full w-full" id="home">
          <div className="flex flex-col gap-y-3 lg:gap-y-9 sm:-translate-y-3 xl:-translate-y-5 2xl:-translate-y-10">
          {/* gap-5 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-20 */}
            <h1 className="text-white benz-grotesk text-[3.5vw] xl:text-[56px] leading-[5vw] xl:leading-[70px] text-shadow tracking-wider">
              UNLOCKING POSSIBILITIES, <br /> EMPOWERING CONNECTIONS
            </h1>
            <button className="rounded-full text-[3vw] sm:text-lg lg:text-2xl py-2 px-4 md:py-4 md:px-10 lg:px-14 lg:py-6 bg-green text-black inter font-bold hover:bg-green/90 transition-all duration-150 max-w-fit ">
              Purchase $NIGE
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
