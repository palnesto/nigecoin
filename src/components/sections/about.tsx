
export function AboutSection() {
  return (
      <section className="relative overflow-hidden md:pt-40 " id="aboutus">
        <img src="/Vector.svg" alt="" className="absolute hidden object-top sm:block -top-96" />
        <img
          src="/Mask group copy.png"
          className="absolute hidden md:block top-80 h-44 -left-14 md:top-72 transform scale-x-[-1]"
          alt=""
        />
        <div className="flex flex-col items-center justify-center px-4 pt-10 pb-16 bg-blue lg:px-8">
          <h1  className="z-10 text-base font-bold tracking-wider text-justify text-white benz-grotesk md:text-xl lg:text-2xl xl:text-4xl ">
            <div className="flex justify-between">
              <span>CONNECTING</span>
              <span>AFRICANS</span>
              <span>TO</span>
            </div> OPPORTUNITIES WORLDWIDE
          </h1>

          <div className="relative flex items-center justify-center">
            <div
              className="absolute lg:w-[600px] md:w-[500px] z-0 xl:w-[900px] xl:h-[300px] 2xl:w-[1100px] 2xl:h-[500px] w-[300px] h-[200px] blur-[100px] rounded-full"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #2D767B 30%, #030E2D 100%)",
              }}
            ></div>

            <img
              src="/coin.gif"
              alt="Coin"
              className="relative pt-6 pb-6 w-[21rem] md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[35vw] shadow-custom"
            />
          </div>

          <p 
          style={{
            textAlignLast: "center",
          }} className="z-10 flex items-center justify-center mx-4 text-justify text-white lg:text-xl 2xl:text-xl lg:tracking-wider max-w-7xl poppins">
            Across Africa, with unemployment rates reaching 30% in some areas,
            job instability affects millions. Nige Coin offers hope through a
            blockchain platform connecting employers with skilled workers. By
            promoting transparent job placements, it aims to reduce unemployment
            and empower individuals with stable jobs, driving economic growth
            and inviting global investment in Africa's vibrant future.
          </p>
        </div>
        <img
          src="/Mask group copy.png"
          className="absolute hidden md:block h-72 -right-28 top-12"
        />
      </section>
  );
}


