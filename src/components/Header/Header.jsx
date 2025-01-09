import React, { useState, useEffect } from "react";
import "./Header.scss";
import { ReactComponent as Download } from "../../assets/ico/download.svg";
import About from "../About/About";

import Resume from "../../assets/Resume.pdf";

import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  useEffect(() => {
    if (showAbout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showAbout]);

  return (
    <div className="global">
      <nav className="wrapper header">
        <div className="container">
          <a href="/" className="logo-container">
            <img src={Logo} alt="Logo" />
          </a>

          <div className="nav-items">
            <ul>
              <li>
                <a href="/#study-cases">Study Cases</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#projects">Works</a>
              </li>

              <li className="ico">
                <Download />
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-container">
            <a href="mailto:fratileo@gmail.com" className="btn-primary-sm">
              Get in touch
            </a>
          </div>
        </div>
      </nav>
      {showAbout && (
        <>
          <div className="overlay" onClick={handleCloseAbout}></div>
          <About onClose={handleCloseAbout} />
        </>
      )}
    </div>
  );
};

export default Header;
