import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./styles/header.css";
import "./styles/heroSection.css";
import "./styles/features.css";
import "./styles/howItWorks.css";
import Features from "./components/Features";
import CoreFeature from "./components/CoreFeature";
import QualityFeature from "./components/QualityFeature";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <>
      <div className="ig-hero-section-background-wrapper">
      </div>
        <Header />
        <HeroSection />
        <Features />
        <CoreFeature />
        <QualityFeature/>
        <HowItWorks/>
    </>
  );
}

export default App;
