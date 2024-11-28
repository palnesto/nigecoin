export function HeroSection() {
  return (
    <div className="relative w-full h-screen ">
     
      <img
        src="/public/hero.png"  
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover "
      />
       
      <div className="relative flex flex-col items-start justify-center h-full pl-6 md:pl-16 lg:pl-20 text-white">
       
        <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl custom-lg:text-3xl 4k:text-7xl font-benz-grotesk font-bold mb-9 leading-tight">
          UNLOCKING POSSIBILITIES, <br /> EMPOWERING CONNECTIONS
        </h1>
 
        <button className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 4k:px-16 4k:py-8 bg-green text-lg lg:text-xl xl:text-2xl 4k:text-3xl font-bold rounded-full text-black hover:bg-emerald-700 transition">
          Purchase $NIGE
        </button>
      </div>
    </div>
  );
}
