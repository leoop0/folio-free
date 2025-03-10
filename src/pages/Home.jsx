import React, { useState } from "react";
// import About from "../components/About/About";
import { Helmet } from "react-helmet-async";

import { motion } from "framer-motion";

import Bento from "../components/Bento/Bento";
import Cards from "../components/Cards/Cards";

import Projects from "../components/Projects/Projects";

import { ReactComponent as Arrow } from "../assets/ico/arrow.svg";
import { ReactComponent as NewgoLogo } from "../assets/img/newgo-logo.svg";
import { ReactComponent as HaltoLogo } from "../assets/img/halto-logo.svg";

import MetaImg from "../assets/img/img.png";

import Newgo1 from "../assets/projects/newgo-1.png";
import Newgo2 from "../assets/projects/newgo-2.png";
import Halto1 from "../assets/projects/halto-1.png";
import Halto2 from "../assets/projects/halto-2.png";

const Home = () => {
  return (
    <div className="Home">
      <Helmet>
        <title>Léo Frati - Product Designer & Web Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Léo Frati, a passionate Product Designer and Web Developer based in Bordeaux. Explore my projects, from UI design to web development with React and Webflow."
        />
        <meta
          name="keywords"
          content="Léo Frati, Product Designer, Web Developer, Bordeaux, React, Webflow, Portfolio, Design Systems, UI/UX Design"
        />
        <meta property="og:title" content="Léo Frati - Product Designer & Web Developer" />
        <meta
          property="og:description"
          content="Discover the portfolio of Léo Frati, showcasing projects in product design and web development. Let's create user-centered, impactful digital experiences."
        />
        <meta property="og:image" content={MetaImg} />
        <meta property="og:url" content="https://leofrati.fr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Léo Frati - Product Designer & Web Developer" />
        <meta
          name="twitter:description"
          content="Explore my portfolio featuring UI/UX design, web development with React, and scalable design systems."
        />
        <meta name="twitter:image" content={MetaImg} />
      </Helmet>
      <div className="wrapper hero">
        <div className="container">
          <h1>
            Hi, I'm Leo 👋 <br />
            Designer in Bordeaux creating unique, seamless & intuitive experiences, always
            <span>
              designed with and for users.
              <Arrow className="arrow" />
            </span>
          </h1>

          <div className="btn-container">
            <a href="mailto:fratileo@gmail.com" className="btn-primary">
              Work with me
            </a>
            <a href="#about">
              {" "}
              <button className="btn-secondary">About</button>
            </a>
          </div>
        </div>
      </div>

      <div id="cases-study" className="wrapper cs">
        <div className="container">
          <motion.a
            href="/newgo"
            id="Newgo"
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <div className="title">
                <NewgoLogo />
                <h2>Newgo</h2>
              </div>
              <p>SaaS BtoB in the Gaming & Esport Ecosystem</p>
            </div>
            <div className="img newgo">
              <img src={Newgo2} alt="Newgo" />
              <img src={Newgo1} alt="Newgo" />
            </div>
          </motion.a>
          <motion.a
            href="/halto"
            id="Halto"
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <div className="title">
                <HaltoLogo />
                <h2>Halto</h2>
              </div>
              <p>Hackathon : 1v1 in-browser space-shooter</p>
            </div>
            <div className="img halto">
              <img src={Halto2} alt="Halto" />
              <img src={Halto1} alt="Halto" />
            </div>
          </motion.a>
        </div>
      </div>

      <div id="about">
        <Cards />
      </div>

      <div id="works">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
