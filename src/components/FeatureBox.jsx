import React from "react";
import EyeIcon from "./icons/EyeIcon";

const FeatureBox = ({featureImg, ratingImg, rating, reviewCount, featureText, watchCount}) => {
  return (
    <div className="ig-feature-box">
      <div className="ig-feature-image">
        <img src={featureImg} alt="feature-image" />
      </div>
      <div className="ig-feature-description">
        <div className="ig-feature-rating-container">
          <img src={ratingImg} alt="rating" />
          <span className="ig-review-no-and-rating">{rating} ({reviewCount} reviews)</span>
        </div>
        <div className="ig-feature-item-heading">
            <h2>{featureText}</h2>
        </div>
        <div className="ig-watched-count">
            <EyeIcon    />
            <span className="ig-watched-count-text">{watchCount} students watched</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
