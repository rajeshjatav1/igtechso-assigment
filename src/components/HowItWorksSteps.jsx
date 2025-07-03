import React from "react";

const HowItWorksSteps = ({ step, heading, desc, img, alt, imgClass }) => {
  return (
    <div className="ig-how-it-work-item">
      <h2 className="ig-step">{step}</h2>
      {img && (
          <img className={imgClass} src={img} alt={alt} />
      )}
      <h2 className="ig-heading-txt">{heading}</h2>
      <p className="ig-step-desc">{desc}</p>
    </div>
  );
};

export default HowItWorksSteps;
