import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Testimonials.scss";

import newgoAvatar from "../../assets/img/newgo-logo.svg";
import bimoboxAvatar from "../../assets/img/bimobox-logo.svg";
import ariaAvatar from "../../assets/img/aria-logo.svg";

const testimonials = [
  {
    name: "Mehdi H.",
    title: "CEO Newgo",
    text: "His work greatly improved our platform by simplifying user flows and making the experience clearer. Through user research and collaboration, he addressed key challenges and helped increase retention. A solid contributor who understands both user needs and product development constraints.",
    avatar: newgoAvatar,
  },
  {
    name: "Florent D.",
    title: "CEO Bimobox",
    text: "His work greatly improved our platform by simplifying user flows and making the experience clearer. Through user research and collaboration, he addressed key challenges and helped increase retention. A solid contributor who understands both user needs and product development constraints.",
    avatar: bimoboxAvatar,
  },
  {
    name: "Laëtitia R.",
    title: "Founder of Aria Conciergerie",
    text: "His work greatly improved our platform by simplifying user flows and making the experience clearer. Through user research and collaboration, he addressed key challenges and helped increase retention. A solid contributor who understands both user needs and product development constraints.",
    avatar: ariaAvatar,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Gestion du swipe
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className=" wrapper testimonials" {...handlers}>
      <div className="container">
        <div className="testimonial-stack">
          {testimonials.map((testimonial, index) => {
            const position = (index - currentIndex + testimonials.length) % testimonials.length;

            return (
              <div key={index} className={`testimonial-card position-${position}`}>
                <div className="name">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="avatar"
                  />
                  <h3>
                    {testimonial.name} - <span>{testimonial.title}</span>
                  </h3>
                </div>
                <p>{testimonial.text}</p>
              </div>
            );
          })}
        </div>
        <button className="prev-button" onClick={handlePrev}>
          →
        </button>
        <button className="next-button" onClick={handleNext}>
          →
        </button>
        <div className="indicators">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
