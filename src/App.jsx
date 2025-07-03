import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./styles/header.css";
import "./styles/heroSection.css";
import "./styles/features.css";
import Features from "./components/Features";
import CoreFeature from "./components/CoreFeature";
import QualityFeature from "./components/QualityFeature";

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
    </>
  );
}

export default App;
