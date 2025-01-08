import React from "react";
import "./About.scss";

// Import des images
import adobe from "../../assets/img/adobe.png";
import chatgpt from "../../assets/img/chatgpt.png";
import cursor from "../../assets/img/cursor.png";
import figma from "../../assets/img/figma.png";
import framer from "../../assets/img/framer.png";
import notion from "../../assets/img/notion.png";
import spline from "../../assets/img/spline.png";
import webflow from "../../assets/img/webflow.png";

import { ReactComponent as Close } from "../../assets/ico/x.svg";
import { ReactComponent as Linkedin } from "../../assets/ico/lk.svg";
import { ReactComponent as Insta } from "../../assets/ico/insta.svg";
import { ReactComponent as Behance } from "../../assets/ico/behance.svg";

const About = ({ onClose }) => {
  const tools = [
    { img: figma, name: "Figma", description: "UI/UX Design" },
    { img: webflow, name: "Webflow", description: "Web Development" },
    { img: framer, name: "Framer", description: "Web Development" },
    { img: cursor, name: "Cursor", description: "Code Editor" },
    { img: adobe, name: "Adobe", description: "Creative Suite" },
    { img: notion, name: "Notion", description: "Project Management" },
    { img: chatgpt, name: "ChatGPT", description: "Ideation" },
    { img: spline, name: "Spline", description: "3D Design" },
  ];

  return (
    <div className="about-modal">
      <Close className="close-btn" onClick={onClose} />
      <div className="grid-2">
        <div className="toolbox">
          <h3>My toolbox</h3>
          <div className="tools">
            {tools.map((tool, index) => (
              <div className="tool" key={index}>
                <img src={tool.img} alt={tool.name} />
                <p>{tool.name}</p>
                <span>{tool.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-me">
          <h3>About me</h3>
          <p>
            Hi, I’m Léo, a product designer and web developer based in Bordeaux, France. With 4+
            years of freelance experience, I specialize in crafting intuitive and visually engaging
            digital products. My expertise lies in UI design and building scalable design systems,
            primarily using Figma. I also develop responsive websites using React and Webflow.
            <br />
            <br />
            Beyond work, I’m passionate about outdoor adventures, including climbing, mountaineering
            & alpinism, and I bring the same determination and focus to my projects as I do to
            reaching new summits. Let’s collaborate to create impactful and user-centered digital
            experiences.
            <div className="media">
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
