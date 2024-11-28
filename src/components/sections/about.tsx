// import { useState } from "react";

// interface Phase {
//   id: number;
//   title: string;
//   subtitle: string;
//   content: string;
//   position: { left: string; bottom: string };
// }

// export function AboutSection() {
//   const [openPhaseId, setOpenPhaseId] = useState<number | null>();

//   const phases: Phase[] = [
//     {
//       id: 1,
//       title: "Phase - 1",
//       subtitle: "Foundation & Launch (Q3 2024)",
//       content: `
//         - Launch Nige on Solana with a smart contract audit.
//         - Start an initial marketing campaign and establish social media presence.
//         - Conduct AMAs for community engagement.
//         - Execute initial token sale and influencer partnerships.
//         - Develop and launch raffle systems.
//       `,
//       position: { left: "7%", bottom: "23%" },
//     },
//     {
//       id: 2,
//       title: "Phase - 2",
//       subtitle: "Growth & Expansion (Q4 2024 - Q1 2025)",
//       content: `
//         - Expand Nige's reach through partnerships with businesses and governments.
//         - Scale the platform to handle a growing user base.
//         - Launch new features based on user feedback.
//       `,
//       position: { left: "33%", bottom: "33%" },
//     },
//     {
//       id: 3,
//       title: "Phase - 3",
//       subtitle: "Platform Launch & Ecosystem Integration (Q2 2025 - Q4 2025)",
//       content: `
//         - Launch the full ecosystem with integrated tools.
//         - Collaborate with global partners for job placements.
//         - Foster a thriving blockchain ecosystem with continuous updates.
//       `,
//       position: { left: "55%", bottom: "43%" },
//     },
//     {
//       id: 4,
//       title: "Phase - 4",
//       subtitle: "Long-Term Vision & Sustainability (2026 & Beyond)",
//       content: `
//         - Focus on long-term sustainability and scalability.
//         - Expand Nige globally while maintaining its core values.
//         - Drive innovation to empower communities worldwide.
//       `,
//       position: { left: "77%", bottom: "65%" },
//     },
//   ];

//   const togglePhase = (phaseId: number) => {
//     setOpenPhaseId(openPhaseId === phaseId ? null : phaseId);
//   };

//   return (
//     <>
//       <div className="bg-blue max-w-screen-3xl flex flex-col items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-heading-font mb-8">
//           Connecting Africans to <br /> Opportunities Worldwide
//         </h1>

//         <div className="relative flex items-center justify-center mb-8">
//           <div
//             style={{
//               position: "absolute",
//               width: "850px",
//               height: "300px",
//               // background:
//                 // "radial-gradient(50% 50% at 50% 50%, #29D470 0%, #030E2D 100%)",
//               zIndex: 0,
//               filter: "blur(100px)",
//             }}
//             className="lg:w-[400px] md:w-[900px] sm:w-[100px] w-[300px]"
//           ></div>

//           <img
//             src="/public/coin.gif"
//             alt="Coin"
//             className="relative w-28 sm:w-32 md:w-48 lg:w-1/2"
//           />
//         </div>

//         <p className="text-white text-base sm:text-lg md:text-xl text-wrap max-w-5xl text-center mx-4 sm:mx-6 lg:mx-8">
//           Across Africa, with unemployment rates reaching 30% in some areas, job
//           instability affects millions. Nige Coin offers hope through a
//           blockchain platform connecting employers with skilled workers. By
//           promoting transparent job placements, it aims to reduce unemployment
//           and empower individuals with stable jobs, driving economic growth and
//           inviting global investment in Africa's vibrant future.
//         </p>
//       </div>
//       <div className="relative bg-blue flex flex-col md:flex-row items-center justify-center py-20 px-4 lg:px-8">
//         <div className="bg-green absolute top-29 h-[22rem] w-full " />
//         <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0  relative">
//           <img
//             src="/public/Frame.png"
//             alt="Grid of People"
//             className="rounded-lg w-4/5 md:w-4/5 lg:w-3/4"
//           />
//         </div>

//         <div className="  md:w-1/2  p-6 rounded-lg text-center md:text-left z-0">
//           <h2 className="text-3xl   md:text-5xl font-bold mb-6 text-white font-heading-font">
//             Giving Power <br /> Back to People
//           </h2>
//           <p className="text-base md:text-xl text-black leading-relaxed">
//             The Nige Community provides a platform for traders to sharpen their
//             skills, collaborate, and achieve financial success. Members gain
//             funded trading accounts, eliminating financial barriers and focusing
//             on strategy refinement. The community offers exclusive resources
//             such as market analysis tools, trading signals, and expert webinars.
//             With regular trading challenges and mentorship, it supports a
//             dynamic environment for traders at all levels to thrive.
//           </p>
//         </div>
//       </div>
//       <div className="relative bg-blue   text-lg font-semibold">
//         <h2 className="text-white text-5xl font-extrabold max-w-[300px] font-heading-font text-left mb-6">
//           Making a Vision Reality
//         </h2>

