import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { MakingVision } from "./making-vision";

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
      <section className="relative" id="aboutus">
        <img
          src="/public/Mask group copy.png"
          className="absolute hidden md:block top-80 h-44 -left-14 md:top-36 transform scale-x-[-1]"
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
                  "radial-gradient(50% 50% at 50% 50%, #2D767B 30%, #030E2D 100%)",
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
      {/* <div className="bg-blue py-40">
        <div className="relative bg-green grid grid-cols-5 w-full py-14 px-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className=" col-span-3 w-full relative">
            <div className="absolute aspect-square h-[30rem] z-50 -top-60 xl:-top-48">
              <img
                src="/public/Frame.png"
                alt=" People"
                className="h-full w-full object-contain md:w-[300px] lg:w-[500px] xl:w-[700px]"
              />
            </div>
          </div>
          <div className=" flex flex-col  justify-center col-span-2 w-full">
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
      </div> */}

      <div className="bg-blue py-10 md:py-40 relative">
        {/* Green Background */}
        <div className="absolute transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-[48%] w-screen h-[48rem] md:h-[60rem] lg:h-[21rem] xl:h-[24rem] 2xl:h-[30rem] bg-green z-0" />

        {/* Content Section */}
        <div className="container mx-auto px-4">
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
              <h2 className="text-3xl md:text-4xl lg:text-[47px]  leading-tight text-white benz-grotesk mb-4">
                GIVING POWER <br /> BACK TO PEOPLE
              </h2>
              <p className="text-black text-base md:text-base xl:text-xl  font-poppins tracking-wide">
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
