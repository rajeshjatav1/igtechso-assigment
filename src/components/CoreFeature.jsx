import React from "react";
import FeatureTile from "./FeatureTile";

const CoreFeature = () => {
  return (
    <section className="ig-core-features-section-wrapper">
      <div className="ig-core-features-section content-width">
        <div className="ig-core-feature-tiles">
          <div className="ig-tile-one-container">
            <FeatureTile
              featureDesc={"Description of feature one."}
              headingColor={"#EF9E48"}
              headingText={"18K+"}
            />
            <FeatureTile
              featureDesc={"Description of feature one."}
              headingColor={"#FA578E"}
              headingText={"90+"}
            />
          </div>
          <div className="ig-tile-two-container">
            <FeatureTile
              featureDesc={"Description of feature one."}
              headingColor={"#FF753A"}
              headingText={"150+"}
            />
            <FeatureTile
              featureDesc={"Description of feature one."}
              headingColor={"#E682FF"}
              headingText={"& 3M"}
            />
          </div>
        </div>
        <div className="ig-core-feature-desc-container">
          <div className="ig-feature-txt">Core features</div>
          <div className="ig-feature-heading">
            <h2 style={{ fontSize: "var(--font48)" }}>
              Smart Jackpots that you may love this anytime & anywhere
            </h2>
          </div>
          <div
            style={{ fontSize: "var(--font18)", marginTop:"40px" }}
            className="ig-feature-desc"
          >
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </div>
          <div className="ig-header-free-txt">Explore details</div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeature;
