import React, { useState } from "react";
import "./TestimonialsSimple.scss";

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials simple">
      <div className="container-t">
        <div
          className="testimonial-stack"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
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
          ))}
        </div>
        <div className="controls">
          <button onClick={handlePrev}> →</button>
          <button onClick={handleNext}> →</button>
        </div>
        <div className="indicators">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
