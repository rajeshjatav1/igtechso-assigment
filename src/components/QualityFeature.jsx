import React from "react";
import PlayIcon from "./icons/PlayIcon";
import EyeIcon from "./icons/EyeIcon";

const QualityFeature = () => {
  return (
    <section className="ig-feature2-container content-width">
      <div className="ig-feature-txt">Quality features</div>
      <div className="ig-feature-heading">
        <h2>Popular Designing Course</h2>
      </div>
      <div className="ig-courses-list-container">
        <div className="ig-course-container">
          <div className="ig-course-play-icon">
            <PlayIcon fill={"#EF9E48"} />
          </div>
          <div className="ig-course-desc-container">
            <div className="ig-course-review-watch">
              <div className="ig-feature-rating-container">
                <img src="" alt="rating" />
                <span className="ig-review-no-and-rating">
                  {"4"} ({"20"} reviews)
                </span>
              </div>
              <div className="ig-watched-count">
                <EyeIcon />
                <span className="ig-watched-count-text">
                  {"10"} students watched
                </span>
              </div>
            </div>
            <div className="ig-course-heading"></div>
            <div className="ig-course-desc"></div>
          </div>
          <div className="ig-class-no-text"></div>
          <div className="ig-accordian-icon"></div>
        </div>
      </div>
    </section>
  );
};

export default QualityFeature;
