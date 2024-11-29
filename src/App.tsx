import "./App.css";
import { MaxWidthContainer } from "./components/max-width-container";
import { Navbar } from "./components/navbar";
import {
  AboutSection,
  FooterSection,
  HeroSection,
  TokenomicsSection,
} from "./components/sections";

function App() {
  return (
    <div className="bg-blue-900 flex items-center flex-col w-full relative bg-blue">
      <Navbar />
      {/* main content */}
      <MaxWidthContainer>
        <div className="mt-20 xl:mt-5">
          <HeroSection />
          <AboutSection />
          <TokenomicsSection />
          <FooterSection />
        </div>
      </MaxWidthContainer>
    </div>
  );
}

export default App;
