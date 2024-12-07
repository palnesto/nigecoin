import { useState } from "react";
import { useNavStore } from "../stores/useNavStore";

const config = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#aboutus" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Reward", href: "#reward" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Team", href: "#team" },
  { name: "Contact us", href: "#contactus" },
  {
    name: "White paper",
    href: "https://docs.google.com/document/d/1q5qq5AQ9jAxNX8VMg6mcxZd4TfG0QpUM_aVxv4Fh1EQ/edit?tab=t.0#heading=h.o7c9p5dsb2az",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useNavStore((state) => state.activeSection);

  return (
    <nav className="z-[999] bg-[#030E2D] text-white px-4 py-6 flex justify-between items-center w-full fixed top-0 left-0 xl:px-16 xl:py-7">
      <div className="flex items-center gap-2">
        <div className="aspect-square h-12 xl:h-[75px]">
          <img src="/logo.png" alt="logo" className="object-contain w-full h-full" />
        </div>
        <span className="text-2xl font-bold xl:text-4xl">NigeCoin</span>
      </div>
      <ul className="hidden xl:flex xl:space-x-6 xl:p-0 poppins">
        {config.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`block py-3 xl:py-0 xl:tracking-wider xl:text-md 2xl:text-lg ${
                activeSection === item.href.replace("#", "")
                  ? "border-b-2 xl:border-b-4 border-[#13BE5A] font-bold text-white"
                  : "border-b-2 border-transparent font-extralight text-white/80"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 xl:hidden">
        <button className="px-3 py-1 text-xs font-bold transition-all duration-150 bg-green sm:hover:bg-green/90 rounded-3xl inter animate-pulse sm:hover:animate-none">
          Join Pre-Sale
        </button>
        <button
          className="block focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute xl:hidden top-20 left-0 w-full bg-blue p-4 xl:relative  xl:bg-transparent xl:top-0 xl:left-auto xl:w-auto`}
      >
        <ul className="flex flex-col gap-1 xl:flex-row xl:space-x-6 xl:p-0">
          {config.map((item) => (
            <li key={item.name} className="px-2 rounded-lg sm:hover:bg-white/20">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 xl:py-0 xl:tracking-wider ${
                  activeSection === item.href.replace("#", "")
                    ? "border-b-2 xl:border-b-4 border-green font-bold text-white"
                    : "border-b-2 border-transparent font-extralight text-white/80"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden xl:block">
        <button className="px-8 py-3 text-lg font-bold transition-all duration-150 rounded-full bg-green inter hover:bg-green/90">
          Join our Pre-sale
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
