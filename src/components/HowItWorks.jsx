import React from "react";
import HowItWorksSteps from "./HowItWorksSteps";

const HowItWorks = () => {
  return (
    <section className="ig-how-it-works-wrapper">
      <div className="ig-how-it-works-container content-width">
        <div className="ig-feature-txt">Whats the function</div>
        <div className="ig-feature-heading">
          <h2>Let’s see how it works</h2>
        </div>
        <div className="ig-how-it-works-items">
          <HowItWorksSteps
          step={"1"}
            alt={"up-arrow"}
            desc={
              "Get your blood tests delivered athome collect a sample from theyour blood tests"
            }
            heading={"Set disbursement Instructions"}
            img={"arrow-down.png"}
            imgClass={"down-arrow"}
          />
          <HowItWorksSteps
            alt={"up-arrow"}
            step={"2"}
            desc={
              "Get your blood tests delivered athome collect a sample from theyour blood tests"
            }
            heading={"Set disbursement Instructions"}
            img={"arrow-up.png"}
            imgClass={"up-arrow"}
          />
          <HowItWorksSteps
            step={"3"}
            alt={"up-arrow"}
            desc={
              "Get your blood tests delivered athome collect a sample from theyour blood tests"
            }
            heading={"Set disbursement Instructions"}
            img={"arrow-down.png"}
            imgClass={"down-arrow"}
          />
          <HowItWorksSteps
            step={"4"}
            desc={
              "Get your blood tests delivered athome collect a sample from theyour blood tests"
            }
            heading={"Set disbursement Instructions"}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
