import "./App.css";
import { MaxWidthContainer } from "./components/max-width-container";
import { Navbar } from "./components/navbar";
import {
  AboutSection,
  FooterSection,
  HeroSection,
  TokonomicsSection,
} from "./components/sections";

function App() {
  return (
    <div className="bg-blue-800 flex items-center flex-col">
      <Navbar />
      {/* main content */}
      <MaxWidthContainer>
        <HeroSection />
        <AboutSection />
        <TokonomicsSection />
        <FooterSection />
      </MaxWidthContainer>
    </div>
  );
}

export default App;
