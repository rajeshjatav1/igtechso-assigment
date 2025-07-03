import React from "react";
import SearchIcon from "./icons/SearchIcon";
import PlayIcon from "./icons/PlayIcon";

const HeroSection = () => {
  return (
    <section className="ig-hero-section-wrapper content-width">
      <div className="ig-hero-section-headings">
        <div className="ig-rating-section">
          <img src="rating-icon.png" alt="rating-image" />
          <span>Trused by over 4,332 students</span>
        </div>
        <div className="ig-hero-section-heading">
          <h2>Learn Design with Nia Matos</h2>
        </div>
        <div className="ig-hero-section-desc">
          Get your blood tests delivered at let home collect sample from the
          victory of the managments that supplies best design system guidelines
          ever.
        </div>
        <div className="ig-hero-section-search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search course name"
          />
          <SearchIcon />
        </div>
        <div className="ig-hero-section-sponsored-container">
          <span> Sponsored by:</span>
          <img src="paypal.png" alt="paypal-logo" />
          <img src="google.png" alt="google-logo" />
          <img src="dropbox_logo.png" alt="dropbox-logo" />
        </div>
      </div>
      <div className="ig-hero-section-vdo-container">
        <div className="ig-bg-pattern">
          <img src="pattern.png" alt="hero-background-pattern" />
        </div>
        <div className="ig-bg-border"></div>
        <div className="ig-bg-video">
          <img src="shutterstock.png" alt="video-bg" />
          <span className="ig-play-icon">
            <PlayIcon/>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
