import React from "react";

const Header = () => {
  return (
    <header className="ig-header-wrapper content-width">
      <div className="ig-header-logo">
        <img src="logo.png" alt="header-log" />
      </div>
      <div className="ig-header-menu-container">
        <ul className="ig-header-menu">
          <li className="ig-header-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="ig-header-menu-item">
            <a href="#">Advertise</a>
          </li>
          <li className="ig-header-menu-item">
            <a href="#">Supports</a>
          </li>
          <li className="ig-header-menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="ig-header-free-txt">Try For Free</div>
    </header>
  );
};

export default Header;
