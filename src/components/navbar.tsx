import { useState, useEffect } from "react";

const config = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#aboutus" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Contact us", href: "#contactus" },
  { name: "White paper", href: "#whitepaper" },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);
  return (
    <nav className="z-[999] bg-[#030E2D] text-white px-4 py-6 flex justify-between items-center w-full position-fixed z-50 left-0 xl:px-16 xl:py-7 fixed top-0">
      <div className="flex items-center gap-2">
        <div className="aspect-square h-12 xl:h-[75px]">
          <img
            src="/public/logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-2xl xl:text-4xl font-bold">NigeCoin</span>
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

      <div className="flex gap-4 items-center xl:hidden">
        <button className="bg-green sm:hover:bg-green/90 transition-all duration-150 px-3 py-1 rounded-3xl font-bold inter text-xs  animate-pulse sm:hover:animate-none">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute xl:hidden top-20 left-0 w-full bg-blue p-4 xl:relative  xl:bg-transparent xl:top-0 xl:left-auto xl:w-auto`}
      >
        <ul className="xl:flex xl:space-x-6 xl:p-0">
          {config.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
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
        <button className="bg-green px-8 py-3 rounded-full font-bold inter text-lg hover:bg-green/90 transition-all duration-150">
          Join our Pre-sale
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
