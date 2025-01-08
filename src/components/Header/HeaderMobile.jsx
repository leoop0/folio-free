import React, { useState, useEffect } from "react";
import "./HeaderMobile.scss";
import { ReactComponent as Download } from "../../assets/ico/download.svg";
import { ReactComponent as BurgerMenu } from "../../assets/ico/burger-menu.svg";

import Logo from "../../assets/img/logo.png";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="wrapper header">
      <div className="container">
        <a href="/" className="logo-container">
          <img src={Logo} alt="Logo" />
        </a>

        <div className="nav-items">
          <BurgerMenu className="burger-menu" onClick={handleMenuClick} />
          {menuOpen && (
            <ul>
              <li>
                <a href="#study-cases">Study Cases</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Works</a>
              </li>

              <li className="ico">
                <Download />
                <a href="/">Resume</a>
              </li>
            </ul>
          )}
        </div>

        <div className="contact-container">
          <a href="/" className="btn-primary-sm">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderMobile;
