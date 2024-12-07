import { lazy, Suspense, useEffect, useRef } from "react";
import "./App.css";
import { MaxWidthContainer } from "./components/max-width-container";
import { Navbar } from "./components/navbar";
import {
  AboutSection,
  FooterSection,
  HeroSection,
  TokenomicsSection,
} from "./components/sections";
import { StoreData, usePopUpStore } from "./stores";
import { FaXmark } from "react-icons/fa6";
import { TeamSection } from "./components/sections/team";
import { RewardSection } from "./components/sections/reward";
const GreenComp = lazy(() => import("./components/sections/green"));
import { MakingVision } from "./components/sections/making-vision";
import { useNavStore } from "./stores/useNavStore";

export const storeData: StoreData[] = [
  {
    id: 1,
    title: "Phase 1: Foundation and Launch (Q3 2024)",
    listItem: [
      "Launch Nige on Solana with a smart contract audit.",
      "Start an initial marketing campaign and establish social media presence.",
      "Conduct AMAs for community engagement.",
      "Execute initial token sale and influencer partnerships.",
      "Develop and launch raffle systems.",
    ],
  },
  {
    id: 2,
    title: "Phase 2: Growth and Expansion (Q4 2024 - Q1 2025)",
    listItem: [
      "Enhance marketing efforts and community events",
      "Continue community AMAs and educational webinars",
      "Launch Nige Trading Community with resources and funded accounts",
      "Form strategic partnerships and start NigeLink platform development",
      "Expand raffles and introduce special event prizes.",
    ],
  },
  {
    id: 3,
    title:
      "Phase 3: Platform Launch and Ecosystem Integration (Q2 2025 - Q4 2025)",
    listItem: [
      "Publicly launch NigeLink for global job connections.",
      "Develop Nige Academy in the metaverse with web3 and blockchain courses.",
      "Add staking and yield farming to the ecosystem.",
      "Extend outreach globally and participate in international conferences.",
    ],
  },
  {
    id: 4,
    title: "Phase 4: Long-Term Vision and Sustainability (2026 and Beyond)",
    listItem: [
      "Continually update NigeLink based on user input and market trends.",
      "Introduce community governance for decision-making.",
      "Implement sustainability and philanthropic initiatives.",
      "Establish Nige as a global leader in web3 for empowering African talent.",
    ],
  },
];
function App() {
  const { value } = usePopUpStore();
  const { activeSection, setActiveSection } = useNavStore();

  // Refs to sections
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const rewardRef = useRef<HTMLElement>(null);
  const tokenomicsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);

  const sections = [
    { ref: heroRef, id: "home" },
    { ref: aboutRef, id: "aboutus" },
    { ref: roadmapRef, id: "roadmap" },
    { ref: rewardRef, id: "reward" },
    { ref: tokenomicsRef, id: "tokenomics" },
    { ref: teamRef, id: "team" },
    { ref: contactRef, id: "contactus" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2 + window.scrollY;

      let closestSection = "";
      let closestDistance = Infinity;

      for (const section of sections) {
        const el = section.ref.current;
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + window.scrollY + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      }

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, activeSection, setActiveSection]);

  return (
    <div className="relative flex flex-col items-center w-full bg-blue-900 bg-blue">
      {value && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[996] backdrop-blur-md bg-black">
          <div className="relative w-full h-full">
            <Popup />
          </div>
        </div>
      )}
      <Navbar />

      <MaxWidthContainer>
        <div className="mt-20 xl:mt-5">
          <section ref={heroRef} id="home">
            <HeroSection />
          </section>

          <section ref={aboutRef} id="aboutus">
            <AboutSection />
          </section>

          <section ref={roadmapRef} id="roadmap">
            <MakingVision />
          </section>

          <section>
            <Suspense fallback={<div>Loading...</div>}>
              <GreenComp />
            </Suspense>
          </section>

          <section ref={rewardRef} id="reward">
            <RewardSection />
          </section>

          <section ref={tokenomicsRef} id="tokenomics">
            <TokenomicsSection />
          </section>

          <section ref={teamRef} id="team">
            <TeamSection />
          </section>

          <section ref={contactRef} id="contactus">
            <FooterSection />
          </section>
        </div>
      </MaxWidthContainer>
    </div>
  );
}

export default App;


const Popup = () => {
  const { value, setId } = usePopUpStore();
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      event.stopPropagation();
      setId(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!value) return null;
  return (
    <div
      ref={popupRef}
      id="popup"
      className="bg-black text-white text-lg w-[90vw] z-[998] fixed top-32 xl:top-40 bottom-24 xl:bottom-8 left-[50%] translate-x-[-50%]"
    >
      <div className="relative w-full h-full">
        <div
          className="absolute right-0 top-0 hover:cursor-pointer z-[999]"
          onClick={() => setId(-1)}
        >
          <FaXmark size={30} className="w-[20px] sm:w-[30px]" />
        </div>
        <div className="w-[35%] md:w-[25%] lg:w-[15%] absolute -bottom-24 -lg:bottom-8 xl:bottom-0 -right-10 md:translate-y-0">
          <img
            src="/character.png"
            alt="eagle"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="h-full w-full relative rounded-3xl py-10 px-10 sm:py-14 sm:px-14 md:py-16 md:px-28 max-w-[1980px] overflow-hidden">
          <div className="-z-10 origin-center radial-gradient-purple2 h-[1000px] aspect-square rounded-full absolute left-10 translate-x-[-50%] bottom-0 translate-y-[50%]" />

          <div className="w-full sm:text-2xl lg:text-3xl max-w-[90%] max-h-full overflow-y-auto flex flex-col gap-8 scrollbar-x">
            <h2 className="font-bold">{value?.title}</h2>
            <ul className="flex flex-col gap-2">
              {value.listItem.map((item) => {
                return (
                  <li className="ml-5 tracking-wide list-disc md:ml-7 lg:ml-10 font-extralight">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