//         <img src="/public/graph.png" alt="Bar Graph" className="w-full" />

//         {phases.map((phase) => (
//           <div
//             key={phase.id}
//             className="absolute w-36"
//             style={{ left: phase.position.left, bottom: phase.position.bottom }}
//           >
//             <p className="text-white font-bold text-">{phase.title}</p>
//             <p className="text-white text-bold">{phase.subtitle}</p>
//             <button
//               onClick={() => togglePhase(phase.id)}
//               className="flex items-center justify-center text-sm py-2 px-3 rounded-full border-2 border-white text-white
//                 bg-blue-100 hover:bg-blue-200 text-blue-500 font-semibold transition duration-300"
//             >
//               <span className="text-xs">SHOW MORE</span>
//               <svg
//                 className={`w-4 h-4 ml-2 transition-transform duration-300 ${
//                   openPhaseId === phase.id ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 15l7-7 7 7"
//                 />
//               </svg>
//             </button>

//             {openPhaseId === phase.id && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//                 <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg p-6 text-white relative w-11/12 max-w-lg">
//                   <button
//                     onClick={() => togglePhase(phase.id)}
//                     className="absolute top-4 right-4 bg-blue text-white hover:text-red-500"
//                   >
//                     Close
//                   </button>
//                   <h3 className="text-lg font-bold">{phase.title}{phase.subtitle}</h3>
//                   <p className="text-white mb-6 text-lg whitespace-pre-line">{phase.content}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

import { useState } from "react";

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
      {/* Hero Section */}
      <div className="bg-blue flex flex-col items-center justify-center pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-benz-grotesk text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Connecting Africans to <br /> Opportunities Worldwide
        </h1>

        <div className="relative flex items-center justify-center mb-8">
          <div
            className="absolute lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] h-[300px] blur-[100px] rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #29D470 0%, #030E2D 100%)",
            }}
          ></div>

          <img
            src="/public/coin.gif"
            alt="Coin"
            className="relative w-28 sm:w-32 md:w-48 lg:w-1/2"
          />
        </div>

        <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl text-center mx-4">
          Across Africa, with unemployment rates reaching 30% in some areas, job
          instability affects millions. Nige Coin offers hope through a
          blockchain platform connecting employers with skilled workers. By
          promoting transparent job placements, it aims to reduce unemployment
          and empower individuals with stable jobs, driving economic growth and
          inviting global investment in Africa's vibrant future.
        </p>
      </div>

      <div className="relative bg-blue flex flex-col md:flex-row items-center justify-center py-20 px-4 lg:px-8">
        <div className="bg-green absolute top-29 h-[22rem] w-full " />
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0  relative">
          <img
            src="/public/Frame.png"
            alt="Grid of People"
            className="rounded-lg w-4/5 md:w-4/5 lg:w-3/4"
          />
        </div>

        <div className="  md:w-1/2  p-6 rounded-lg text-center md:text-left z-0">
          <h2 className="text-3xl   md:text-5xl font-bold mb-6 text-white font-benz-grotesk">
            Giving Power <br /> Back to People
          </h2>
          <p className="text-base md:text-xl text-black leading-relaxed">
            The Nige Community provides a platform for traders to sharpen their
            skills, collaborate, and achieve financial success. Members gain
            funded trading accounts, eliminating financial barriers and focusing
            on strategy refinement. The community offers exclusive resources
            such as market analysis tools, trading signals, and expert webinars.
            With regular trading challenges and mentorship, it supports a
            dynamic environment for traders at all levels to thrive.
          </p>
        </div>
      </div>

      <div className="relative bg-blue">
        <h2 className="text-white text-7xl  font-extrabold  max-w-[500px]  font-benz-grotesk text-left relative left-32 top-60">
          Making a Vision Reality
        </h2>

        <img src="/public/graph.png" alt="Bar Graph" className="w-full" />

        {phases.map((phase) => (
          <div
            key={phase.id}
            className="absolute w-40"
            style={{
              left: phase.position.left,
              bottom: phase.position.bottom,
            }}
          >
            <section>
              <p className="text-white font-bold">{phase.title}</p>
              <p className="text-white font-bold">{phase.subtitle}</p>
              <button
                onClick={() => togglePhase(phase.id)}
                className="flex items-center justify-center sm:text-sm py-1.5 px-2 rounded-full border-2 border-white
                    text-white font-semibold transition duration-300"
              >
                <span>SHOW MORE</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    openPhaseId === phase.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </section>
            {openPhaseId === phase.id && (
              <div className="fixed inset-0  bg-opacity-100 flex justify-center items-center z-50">
                <div className="bg-gray  rounded-lg p-6 text-white relative w-11/12 max-w-lg">
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="absolute top-4 right-4 text-white hover:text-red-500"
                  >
                    Close
                  </button>
                  <h3 className="text-lg font-bold">{phase.title}</h3>
                  <p className="text-white mt-4 whitespace-pre-line">
                    {phase.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
