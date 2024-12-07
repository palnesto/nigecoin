
// export const RewardSection = () => {
//   return (
//     // <section id="reward" className="relative overflow-hidden md:pt-40 lg:pt-32 xl:pt-48 pb-20 px-8 md:px-16 xl:px-24 bg-green">
//     <section id="reward" className="relative bg-[#010425] text-white"> 
//         <img src="/public/telegram.png" className="absolute" alt="" />
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-20 ">
//             <div className="pl-28 md:text-justify">
//                 <h1 className="benz-grotesk flex flex-col font-bold pb-5 gap-2">
//                     <span className="text-[#F7F6E1] text-5xl"> Collect Coins with</span>
//                     <span className="text-green text-6xl">Nigecoin's Mini Game.</span>  
//                 </h1>
//                 <button className="bg-[#36C5FF] text-black h-[78.61px] w-[313px] rounded-full font-extrabold inter text-[25.73px]">Let's Begin</button>
//             </div>
//             <div className="bg-purple-gradient">
//                 <img src="/public/reward.png" alt="" />
//             </div>
//         </div>
//         <img src="/public/Mask group copy.png" className="absolute hidden sm:block object-top -left-10 -bottom-28 z-10 h-60 transform scale-x-[-1]" alt="" />
//     </section>

    
//   )
// }
 
export const RewardSection = () => {
    return (
      <section id="reward" className="relative bg-[#010425] text-white pt-10 sm:pt-16 md:pt-28 lg:pt-20">
        <img 
          src="/public/telegram.png" 
          className="absolute top-0 left-0 xs:w-72 md:w-[65%] lg:w-72 xl:w-96 2xl:w-[450px]" 
          alt="Telegram Icon" 
        />
        <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between items-center ">
        {/* items-center lg:gap-10 sm:pt-96 lg:pt-32  */}
          {/* Left Section */}
            <div className="xs:pt-48 sm:pt-96 lg:pt-28 lg:text-left lg:pl-24 2xl:pt-10">
              <h1 className="benz-grotesk font-bold pb-7 sm:pb-12">
                <span className="block text-[#F7F6E1] text-[6vw] lg:text-[35px] xl:text-[45px] 2xl:text-[50px]">Collect Coins with</span>
                <span className="block text-green text-[7vw] lg:text-[37px] xl:text-[49px] 2xl:text-[60px]">Nigecoin's Mini Game.</span>
              </h1>
              <button className="bg-[#36C5FF] text-black w-36 h-10 sm:h-20 sm:w-[250px] md:w-[313px] rounded-full font-extrabold inter text-sm sm:text-2xl md:text-3xl md:h-24 lg:w-36 lg:text-sm lg:h-12 xl:w-56 xl:h-14 2xl:text-2xl 2xl:w-72 2xl:h-20">
                Let's Begin
              </button>
            </div>
  
          {/* Right Section */}
          <div className="bg-purple-gradient xs:pt-20 sm:w-3/4 md:pt-24  md:w-[80vw] lg:w-[50vw] xl:w-[50vw]">
            <img 
              src="/public/reward.png" 
              className="mx-auto" 
              alt="Reward" 
            />
          </div>
        </div>
  
        {/* Decorative Image */}
        <img 
          src="/public/Mask group copy.png" 
          className="absolute hidden sm:block -left-10 -bottom-28 z-10 h-40 sm:h-52 transform scale-x-[-1]" 
          alt="Decorative" 
        />
      </section>
    );
  };
  