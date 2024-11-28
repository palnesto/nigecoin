import "./App.css";
import { MaxWidthContainer } from "./components/max-width-container";
import { Navbar} from './components/navbar'
import {
  AboutSection,
  FooterSection,
  HeroSection,
  TokenomicsSection,
} from "./components/sections";

function App() {
  return (
    <div className="bg-blue-900 flex items-center flex-col w-full">
      <Navbar />
      {/* main content */}
      <MaxWidthContainer>
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <FooterSection />
      </MaxWidthContainer>
    </div>
  );
}

export default App;
