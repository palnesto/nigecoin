// export function HeroSection() {
//   return <div>hero</div>;
// }

export function HeroSection() {
  return (
    <section
      id={"home"}
      className="relative h-screen flex items-center bg-hero justify-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Unlocking Possibilities, Empowering Connections
      </h1>

      <button className="bg-green-500 hover:bg-green-600 font-semibold py-3 px-6 rounded-lg mt-4">
        Purchase $NIGE
      </button>
    </section>
  );
}
