import { useEffect, useRef } from "react";
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

export const storeData: StoreData[] = [
  {
    id: 1,
    title: "Phase - 1 Foundation & launch (Q3 2024)",
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
    title: "Tokenomics",
    listItem: ["Tokenomics", "Roadmap", "Whitepaper", "About", "Contact Us"],
  },
  {
    id: 3,
    title: "Roadmap",
    listItem: ["Tokenomics", "Roadmap", "Whitepaper", "About", "Contact Us"],
  },
  {
    id: 4,
    title: "Whitepaper",
    listItem: ["Tokenomics", "Roadmap", "Whitepaper", "About", "Contact Us"],
  },
];
function App() {
  const { value } = usePopUpStore();
  return (
    <div className="bg-blue-900 flex items-center flex-col w-full relative bg-blue">
      {value && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[996] backdrop-blur-md bg-black">
          <div className="relative w-full h-full">
            <Popup />
          </div>
        </div>
      )}
      <Navbar />
      {/* Main content */}
      <MaxWidthContainer>
        <div className="mt-20 xl:mt-5">
          <HeroSection />
          <AboutSection />
          <TokenomicsSection />
          <FooterSection />
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
      console.log("Clicked outside the popup!");
      setId(-1); // Update your store when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!value) return null; // Return null if value is null
  return (
    <div
      ref={popupRef} // Assign the ref here
      id="popup"
      className="bg-black text-white text-lg w-[90vw] z-[998] fixed top-32 xl:top-40 bottom-24 xl:bottom-8 left-[50%] translate-x-[-50%]"
    >
      <div className="h-full w-full relative">
        <div
          className="absolute right-0 top-0 hover:cursor-pointer z-[999]"
          onClick={() => setId(-1)}
        >
          <FaXmark size={30} className="w-[20px] sm:w-[30px]" />
        </div>
        <div className="w-[35%] md:w-[25%] lg:w-[15%] absolute -bottom-24 -lg:bottom-8 xl:bottom-0 -right-10 md:translate-y-0">
          <img
            src="/public/character.png"
            alt="eagle"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="h-full w-full relative rounded-3xl py-10 px-10 sm:py-14 sm:px-14 md:py-16 md:px-28 max-w-[1980px] overflow-hidden">
          <div className="-z-10 origin-center radial-gradient-purple2 h-[1000px] aspect-square rounded-full absolute left-10 translate-x-[-50%] bottom-0 translate-y-[50%]" />

          <div className="w-full sm:text-2xl lg:text-3xl max-w-[90%] max-h-full overflow-y-auto flex flex-col gap-8 scrollbar-x">
            <h2 className="font-bold">{value?.title}</h2>
            <ul className="flex flex-col gap-2">
              {value.listItem.map((item) => {
                return (
                  <li className="list-disc ml-5 md:ml-7 lg:ml-10 font-extralight tracking-wide">
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
