import { useState } from "react";
import {
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
export const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Stephanie Mac Avon",
      role: "Chief Executive Officer",
      image: "/public/TeamOne.png",
    },
    {
      name: "Steven Harris",
      role: "Marketing Head",
      image: "/public/TeamTwo.png",
    },
    {
      name: "Astrid Robinson",
      role: "Business Developer",
      image: "/public/TeamThree.png",
    },
    {
      name: "Sergi Giorgios",
      role: "Finance Strategist",
      image: "/public/TeamFour.png",
    },
    {
      name: "John Doe",
      role: "Technology Officer",
      image: "/public/TeamOne.png",
    },
    {
      name: "Jane Smith",
      role: "Operations Lead",
      image: "/public/TeamTwo.png",
    },
    { name: "Richard Roe", role: "HR Manager", image: "/public/TeamThree.png" },
    {
      name: "Emily White",
      role: "Project Manager",
      image: "/public/TeamFour.png",
    },
    {
      name: "Lucas Black",
      role: "Financial Analyst",
      image: "/public/TeamOne.png",
    },
    {
      name: "Michael Brown",
      role: "Marketing Strategist",
      image: "/public/TeamTwo.png",
    },
    {
      name: "Olivia Green",
      role: "Sales Head",
      image: "/public/TeamThree.png",
    },
    {
      name: "Daniel Blue",
      role: "Client Relations",
      image: "/public/TeamFour.png",
    },
  ];

  return (
    <footer id="contactus">
       
      <section className="relative py-40   border bg-[#030E2D] text-white text-center flex flex-row justify-between overflow-hidden">
        <img src="/public/Vector.svg" alt="" className="absolute object-top -top-96" />
        <img
          src="/public/leftimg.png"
          className="hidden md:block max-h-96 pt-[5.5rem]"
          alt="Left"
        />

        <div className="text-center items-center">
          <h2 className="text-4xl lg:text-7xl lg:pb-20 xl:pr-10 font-bold benz-grotesk">
            Team Onboard
          </h2>
          <div className="flex flex-wrap justify-center gap-20 mb-12">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div
                  className="absolute -top-4 -left-6 w-16 h-16 bg-no-repeat bg-center"
                  // className="absolute -top-3 -left-2 w-16 h-9 bg-no-repeat  items-center"
                  style={{
                    backgroundImage: "url('/public/Vector (1).png')",
                  }}
                ></div>
                <div
                  className="absolute -top-3 -right-2 w-16 h-16 bg-no-repeat  items-center"
                  style={{
                    backgroundImage: "url('/public/Vector.png')",
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
            className="bg-[#13BE5A] text-black px-6 py-3 rounded-full font-bold inter lg:w-60 lg:h-16 lg:text-xl lg:mt-10"
          >
            View Team
          </button>
        </div>

        <img
          src="/public/rightimg.png"
          className="hidden md:block max-h-96"
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
        className=" bg-green flex flex-col-reverse gap-4 items-center md:flex-row justify-between px-4 max-h-fit"
      >
        <img
          className="w-full md:w-1/2 -mt-16 xl:-mt-[6rem] 2xl:-mt-[8rem] z-10"
          src="/public/footerImage.png"
          alt=""
        />
        <div className="text-white justify-items-center w-full md:justify-items-end lg:pr-7  md:align-middle  ">
          <h2 className="text-4xl  font-extrabold  mb-1 benz-grotesk md:text-center pt-10 lg:text-6xl">
            CONTACT US
          </h2>
          <p className="inter-s lg:text-3xl">FOR ANY QUERIES, WRITE AN EMAIL TO</p>
          <a
            href="mailto:info@nigecoin.xyz"
            className="text-blue-900 underline text-sm mb-8 inter-s lg:text-xl"
          >
            info@nigecoin.xyz
          </a>
          <section className="pt-5 flex justify-center space-x-6 lg:space-x-12 lg:py-10 ">
            <FaInstagramSquare className="text-3xl lg:text-5xl" />
            <FaTwitter className="text-3xl lg:text-5xl" />
            <FaYoutube className="text-3xl lg:text-5xl" />
            <FaTelegram className="text-3xl lg:text-5xl" />
          </section>
          <section className="pt-6 font-bold">
            <ul className="flex space-x-6 text-sm mb-4 lg:text-2xl lg:pb-4 lg:gap-9">
              <li>
                <a href="#tokenomics" className="hover:text-blue-900 leading-loose">
                  TOKONOMICS
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-blue-900 leading-loose">
                  ROADMAP
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-blue-900">
                  REWARDS
                </a>
              </li>
              <li>
                <a href="#aboutus" className="hover:text-blue-900">
                  ABOUT
                </a>
              </li>
            </ul>
            <p className="text-sm text-right lg:text-2xl">
              &copy; 2024 BY NIGECOIN. All RIGHTS RESERVED!
            </p>
            <p className="text-sm text-right lg:text-2xl">PRIVACY POLICY</p>
          </section>
        </div>
      </section>
    </footer>
  );
};
