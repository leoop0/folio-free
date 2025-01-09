import React from "react";
import "./Cards.scss";
import Tobi from "../../assets/projects/thumbnail-tobi.png";
import Newgo from "../../assets/projects/thumbnail-newgo.png";
import Halto from "../../assets/projects/thumbnail-halto.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Drag from "../../assets/img/drag.svg";

const Cards = () => {
  const bounceTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });

  return (
    <div className="wrapper cards">
      <div className="container">
        <img className="drag" src={Drag} alt="" />
        <div className="cards-container">
          <motion.div
            className="card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: -2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <img src={Tobi} alt="Tobi" />
            <div className="card-content">
              <div className="text">
                <h3>Halto</h3>
                <p>Branding, Web Design</p>
              </div>
              <div className="btn-container">
                <button className="btn-secondary disabled">In progress</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, x: isMobile ? "0%" : "-50%", opacity: 0, rotate: 0 }}
            animate={{ scale: 1, x: isMobile ? "0%" : "-50%", opacity: 1, rotate: 3 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <img src={Newgo} alt="Newgo" />
            <div className="card-content">
              <div className="text">
                <h3>Newgo</h3>
                <p>
                  Newgo is a SaaS platform that simplifies communication and collaboration in the
                  gaming industry.
                </p>
              </div>
              <div className="btn-container">
                <a href="/newgo" className="btn-secondary">
                  Read more
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, x: isMobile ? "0%" : "-50%", opacity: 0, rotate: 0 }}
            animate={{ scale: 1, x: isMobile ? "0%" : "-50%", opacity: 1, rotate: -0.5 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <img src={Halto} alt="Halto" />
            <div className="card-content">
              <div className="text">
                <h3>Halto</h3>
                <p>Branding, Web Design</p>
              </div>
              <div className="btn-container">
                <button className="btn-secondary disabled">In progress</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
