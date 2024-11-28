import   { useState, useEffect } from "react";

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

  return (
    <nav className="bg-[#030E2D] text-white p-4 flex justify-between items-center w-full position-fixed z-50 top-0 left-0 md:px-16 md:py-4">
      <div className="flex items-center">
        <span className="w-9 h-9 bg-logo bg-contain bg-no-repeat" aria-label="logo"></span>
        <span className="text-xl font-bold">NigeCoin</span>
      </div>
      <button
        className="block md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
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
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 p-4 md:relative md:flex md:space-x-6 md:p-0 md:bg-transparent md:top-0 md:left-auto md:w-auto`}
      >
        {[
          { name: "Home", href: "#home" },
          { name: "About us", href: "#aboutus" },
          { name: "Tokenomics", href: "#tokenomics" },
          { name: "Roadmap", href: "#roadmap" },
          { name: "Contact us", href: "#contactus" },
          { name: "White paper", href: "#whitepaper" },
        ].map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`block py-2 md:py-0 ${
                activeSection === item.href.replace("#", "")
                  ? "border-b-4 border-[#13BE5A]"
                  : "border-b-4 border-transparent"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <button className="bg-[#13BE5A] px-3 py-2 rounded-3xl font-bold font-2px">
          Join our Pre-sale
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
