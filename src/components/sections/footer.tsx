import { useState } from "react";
import { FaInstagramSquare, FaTwitter, FaYoutube, FaTelegram} from "react-icons/fa";
export const FooterSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    { name: "Stephanie Mac Avon", role: "Chief Executive Officer", image: "/public/TeamOne.png" },
    { name: "Steven Harris", role: "Marketing Head", image: "/public/TeamTwo.png" },
    { name: "Astrid Robinson", role: "Business Developer", image: "/public/TeamThree.png" },
    { name: "Sergi Giorgios", role: "Finance Strategist", image: "/public/TeamFour.png" },
    { name: "John Doe", role: "Technology Officer", image: "/public/TeamOne.png" },
    { name: "Jane Smith", role: "Operations Lead", image: "/public/TeamTwo.png" },
    { name: "Richard Roe", role: "HR Manager", image: "/public/TeamThree.png" },
    { name: "Emily White", role: "Project Manager", image: "/public/TeamFour.png" },
    { name: "Lucas Black", role: "Financial Analyst", image: "/public/TeamOne.png" },
    { name: "Michael Brown", role: "Marketing Strategist", image: "/public/TeamTwo.png" },
    { name: "Olivia Green", role: "Sales Head", image: "/public/TeamThree.png" },
    { name: "Daniel Blue", role: "Client Relations", image: "/public/TeamFour.png" },
  ];

  return (
    <footer> 
      <section className="pt-16 pb-12 bg-[#030E2D] text-white text-center flex flex-row justify-between">
       
  <img 
    src="/public/leftimg.png" 
    className="hidden md:block max-h-96 pt-[10.5rem]" 
    alt="Left" 
  />

  <div className="text-center   items-center">
    <h2 className="text-4xl font-bold pb-14">Team Onboard</h2>
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      {teamMembers.slice(0, 4).map((member, index) => (
        <div key={index} className="relative flex flex-col items-center"> 
          <div
            className="absolute -top-7 left-0 w-16 h-16 bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/public/Vector (1).png')",
            }}
          ></div>
 
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full z-10 relative"
          /> 
          <div
            className="absolute -top-7 right-0 w-16 h-16 bg-no-repeat bg-center"
            style={{
              backgroundImage: "url('/public/Vector.png')",
            }}
          ></div>

          <h3 className="text-lg font-bold mt-4">{member.name}</h3>
          <p className="text-sm text-green-500">{member.role}</p>
        </div>
      ))}
    </div>

    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-[#13BE5A] text-black px-6 py-3 rounded-full font-bold"
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
        <div className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50">
          <div className="bg-[#030E2D] text-white rounded-lg relative overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-red-500"
            >
              &times;
            </button>
            <h1 className="text-4xl font-bold mb-8 text-center">Team Onboard</h1>                                                                                                                     
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-h-[80vh] overflow-y-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-green">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
 
      <section id="contactus" className=" bg-green flex flex-row justify-between ">
        <img className="w-1/2 " src="/public/footerImage.png" alt="" />
        <div className="text-white justify-items-end align-middle">
          <h2 className="text-3xl font-extrabold  mb-1 font-heading-font">CONTACT US</h2>
          <p className="text-xl font-inter">FOR ANY QUERIES, WRITE AN EMAIL TO</p>
          <a
            href="mailto:info@nigecoin.xyz"
            className="text-blue-900 underline text-sm mb-8"
          >
            info@nigecoin.xyz
          </a>
          <section className="pt-5 flex justify-center space-x-6">
            <FaInstagramSquare className="text-3xl" />
            <FaTwitter className="text-3xl" />
            <FaYoutube className="text-3xl" />
            <FaTelegram className="text-3xl" />
          </section>
          <section className="pt-6 font-bold">
            <ul className="flex space-x-6 text-sm mb-4">
              <li>
                <a href="#tokenomics" className="hover:text-blue-900">
                  TOKONOMICS
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-blue-900">
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
                  ABOUT NIGE COIN
                </a>
              </li>
            </ul>
            <p className="text-sm text-right">&copy; 2024 BY NIGECOIN. All RIGHTS RESERVED!</p>
            <p className="text-sm text-right">PRIVACY POLICY</p>
          </section>
        </div>
      </section>
    </footer>
  );
};
