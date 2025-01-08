import React from "react";
import "./Bento.scss";
// import TestimonialsSimple from "../Testimonials/TestimonialsSimple";
import Tools from "../../assets/img/tools.svg";
import Code from "../../assets/img/code.png";
import Map from "../Map/Map";
import Leo from "../../assets/img/leo.jpg";
import Shape from "../../assets/img/green-shape.svg";

import Linkedin from "../../assets/ico/lk.svg";
import Insta from "../../assets/ico/insta.svg";
import Behance from "../../assets/ico/behance.svg";

const Bento = () => {
  return (
    <div className="wrapper bento">
      <div className="container">
        <div className="item-bento div1">
          <div className="img-container">
            <img src={Leo} alt="Leo" />
            <div className="socials">
              <a href="https://www.linkedin.com/in/leo-frati/" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="https://www.instagram.com/leofrati/" target="_blank" rel="noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
              <a href="https://www.behance.net/leofrati" target="_blank" rel="noreferrer">
                <img src={Behance} alt="Behance" />
              </a>
            </div>
          </div>
          <div className="text">
            <h3>More about me</h3>
            <p>
              Hi, I’m Léo, a product designer and web developer based in Bordeaux, France. With 4+
              years of freelance experience, I specialize in crafting intuitive and visually
              engaging digital products. My expertise lies in UI design and building scalable design
              systems, primarily using Figma. I also develop responsive websites using React and
              Webflow.
              <br />
              <br />
              Beyond work, I’m passionate about outdoor adventures, including climbing,
              mountaineering & alpinism, and I bring the same determination and focus to my projects
              as I do to reaching new summits. Let’s collaborate to create impactful and
              user-centered digital experiences.
            </p>
          </div>
        </div>
        <div className="item-bento div2">
          <div className="shape">
            <img src={Shape} alt="Decorative shape" />
          </div>
          <div className="text">
            <h3>
              Your new design is{" "}
              <span>
                <div className="dot"></div>Ready to dev
              </span>
            </h3>
            <p>
              With years of experience in web design, I live and breathe good design and value the
              details that matter. Say goodbye to the stressful back and forth with developers who
              don’t have an eye for design and rely on someone who has the skills, experience, and
              enthusiasm to bring your visions to life the way they were intended.
            </p>
          </div>
          <div className="img-container">
            <img src={Code} alt="Code illustration" />
          </div>
        </div>
        <div className="item-bento div3">
          <img src={Tools} alt="Tools illustration" />
          <div className="text">
            <h3>My toolbox</h3>
            <p>
              To create and iterate as efficiently as possible, while working together on your
              project.
            </p>
          </div>
        </div>
        <div className="item-bento div4">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Bento;