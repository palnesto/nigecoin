import  { memo } from 'react'


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
      <div className="flex flex-col items-center gap-3 lg:items-start" >
        <GivingHeading />
        <p 
          style={{
            textAlignLast: "center",
          }}
          className="text-justify poppins lg:text-lg 2xl:text-xl">
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

const MemoGreenComp2 = () => {
    return (
      <section className="relative h-full px-8 pb-20 mt-40 bg-green lg:my-32 xl:my-48 md:px-16 xl:px-24 lg:py-12 xl:py-20" id="aboutus">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute left-[-360px] -top-[100px] w-44 h-[1500px] rotate-[-20deg] bg-white opacity-20 transition-all duration-500 animate-moveInfiniteSm md:animate-moveInfiniteMd"></div>
          </div>
        </div>
  
        {/* mobile */}
        <div className="flex flex-col items-center gap-5 lg:hidden md:gap-10" >
          <div className="aspect-square w-full max-w-32 transform scale-[2] translate-y-[-50%] overflow-hidden rounded-md">
            <img
              src="/Gif.gif"
              alt="People"
              className="object-contain w-full h-full"
            />
          </div>
          <GivingText />
        </div>
  
        {/* desktop */}
        <div className="hidden w-full grid-cols-5 gap-5 lg:grid">
          <div className="grid col-span-3 place-items-center">
            <div>
              <div className="aspect-square w-full max-h-20 transform scale-[6] xl:scale-[7] 2xl:scale-[8.7] rounded-sm overflow-hidden ">
                <img
                  src="/Gif.gif"
                  alt="People"
                  className="object-contain w-full h-full"
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

  const GreenComp = memo(MemoGreenComp2) 
export default GreenComp