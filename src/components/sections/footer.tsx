
import {
  // FaInstagramSquare,
  FaTwitter,
  // FaYoutube,
  FaTelegram,
} from "react-icons/fa";

export const FooterSection = () => {

  return (

      <section
        id="contactus"
        className="flex flex-col-reverse items-center justify-between bg-green md:flex-row md:pr-7 gap-14"
      >
        <img
          className="w-full md:w-1/2 -mt-16 xl:-mt-[6rem] 2xl:-mt-[8rem] z-10"
          src="/footerImage.png"
          alt=""
        />
        <div className="w-full text-white justify-items-center md:justify-items-end lg:pr-2 md:align-middle xl:pr-16 lg:py-10 xl:py-16">
           <h2 className="pt-10 mb-1 text-4xl font-extrabold benz-grotesk md:text-center lg:text-4xl xl:text-6xl 2x:text-10xl">
            CONTACT US
          </h2>
          <p className="inter-s md:text-sm lg:text-lg xl:text-2xl">
            FOR ANY QUERIES, WRITE AN EMAIL TO
          </p>
          <a
            href="mailto:info@nigecoin.xyz"
            className="mb-8 text-sm text-blue-900 underline inter-s lg:text-md xl:text-lg"
          >
            info@nigecoin.xyz
          </a>
          <section className="flex justify-center pt-5 space-x-4 sm:space-x-4 lg:space-x-7 lg:py-8 xl:py-5">
            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <FaInstagramSquare className="text-3xl cursor-pointer lg:text-3xl xl:text-5xl" />
            </a> */}
            <a href="https://x.com/Nigecoin" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl cursor-pointer lg:text-3xl xl:text-5xl" />
            </a>
            {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-3xl cursor-pointer lg:text-3xl xl:text-5xl" />
            </a> */}
            <a href="https://t.me/Nigecoin" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-3xl cursor-pointer lg:text-3xl xl:text-5xl" />
            </a>
          </section>
          <article className="pt-6 font-bold">
            <ul className="flex mb-4 text-xs tracking-widest gap-x-4 lg:gap-x-6 xl:gap-x-10 lg:text-base xl:text-xl lg:pb-3">
              <li>
                <a href="#tokenomics" className="hover:text-blue-900 ">
                  TOKONOMICS
                </a>
              </li>
              <li>
                <a  href="#roadmap" className="hover:text-blue-900 ">
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
            <p className="text-xs tracking-widest text-right lg:text-base xl:text-xl">
              &copy; 2024 BY NIGECOIN. All RIGHTS RESERVED!
            </p>
            <p className="text-xs tracking-widest text-right lg:text-base xl:text-xl">
              PRIVACY POLICY
            </p>
          </article> 
        </div>
      </section>
    
  );
};
