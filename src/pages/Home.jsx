import React, { useState } from "react";
import About from "../components/About/About";

import Newgo from "../assets/projects/newgo.png";
import ThreeD from "../assets/works/3D.png";
import Betnow from "../assets/works/Betnow.png";
import Choffee from "../assets/works/Choffee.png";
import Feel from "../assets/works/Feel.png";
import Halto from "../assets/works/Halto.png";
import Horror from "../assets/works/Horror.png";
import Isulia from "../assets/works/Isulia.png";
import Metro from "../assets/works/Metro.png";
import Meyze from "../assets/works/Meyze.png";
import Olympus from "../assets/works/Olympus.png";
import Olympus1 from "../assets/works/Sonigiri.png";
import Olympus2 from "../assets/works/Olympus.png";
import PasMoi from "../assets/works/pasmoi.png";
import Sonigiri from "../assets/works/Sonigiri.png";
import WWF from "../assets/works/WWF.png";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const handleAboutClick = () => {
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  const openLightbox = (images, index) => {
    console.log("Image clicked:", images[index]);
    setLightbox({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], currentIndex: 0 });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <div className="Home">
      <div className="wrapper hero">
        <div className="container">
          <h1>
            Hi, I’m Leo Frati, a product designer based in Bordeaux who helps digital founders
            create unique, empathetic product experiences.
          </h1>

          <div className="btn-container">
            <a href="" className="btn-primary">
              Work with me
            </a>
            <button onClick={handleAboutClick} className="btn-secondary">
              About
            </button>
          </div>

          {showAbout && (
            <>
              <div className="overlay" onClick={handleCloseAbout}></div>
              <About onClose={handleCloseAbout} />
            </>
          )}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://dark-patterns-pi.vercel.app/"
            className="white-book"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.57131 3.42869L8 0L11.4287 3.42869L8 6.85737L4.57131 3.42869ZM0 8L3.42869 4.57131L6.85737 8L3.42869 11.4287L0 8ZM9.14263 8L12.5713 11.4287L16 8L12.5713 4.57131L9.14263 8ZM4.57131 12.5713L8 9.14263L11.4287 12.5713L8 16L4.57131 12.5713Z"
                fill="#65719D"
              />
            </svg>
            <p>I wrote an essay on dark patterns that you can read here</p>
          </a>
        </div>
      </div>

      <div className="wrapper projects">
        <div className="container">
          <h2>Selected Work</h2>
          <div className="grid">
            <div className="project">
              <img src={Newgo} alt="Newgo" />
              <h4>Newgo</h4>
            </div>
            {/* <div className="project">
              <img src={Newgo} alt="Newgo" />
              <h4>Newgo</h4>
            </div> */}
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="wrapper works">
        <div className="container">
          <h2>Other projects</h2>
          <div className="grid-3">
            <div className="col">
              <img src={Halto} alt="Halto" onClick={() => openLightbox([Halto], 0)} />
              <img src={Isulia} alt="Isulia" onClick={() => openLightbox([Isulia], 0)} />
              <img
                src={Olympus}
                alt="Olympus"
                onClick={() => openLightbox([Olympus, Olympus1, Olympus2], 0)}
              />
              <img src={Betnow} alt="Betnow" onClick={() => openLightbox([Betnow], 0)} />
              <img src={WWF} alt="WWF" onClick={() => openLightbox([WWF], 0)} />
            </div>
            <div className="col">
              <img src={Choffee} alt="Choffee" onClick={() => openLightbox([Choffee], 0)} />
              <img src={Metro} alt="Metro" onClick={() => openLightbox([Metro], 0)} />
              <img src={Sonigiri} alt="Sonigiri" onClick={() => openLightbox([Sonigiri], 0)} />
              <img src={PasMoi} alt="PasMoi" onClick={() => openLightbox([PasMoi], 0)} />
            </div>
            <div className="col">
              <img src={Feel} alt="Feel" onClick={() => openLightbox([Feel], 0)} />
              <img src={ThreeD} alt="3D" onClick={() => openLightbox([ThreeD], 0)} />
              <img src={Meyze} alt="Meyze" onClick={() => openLightbox([Meyze], 0)} />
              <img src={Horror} alt="Horror" onClick={() => openLightbox([Horror], 0)} />
            </div>
          </div>
        </div>
      </div>

      {lightbox.isOpen && (
        <>
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox">
            <img
              className="lightbox-image"
              src={lightbox.images[lightbox.currentIndex]}
              alt="Lightbox"
            />
            <div className="btns">
              <button className="lightbox-prev" onClick={prevImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </button>
              <button className="lightbox-next" onClick={nextImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
