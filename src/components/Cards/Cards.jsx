import React from "react";
import "./Cards.scss";
import Tobi from "../../assets/projects/thumbnail-tobi.png";
import Me from "../../assets/img/me.png";
import Climb from "../../assets/img/climb.png";
import Halto from "../../assets/projects/thumbnail-halto.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as Download } from "../../assets/ico/download.svg";

import Drag from "../../assets/img/drag.svg";
import Map from "../Map/Map";

// Import des images
import blender from "../../assets/img/blender.png";
import chatgpt from "../../assets/img/chatgpt.png";
import cursor from "../../assets/img/cursor.png";
import figma from "../../assets/img/figma.png";
import framer from "../../assets/img/framer.png";
import hotjar from "../../assets/img/hotjar.png";
import linear from "../../assets/img/linear.png";
import notion from "../../assets/img/notion.png";
import slack from "../../assets/img/slack.png";
import spline from "../../assets/img/spline.png";
import webflow from "../../assets/img/webflow.png";
import wordpress from "../../assets/img/wordpress.png";

import { ReactComponent as Linkedin } from "../../assets/ico/lk.svg";
import { ReactComponent as Insta } from "../../assets/ico/insta.svg";
import { ReactComponent as Behance } from "../../assets/ico/behance.svg";

const Cards = () => {
  const bounceTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  const tools = [
    { img: figma, name: "Figma" },
    { img: notion, name: "Notion" },
    { img: linear, name: "Linear" },
    { img: cursor, name: "Cursor" },
    { img: framer, name: "Framer" },
    { img: webflow, name: "Webflow" },
    { img: wordpress, name: "WordPress" },
    { img: chatgpt, name: "ChatGPT" },
    { img: hotjar, name: "Hotjar" },
    { img: slack, name: "Slack" },
    { img: spline, name: "Spline" },
    { img: blender, name: "Blender" },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });

  return (
    <div className="wrapper cards">
      <div className="container">
        <h2>About me</h2>
        <img className="drag" src={Drag} alt="" />
        <div className="cards-container">
          <motion.div
            className="card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, x: isMobile ? "0%" : "-50%", opacity: 0, rotate: 0 }}
            animate={{ scale: 1, x: isMobile ? "0%" : "-50%", opacity: 1, rotate: -2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <img src={Me} alt="my face :)" />
            <div className="card-content">
              <div className="text">
                <h3>Léo Frati - 24 yo</h3>
                <div className="social">
                  {" "}
                  <a href="">
                    <Linkedin />
                  </a>
                  <a href="">
                    <Insta />
                  </a>
                  <a href="">
                    <Behance />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, x: isMobile ? "0%" : "-50%", opacity: 0, rotate: 0 }}
            animate={{ scale: 1, x: isMobile ? "0%" : "-50%", opacity: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <img src={Climb} alt="Newgo" />
            <div className="card-content">
              <div className="text">
                <h3>My passion</h3>
                <p>
                  I've been climbing for many years. In bouldering, lead, deep water... It's a
                  driving force and a source of challenge :)
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, x: isMobile ? "0%" : "-50%", opacity: 0, rotate: 0 }}
            animate={{ scale: 1, x: isMobile ? "0%" : "-50%", opacity: 1, rotate: 2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <div className="card-content big">
              <div className="text">
                <h3>My toolbox</h3>
              </div>
              <div className="tools">
                {tools.map((tool, index) => (
                  <div className="tool" key={index}>
                    <img src={tool.img} alt={tool.name} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="card map-card"
            drag={!isMobile}
            dragMomentum={false}
            dragTransition={{ timeConstant: 1000, power: 0.1 }}
            initial={{ scale: 0.8, x: isMobile ? "0%" : "-50%", opacity: 0, rotate: 0 }}
            animate={{ scale: 1, x: isMobile ? "0%" : "-50%", opacity: 1, rotate: 4 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={bounceTransition}
          >
            <div className="card-content big">
              <div className="text">
                <h3>Where can you find me?</h3>
              </div>
              <Map />
            </div>
          </motion.div>
        </div>
        <div className="about-content">
          <p>
            I'm a designer specializing in product design, UX & UI, based in Bordeaux 🇫🇷 🍷. I have
            start-up experience on web/SaaS digital products 🧑‍💻, with a user-centered approach.
          </p>
          <p>
            Because for me ☝️, a good product is a product <span>built with its users.</span>
          </p>
          <p>
            I help companies design and optimize interfaces through user testing, interactive
            prototyping and continuous improvement of the user experience ☀️.
          </p>
          <p>
            Competent in Figma, Framer, Webflow, WordPress and front-end integration (React, HTML,
            CSS) 💻.
          </p>
          <p>I’m also a big mountain lover 🏔️.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
