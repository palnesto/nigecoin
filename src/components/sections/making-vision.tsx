import { BiChevronDown } from "react-icons/bi";
import { usePopUpStore } from "../../stores";

export const MakingVision = () => {
  const { setId } = usePopUpStore();

  return (
    <section
      id="roadmap"
      className="bg-blue relative overflow-x-auto scrollbar-x mb-24 pt-20 h-full"
    >
      <div className="w-[300vw] sm:w-[200vw] md:w-full pt-10">
        <img src="/graph.png" alt="" className="w-full" />
      </div>
      <div className="benz-grotesk text-white text-[49px] xs:text-[40px] sm:text-[63.8px] md:text-[4vw] md:top-[9vw] max-container:text-[79.2px] max-container:left-[100px] absolute top-[24vw] sm:top-[10vw] left-[11vw] sm:left-[7vw] ">
        Making a <br /> Vision Reality
      </div>
      {/* till start of md only */}
      <div className="absolute bottom-7 w-full h-10 md:hidden">
        <div className="h-full w-full relative bg-blue-500">
          {/* bar 1 */}
          <div className="absolute bottom-0 ml-[16vw] w-[72vw] h-[80vw] sm:h-[50vw] sm:ml-[11vw] sm:w-[48vw] group">
            <div className="relative h-full w-full sm:group-hover:cursor-pointer">
              <Gradient />
              {/* title + button */}
              <div className="absolute w-[80%] bottom-[26vw] sm:bottom-[18vw] ml-[9%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white">
                <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                  Phase - 1 <br /> Foundation & <br /> Launch (Q3 2024)
                </h2>
                <div
                  onClick={() => {
                    console.log("happened");
                    setId(1);
                  }}
                  className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              {/* eagle image */}
              <div className="w-[40%] absolute bottom-[24vw] sm:bottom-[16vw] right-[-5%] opacity-100 transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain opa"
                />
              </div>
            </div>
          </div>
          {/* bar 2 */}
          <div className="absolute bottom-0 ml-[92vw] w-[67vw] h-[100vw] sm:h-[60vw] sm:ml-[61vw] sm:w-[45vw] group">
            <div className="relative h-full w-full sm:group-hover:cursor-pointer">
              {/* <Gradient /> */}
              {/* title + button */}
              <div className="absolute w-[80%] bottom-[45vw] sm:bottom-[29vw] ml-[5%] flex flex-col gap-[2vw] sm:gap-[3vw]  text-white/70 ">
                <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                  Phase - 2 <br /> Growth & Expansion <br /> (Q4 2024 - Q1 2025)
                </h2>
                <div
                  onClick={() => setId(2)}
                  className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              {/* eagle image */}
              <div className="w-[40%] absolute bottom-[38vw] sm:bottom-[25vw] right-[-5%] opacity-0 transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* bar 3 */}
          <div className="absolute bottom-0 ml-[163vw] w-[67vw] h-[120vw] sm:h-[80vw] sm:ml-[108vw] sm:w-[45vw] group">
            <div className="relative h-full w-full sm:group-hover:cursor-pointer">
              {/* <Gradient /> */}
              {/* title + button */}
              <div className="absolute w-[80%] bottom-[63vw] sm:bottom-[40vw] ml-[5%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white/70">
                <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                  Phase - 3 <br /> Platform Launch & <br /> Ecosystem
                  Integration <br /> (Q2 2025 - Q4 2025)
                </h2>
                <div
                  onClick={() => setId(3)}
                  className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              {/* eagle image */}
              <div className="w-[40%] absolute bottom-[55vw] sm:bottom-[38vw] right-[-5%] opacity-0  transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* bar 4 */}
          <div className="absolute bottom-0 ml-[231vw] w-[68vw] h-[140vw] sm:h-[100vw] sm:ml-[154vw] sm:w-[46vw] group">
            <div className="relative h-full w-full sm:group-hover:cursor-pointer">
              {/* <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in group-hover:transition-opacity group-hover:duration-300 origin-center radial-gradient-purple aspect-square h-20 rounded-full absolute left-[-10%] top-[-10%]" /> */}
              {/* title + button */}
              <div className="absolute w-[80%] bottom-[93vw] sm:bottom-[62vw] ml-[5%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white/70 ">
                <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                  Phase - 4 <br /> Long-Term Vision & <br /> Sustainability{" "}
                  <br /> (2026 & Beyond)
                </h2>
                <div
                  onClick={() => setId(4)}
                  className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              {/* eagle image */}
              <div className="w-[40%] absolute bottom-[90vw] sm:bottom-[60vw] right-[-5%] opacity-0   transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* after md */}
      <div className="hidden absolute inset-0 bg-transparent z-10 md:flex items-end pb-[1.8vw] ">
        <div className="relative h-20 w-full">
          {/* bar 1 */}
          <div className="w-[24vw] max-container:w-[475.2px] ml-[5.4vw] max-container:ml-[106.92px] h-[26vw] max-container:h-[514.8px] absolute bottom-0 group">
            <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
              <Gradient />
              {/* title + button on hover */}
              {/* <div className="absolute w-[60%] bg-transparent bottom-[35%] ml-[5%] flex flex-col gap-[1vw]  text-white/70 group-hover:text-white"> */}
              <div className="absolute w-[60%] bg-transparent bottom-[35%] ml-[5%] flex flex-col gap-[1vw] text-white">
                <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                  Phase - 1 <br /> Foundation & <br /> Launch (Q3 2024)
                </h2>
                <div
                  onClick={() => setId(1)}
                  className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              {/* eagle image on hover */} 
              {/* <div className="w-[40%] absolute bottom-[32%] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"> */}
              <div className="w-[40%] absolute bottom-[32%] right-[-5%] ">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* bar 2 */}
          <div className="w-[22vw] max-container:w-[435.6px] ml-[30.5vw] max-container:ml-[603.9px] h-[30vw] max-container:h-[594px] absolute bottom-0 group">
            <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
              {/* <Gradient /> */}
              <div className="absolute w-[60%] bg-transparent bottom-[47%] ml-[5%] flex flex-col gap-[1vw] text-white/70 ">
                <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                  Phase - 2 <br /> Growth & Expansion <br /> (Q4 2024 - Q1 2025)
                </h2>
                <div
                  onClick={() => setId(2)}
                  className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              <div className="w-[40%] absolute bottom-[45%] right-[-5%] opacity-0 transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* bar 3 */}
          <div className="w-[22vw] max-container:w-[435.6px] ml-[54vw] max-container:ml-[1069.2px] h-[35vw] max-container:h-[693px] absolute bottom-0 group">
            <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
              {/* <Gradient /> */}
              <div className="absolute w-[60%] bg-transparent bottom-[58%] ml-[5%] flex flex-col gap-[1vw] text-white/70">
                <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                  Phase - 3 <br /> Platform Launch <br />& Ecosystem Integration{" "}
                  <br /> (Q2 2025 -Q4 2025)
                </h2>
                <div
                  onClick={() => setId(3)}
                  className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              <div className="w-[40%] absolute bottom-[57%] right-[-5%] opacity-0 transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* bar 4 */}
          <div className=" w-[23vw] max-container:w-[455.4px] ml-[77vw] max-container:ml-[1524.6px] h-[40vw] max-container:h-[792px] absolute bottom-0 group">
            <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
              {/* <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in group-hover:transition-opacity group-hover:duration-300 origin-center radial-gradient-purple aspect-square h-20 rounded-full absolute left-[-10%] top-[-25%]" /> */}
              <div className="absolute w-[60%] bg-transparent bottom-[78%] ml-[5%] flex flex-col gap-[1vw] text-white/70">
                <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                  Phase - 4 <br /> Long-Term Vision & <br /> Sustainability{" "}
                  <br />
                  (2026 & Beyond)
                </h2>
                <div
                  onClick={() => setId(4)}
                  className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150"
                >
                  show more
                  <BiChevronDown />
                </div>
              </div>
              <div className="w-[40%] absolute bottom-[76%] right-[0%] opacity-0 transition-opacity duration-300">
                <img
                  src="/character.png"
                  alt="eagle"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gradient = () => (
  <div className=" ease-in group-hover:transition-opacity group-hover:duration-300 origin-center radial-gradient-purple aspect-square h-20 rounded-full absolute left-[-10%]" />
);
