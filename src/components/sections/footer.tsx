import { useState } from "react";
import {
  // FaInstagramSquare,
  FaTwitter,
  // FaYoutube,
  FaTelegram,
} from "react-icons/fa";
export const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Stephanie Mac Avon",
      role: "Chief Executive Officer",
      image: "/TeamOne.png",
    },
    {
      name: "Steven Harris",
      role: "Marketing Head",
      image: "/TeamTwo.png",
    },
    {
      name: "Astrid Robinson",
      role: "Business Developer",
      image: "/TeamThree.png",
    },
    {
      name: "Sergi Giorgios",
      role: "Finance Strategist",
      image: "/TeamFour.png",
    },
    {
      name: "John Doe",
      role: "Technology Officer",
      image: "/TeamOne.png",
    },
    {
      name: "Jane Smith",
      role: "Operations Lead",
      image: "/TeamTwo.png",
    },
    { name: "Richard Roe", role: "HR Manager", image: "/TeamThree.png" },
    {
      name: "Emily White",
      role: "Project Manager",
      image: "/TeamFour.png",
    },
    {
      name: "Lucas Black",
      role: "Financial Analyst",
      image: "/TeamOne.png",
    },
    {
      name: "Michael Brown",
      role: "Marketing Strategist",
      image: "/TeamTwo.png",
    },
    {
      name: "Olivia Green",
      role: "Sales Head",
      image: "/TeamThree.png",
    },
    {
      name: "Daniel Blue",
      role: "Client Relations",
      image: "/TeamFour.png",
    },
  ];

  return (
    <footer>
      <section className="relative py-40 bg-[#030E2D] text-white text-center flex flex-row justify-between overflow-hidden" id="team">
        <img
          src="/Vector.svg"
          alt=""
          className="absolute object-top -top-[350px]"
        />
        <img
          src="/Mask group copy.png"
          className="hidden lg:block md:h-40 lg:h-56 mt-60 -ml-16  transform scale-x-[-1]"
          alt="Left"
        />

        <div className="text-center items-center">
          <h2 className="relative md:mt-10 pb-16 md:mb-11 text-4xl md:text-5xl lg:text-6xl xl:text-6xl lg:pb-20 xl:pr-10 font-bold benz-grotesk">
            Team Onboard
          </h2>
          <div className="flex flex-wrap justify-center gap-20 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div
                  className="absolute -top-4 -left-6 w-16 h-16 bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('/Vector (1).png')",
                  }}
                ></div>
                <div
                  className="absolute -top-3 -right-2 w-16 h-16 bg-no-repeat  items-center"
                  style={{
                    backgroundImage: "url('/Vector.png')",
                  }}
                ></div>

                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-52 h-52 rounded-full z-10"
                  />
                </div>

                <h3 className="text-lg font-bold mt-4">{member.name}</h3>
                <p className="text-sm text-green">{member.role}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#13BE5A] text-black px-14 py-5 rounded-full font-bold inter sm:text-2xl md:text-2xl md:w-64 md:h-20 lg:w-72 lg:h-20 lg:text-3xl lg:mt-10"
          >
            View Team
          </button>
        </div>

        <img
          src="/Mask group copy.png"
          className="relative hidden lg:block md:h-60 lg:h-72 -mr-28"
          alt="Right"
        />
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50 px-5 sm:px-10">
          <div className="bg-blue text-white rounded-lg relative overflow-hidden mt-24 pb-10 px-4 xl:mt-10 h-full max-h-[60vh] w-full min-w-[300px] max-w-[1000px] flex flex-col gap-0">
            <div className="flex flex-col">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-9 right-4 text-white hover:text-red-500"
              >
                X
              </button>
              <h1 className="lg:text-4xl font-bold mb-6 text-center text-2xl pt-14">
                Team Onboard
              </h1>
            </div>
            <div className="py-5 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 h-full overflow-y-auto scrollbar-x">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-center text-sm sm:text-base flex flex-col gap-2"
                >
                  <div className="text-center aspect-square h-24 sm:h-36 mx-auto rounded-full overflow-hidden shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="text-green">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <section
        id="contactus"
        className=" bg-green flex flex-col-reverse   items-center md:flex-row justify-between px-7 gap-14 h-full"
      >
        <img
          className="w-full md:w-1/2 -mt-16 xl:-mt-[6rem] 2xl:-mt-[8rem] z-10"
          src="/footerImage.png"
          alt=""
        />
        <div className="text-white justify-items-center w-full md:justify-items-end lg:pr-2 md:align-middle xl:pr-16 lg:py-10 xl:py-16">
           <h2 className="text-4xl  font-extrabold  mb-1 benz-grotesk md:text-center pt-10 lg:text-4xl xl:text-6xl">
            CONTACT US
          </h2>
          <p className="inter-s lg:text-xl xl:text-2xl">
            FOR ANY QUERIES, WRITE AN EMAIL TO
          </p>
          <a
            href="mailto:info@nigecoin.xyz"
            className="text-blue-900 underline text-sm mb-8 inter-s lg:text-md xl:text-lg"
          >
            info@nigecoin.xyz
          </a>
          <section className="pt-5 flex justify-center space-x-4 sm:space-x-4 lg:space-x-7 lg:py-8 xl:py-5">
            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <FaInstagramSquare className="text-3xl lg:text-3xl xl:text-5xl cursor-pointer" />
            </a> */}
            <a href="https://x.com/Nigecoin" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl lg:text-3xl xl:text-5xl cursor-pointer" />
            </a>
            {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-3xl lg:text-3xl xl:text-5xl cursor-pointer" />
            </a> */}
            <a href="https://t.me/Nigecoin" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-3xl lg:text-3xl xl:text-5xl cursor-pointer" />
            </a>
          </section>
          <article className="pt-6 font-bold">
            <ul className="flex space-x-3 text-xs mb-4 lg:text-lg xl:text-xl lg:pb-3 tracking-widest">
              <li>
                <a href="#tokenomics" className="hover:text-blue-900  ">
                  TOKONOMICS
                </a>
              </li>
              <li>
                <a  href="#roadmap" className="hover:text-blue-900  ">
                  ROADMAP
                </a>
              </li>
              <li>
                <a  href="#whitepaper" className="hover:text-blue-900">
                  REWARDS
                </a>
              </li>
              <li>
                <a  href="#aboutus" className="hover:text-blue-900">
                  ABOUT
                </a>
              </li>
            </ul>
            <p className="text-xs text-right lg:text-lg xl:text-xl tracking-widest">
              &copy; 2024 BY NIGECOIN. All RIGHTS RESERVED!
            </p>
            <p className="text-xs text-right lg:text-lg xl:text-xl tracking-widest">
              PRIVACY POLICY
            </p>
          </article> 
        </div>
      </section>
    </footer>
  );
};
