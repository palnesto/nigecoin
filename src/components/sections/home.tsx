export function HeroSection() {
  return (
    <>
      <div className="relative w-full aspect-[16/9] bg-hero bg-contain" id="home">
        <div className="px-5 sm:px-10 xl:px-20 flex flex-col justify-center h-full w-full">
          {/* heading */}
          <div className="flex flex-col gap-5 sm:gap-14 md:gap-20 lg:gap-28 xl:gap-36 sm:-translate-y-3 xl:-translate-y-5 2xl:-translate-y-10">
            <h1 className="text-white benz-grotesk text-[3.5vw] xl:text-[56px] leading-[5vw] xl:leading-[70px]  text-shadow">
              UNLOCKING POSSIBILITIES, <br /> EMPOWERING CONNECTIONS
            </h1>
            <button className="rounded-full text-[3vw] sm:text-lg lg:text-2xl py-2 px-4 md:py-4 md:px-10 lg:px-12 lg:py-6 bg-green text-black inter font-bold hover:bg-green/90 transition-all duration-150 max-w-fit">
              Purchase $NIGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
