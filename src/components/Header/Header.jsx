import React, { useState } from "react";
import "./Header.scss";
import { ReactComponent as Download } from "../../assets/ico/download.svg";
import About from "../About/About";

import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  return (
    <nav className="wrapper header">
      <div className="container">
        <a href="/" className="logo-container">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="nav-items">
          <ul>
            <li>
              <a href="/">Study Cases</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <div onClick={handleAboutClick}>About</div>
            </li>
            <li className="ico">
              <Download />
              <a href="/">Resume</a>
            </li>
          </ul>
        </div>

        <div className="contact-container">
          <a href="/" className="btn-primary-sm">
            Get in touch
          </a>
        </div>
      </div>
      {showAbout && (
        <>
          <div className="overlay" onClick={handleCloseAbout}></div>
          <About onClose={handleCloseAbout} />
        </>
      )}
    </nav>
  );
};

export default Header;
