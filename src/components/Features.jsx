import React from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <section className="ig-features-section-wrapper content-width">
      <div className="ig-feature-txt">Quality features</div>
      <div className="ig-feature-heading">
        <h2>Tutorials that people love most</h2>
      </div>
      <div className="ig-feature-videos-container">
        <FeatureBox featureImg={"feature1-img.png"} ratingImg={"rating5.png"} rating={"5.0"} reviewCount={392} featureText={"How to work with prototype design with adobe xd featuring tools"} watchCount={2538} />
        <FeatureBox featureImg={"feature2-img.png"} ratingImg={"rating4.png"} rating={"4.5"} reviewCount={542} featureText={"Create multiple artboard by using figma prototyping tools development"} watchCount={3532} />
        <FeatureBox featureImg={"feature3-img.png"} ratingImg={"rating5.png"} rating={"5.0"} reviewCount={392} featureText={"Convert your web layout theming easily with sketch zeplin extension"} watchCount={1037} />
      </div>
    </section>
  );
};

export default Features;
