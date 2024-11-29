import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  position: { left: string; bottom: string };
}

export function AboutSection() {
  const [openPhaseId, setOpenPhaseId] = useState<number | null>(null);

  const phases: Phase[] = [
    {
      id: 1,
      title: "Phase - 1",
      subtitle: "Foundation & Launch (Q3 2024)",
      content: `
        - Launch Nige on Solana with a smart contract audit.
        - Start an initial marketing campaign and establish social media presence.
        - Conduct AMAs for community engagement.
        - Execute initial token sale and influencer partnerships.
        - Develop and launch raffle systems.
      `,
      position: { left: "10%", bottom: "25%" },
    },
    {
      id: 2,
      title: "Phase - 2",
      subtitle: "Growth & Expansion (Q4 2024 - Q1 2025)",
      content: `
        - Expand Nige's reach through partnerships with businesses and governments.
        - Scale the platform to handle a growing user base.
        - Launch new features based on user feedback.
      `,
      position: { left: "33%", bottom: "35%" },
    },
    {
      id: 3,
      title: "Phase - 3",
      subtitle: "Platform Launch & Ecosystem Integration (Q2 2025 - Q4 2025)",
      content: `
        - Launch the full ecosystem with integrated tools.
        - Collaborate with global partners for job placements.
        - Foster a thriving blockchain ecosystem with continuous updates.
      `,
      position: { left: "55%", bottom: "45%" },
    },
    {
      id: 4,
      title: "Phase - 4",
      subtitle: "Long-Term Vision & Sustainability (2026 & Beyond)",
      content: `
        - Focus on long-term sustainability and scalability.
        - Expand Nige globally while maintaining its core values.
        - Drive innovation to empower communities worldwide.
      `,
      position: { left: "77%", bottom: "65%" },
    },
  ];

  const togglePhase = (phaseId: number) => {
    setOpenPhaseId(openPhaseId === phaseId ? null : phaseId);
  };

  return (
    <>
      <section className="relative ">
        <img
          src="/public/Mask group copy.png"
          className="absolute hidden md:block top-80 h-44 -left-14 transform scale-x-[-1]"
          alt=""
        />
        <div className="bg-blue  flex flex-col items-center justify-center pt-10 pb-16 px-4 lg:px-8 ">
          <h1 className="text-center z-10 benz-grotesk text-white text-base md:text-xl lg:text-2xl xl:text-4xl font-bold">
            Connecting Africans to <br /> Opportunities Worldwide
          </h1>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute lg:w-[600px] md:w-[500px] z-0 xl:w-[900px] xl:h-[300px] 2xl:w-[1100px] 2xl:h-[500px] w-[300px] h-[200px] blur-[100px] rounded-full"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #29D470 0%, #030E2D 100%)",
              }}
            ></div>

            <img
              src="/public/coin.gif"
              alt="Coin"
              className="relative pt-6 pb-6 w-[21rem]   md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[35vw]"
            />
          </div>

          <p className="text-white z-10 text-sm md:text-lg  max-w-7xl text-start 2xl:text-3xl mx-4 poppins">
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

      {/* <div className="relative bg-blue flex flex-col md:flex-row items-center justify-center py-20 px-4 lg:px-8">
        <div className="bg-green absolute top-29 md:top-39 h-[18rem] w-full md:h-[15rem] lg:h-[20rem] 2xl:h-[40rem]" />
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0  relative">
          <img
            src="/public/Frame.png"
            alt=" People"
            className="w-4/5 lg:w-11/12"
          />
        </div>

        <div className="  md:w-1/2 p-6 text-center md:text-left z-0">
          <h2 className="text-lg md:text-2xl xl:text-4xl 2xl:text-5xl font-bold mb-6 text-white benz-grotesk">
            Giving Power <br /> Back to People
          </h2>
          <p className="text-xs md:text-xs lg:text-base 2xl:text-2xl text-black leading-relaxed poppins">
            The Nige Community provides a platform for traders to sharpen their
            skills, collaborate, and achieve financial success. Members gain
            funded trading accounts, eliminating financial barriers and focusing
            on strategy refinement. The community offers exclusive resources
            such as market analysis tools, trading signals, and expert webinars.
            With regular trading challenges and mentorship, it supports a
            dynamic environment for traders at all levels to thrive.
          </p>
        </div>
      </div> */}
      <div className="bg-blue py-28">
        <div className="relative bg-green grid grid-cols-5 w-full py-14 px-20">
          <div className=" col-span-3 w-full relative">
            <div className="absolute aspect-square h-[50rem] z-50 -top-60 ">
              <img
                src="/public/Frame.png"
                alt=" People"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center col-span-2 w-full">
            <h2 className="text-[47px] leading-none word-spacing pb-3 text-white benz-grotesk">
              GIVING POWER <br /> BACK TO PEOPLE
            </h2>
            <p className="text-black text-[20px] poppins tracking-wide word-spacing text-start">
              The Nige Community provides a platform for traders to sharpen
              their skills, collaborate, and achieve financial success. Members
              gain funded trading accounts, eliminating financial barriers and
              focusing on strategy refinement. The community offers exclusive
              resources such as market analysis tools, trading signals, and
              expert webinars. With regular trading challenges and mentorship,
              it supports a dynamic environment for traders at all levels to
              thrive.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue relative overflow-x-auto scrollbar-x mb-24 pt-20">
        <div className="w-[300vw] sm:w-[200vw] md:w-full">
          <img src="/public/graph.png" alt="" className="w-full" />
        </div>
        <div className="benz-grotesk text-white text-[49px] xs:text-[55px]sm:text-[63.8px] md:text-[4vw] md:top-[4vw] max-container:text-[79.2px] max-container:left-[100px] absolute top-[15vw] sm:top-[10vw] left-[11vw] sm:left-[7vw]">
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
                <div className="absolute w-[80%] bottom-[26vw] sm:bottom-[18vw] ml-[9%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white sm:text-white/70 sm:group-hover:text-white">
                  <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                    Phase - 1 <br /> Foundation & <br /> Launch (Q3 2024)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                {/* eagle image */}
                <div className="w-[40%] absolute bottom-[24vw] sm:bottom-[16vw] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain opa"
                  />
                </div>
              </div>
            </div>
            {/* bar 2 */}
            <div className="absolute bottom-0 ml-[92vw] w-[67vw] h-[100vw] sm:h-[60vw] sm:ml-[61vw] sm:w-[45vw] group">
              <div className="relative h-full w-full sm:group-hover:cursor-pointer">
                <Gradient />
                {/* title + button */}
                <div className="absolute w-[80%] bottom-[45vw] sm:bottom-[29vw] ml-[5%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white sm:text-white/70 sm:group-hover:text-white">
                  <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                    Phase - 2 <br /> Growth & Expansion <br /> (Q4 2024 - Q1
                    2025)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                {/* eagle image */}
                <div className="w-[40%] absolute bottom-[38vw] sm:bottom-[25vw] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* bar 3 */}
            <div className="absolute bottom-0 ml-[163vw] w-[67vw] h-[120vw] sm:h-[80vw] sm:ml-[108vw] sm:w-[45vw] group">
              <div className="relative h-full w-full sm:group-hover:cursor-pointer">
                <Gradient />
                {/* title + button */}
                <div className="absolute w-[80%] bottom-[63vw] sm:bottom-[40vw] ml-[5%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white sm:text-white/70 sm:group-hover:text-white">
                  <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                    Phase - 3 <br /> Platform Launch & <br /> Ecosystem
                    Integration <br /> (Q2 2025 - Q4 2025)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                {/* eagle image */}
                <div className="w-[40%] absolute bottom-[55vw] sm:bottom-[38vw] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* bar 4 */}
            <div className="absolute bottom-0 ml-[231vw] w-[68vw] h-[140vw] sm:h-[100vw] sm:ml-[154vw] sm:w-[46vw] group">
              <div className="relative h-full w-full sm:group-hover:cursor-pointer">
                <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in group-hover:transition-opacity group-hover:duration-300 origin-center radial-gradient-purple aspect-square h-20 rounded-full absolute left-[-10%] top-[-10%]" />
                {/* title + button */}
                <div className="absolute w-[80%] bottom-[93vw] sm:bottom-[62vw] ml-[5%] flex flex-col gap-[2vw] sm:gap-[3vw] text-white sm:text-white/70 sm:group-hover:text-white">
                  <h2 className="font-bold text-[4vw] sm:text-[3vw]">
                    Phase - 4 <br /> Long-Term Vision & <br /> Sustainability{" "}
                    <br /> (2026 & Beyond)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[1.5vw] text-[2.3vw] sm:text-[1.8vw] w-fit px-[2.6vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                {/* eagle image */}
                <div className="w-[40%] absolute bottom-[90vw] sm:bottom-[60vw] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* after md */}
        <div className="hidden absolute inset-0 bg-transparent z-10 md:flex items-end pb-[1.8vw]">
          <div className="relative h-20 w-full">
            {/* bar 1 */}
            <div className="w-[24vw] max-container:w-[475.2px] ml-[5.4vw] max-container:ml-[106.92px] h-[26vw] max-container:h-[514.8px] absolute bottom-0 group">
              <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
                <Gradient />
                <div className="absolute w-[60%] bg-transparent bottom-[35%] ml-[5%] flex flex-col gap-[1vw]  text-white/70 group-hover:text-white">
                  <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                    Phase - 1 <br /> Foundation & <br /> Launch (Q3 2024)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                <div className="w-[40%] absolute bottom-[32%] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* bar 2 */}
            <div className="w-[22vw] max-container:w-[435.6px] ml-[30.5vw] max-container:ml-[603.9px] h-[30vw] max-container:h-[594px] absolute bottom-0 group">
              <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
                <Gradient />
                <div className="absolute w-[60%] bg-transparent bottom-[47%] ml-[5%] flex flex-col gap-[1vw] text-white/70 group-hover:text-white">
                  <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                    Phase - 2 <br /> Growth & Expansion <br /> (Q4 2024 - Q1
                    2025)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                <div className="w-[40%] absolute bottom-[45%] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* bar 3 */}
            <div className="w-[22vw] max-container:w-[435.6px] ml-[54vw] max-container:ml-[1069.2px] h-[35vw] max-container:h-[693px] absolute bottom-0 group">
              <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
                <Gradient />
                <div className="absolute w-[60%] bg-transparent bottom-[58%] ml-[5%] flex flex-col gap-[1vw] text-white/70 group-hover:text-white">
                  <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                    Phase - 3 <br /> Platform Launch <br />& Ecosystem
                    Integration <br /> (Q2 2025 -Q4 2025)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                <div className="w-[40%] absolute bottom-[57%] right-[-5%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* bar 4 */}
            <div className=" w-[23vw] max-container:w-[455.4px] ml-[77vw] max-container:ml-[1524.6px] h-[40vw] max-container:h-[792px] absolute bottom-0 group">
              <div className="h-full w-full bg-transparent relative group-hover:cursor-pointer">
                <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in group-hover:transition-opacity group-hover:duration-300 origin-center radial-gradient-purple aspect-square h-20 rounded-full absolute left-[-10%] top-[-25%]" />
                <div className="absolute w-[60%] bg-transparent bottom-[78%] ml-[5%] flex flex-col gap-[1vw] text-white/70 group-hover:text-white">
                  <h2 className="font-bold text-[1.3vw] max-container:text-[25.74px]">
                    Phase - 4 <br /> Long-Term Vision & <br /> Sustainability{" "}
                    <br />
                    (2026 & Beyond)
                  </h2>
                  <div className="border-white border rounded-full uppercase text-center py-[0.5vw] text-[0.6vw] w-fit px-[1.2vw] flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-white/10 transition-all duration-150">
                    show more
                    <BiChevronDown />
                  </div>
                </div>
                <div className="w-[40%] absolute bottom-[76%] right-[0%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/public/character.png"
                    alt="eagle"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Gradient = () => (
  <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 ease-in group-hover:transition-opacity group-hover:duration-300 origin-center radial-gradient-purple aspect-square h-20 rounded-full absolute left-[-10%]" />
);
