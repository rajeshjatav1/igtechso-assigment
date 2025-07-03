import React from "react";

const FeatureTile = ({ headingColor, headingText, featureDesc }) => {
  return (
    <div className="ig-tile">
      <h3
        style={{
          color: headingColor,
        }}
      >
        {headingText}
      </h3>
      <div className="ig-tile-desc">{featureDesc}</div>
    </div>
  );
};

export default FeatureTile;
