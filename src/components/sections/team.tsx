import { useState } from 'react'

export const TeamSection = () => {
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
    <>
    <section className="relative py-40 bg-[#030E2D] text-white text-center flex flex-row justify-between overflow-hidden" id="team">
    <img
      src="/Vector.svg"
      alt=""
      className="absolute object-top -top-[350px]"
    />
    <img
      src="/Mask group copy.png"
      className="hidden lg:block md:h-40 lg:h-52 mt-60 -ml-16  transform scale-x-[-1]"
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

  {/* {isModalOpen && (
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
  )} */}
  
  {isModalOpen && (
  <div className="fixed inset-0 top-[4rem] bg-black bg-opacity-90 z-50 overflow-auto">
    <div className="relative w-full h-full bg-[#0E1A3A] text-white rounded-lg shadow-lg overflow-hidden">
      
      {/* Background SVG */}
      <div className="absolute top-0 left-0 right-0 h-[250px] z-0">
        <img
          src="/Vector.svg"
          alt="svg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Ribbon */}
      <img
        src="/Mask group copy.png"
        alt="Left Ribbon"
        className="absolute left-[-60px] top-[70%] transform -translate-y-1/2 hidden md:block w-[150px] z-10"
      />

      {/* Right Ribbon */}
      <img
        src="/Mask group copy.png"
        alt="Right Ribbon"
        className="absolute right-[-60px] top-[30%] transform -translate-y-1/2 hidden md:block w-[250px] z-10"
      />

      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute right-4 text-white hover:text-red-500 text-6xl z-20 top-20"
      >
        &times;
      </button>

      {/* Modal Content */}
      <div className="relative px-6 py-10 z-10">
        <h1 className="text-center text-4xl lg:text-6xl font-bold mb-8 pt-20">Team Onboard</h1>

        {/* Scrollable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-y-scroll max-h-[65vh] pb-24">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 p-4 rounded-lg"
            >
              {/* Profile Image */}
              <div className="w-50 h-50 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name and Role */}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-green-400 text-base text-green">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}







  </>
  )}