import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";

import Halto from "../../assets/works/Halto.png";
import Isulia from "../../assets/works/Isulia.png";
import Olympus from "../../assets/works/Olympus.png";
import Betnow from "../../assets/works/Betnow.png";
import WWF from "../../assets/works/WWF.png";
import Metro from "../../assets/works/Metro.png";
import Sonigiri from "../../assets/works/Sonigiri.png";
import PasMoi from "../../assets/works/pasmoi.png";
import Choffee from "../../assets/works/Choffee.png";
import Feel from "../../assets/works/Feel.png";
import Cube from "../../assets/works/cube_low.mp4";
import Meyze from "../../assets/works/Meyze.png";
import Horror from "../../assets/works/Horror.png";

import "./Projects.scss";

const Projects = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [videoLightbox, setVideoLightbox] = useState({ isOpen: false, videoSrc: "" });

  const openLightbox = (images, index) => {
    if (!isMobile) {
      document.body.style.overflow = "hidden"; // Désactiver le scroll
      document.documentElement.style.overflow = "hidden"; // Désactiver le scroll
    }
    setLightbox({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    if (!isMobile) {
      document.body.style.overflow = "auto"; // Réactiver le scroll
      document.documentElement.style.overflow = "auto"; // Réactiver le scroll
    }
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

  const openVideoLightbox = (videoSrc) => {
    if (!isMobile) {
      document.body.style.overflow = "hidden"; // Désactiver le scroll
      document.documentElement.style.overflow = "hidden"; // Désactiver le scroll
    }
    setVideoLightbox({ isOpen: true, videoSrc });
  };

  const closeVideoLightbox = () => {
    if (!isMobile) {
      document.body.style.overflow = "auto"; // Réactiver le scroll
      document.documentElement.style.overflow = "auto"; // Réactiver le scroll
    }
    setVideoLightbox({ isOpen: false, videoSrc: "" });
  };

  const items = [
    { id: 1, title: "A online 1v1 Space Shooter", image: Halto, link: "https://haltogame.com/" },
    { id: 2, title: "Metro poster created with data", image: Metro },
    {
      id: 3,
      title: "Greek Mythology cards game",
      image: Olympus,
      link: "https://www.behance.net/gallery/201015257/Olympus-Jeu-de-cartes-mtyhologique",
    },
    { id: 4, title: "New app for Betclic", image: Betnow },
    {
      id: 5,
      title: "Website for WWF",
      image: WWF,
      link: "https://www.behance.net/gallery/140315317/WWF-Data-For-Change",
    },

    {
      id: 6,
      title: "An app to find your friends at festivals",
      image: Isulia,
      link: "https://www.behance.net/gallery/194730945/ESPLORA-UIUX-Design",
    },
    {
      id: 7,
      title: "Rebranding for Sonigiri",
      image: Sonigiri,
      link: "https://www.behance.net/gallery/186958185/Rebranding-Sonigiri",
    },
    { id: 8, title: "PasMoi", image: PasMoi },
    { id: 9, title: "Design of a chicory packaging", image: Choffee },
    { id: 10, title: "App for a museum during lockdown", image: Feel },
    { id: 11, title: "3D Cube created and animated with Blender", video: Cube },
    { id: 12, title: "Physics app for students", image: Meyze },
    { id: 13, title: "E-commerce Horror Vacui Redesign", image: Horror },
    { id: 13, title: "E-commerce Horror Vacui Redesign", image: Horror },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="wrapper works" id="projects">
      <div className="container">
        <h2>Other projects</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item) => (
            <div className="project-item" key={item.id}>
              <div className="img-container">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    onClick={() =>
                      openLightbox(
                        items.map((i) => i.image),
                        items.findIndex((i) => i.id === item.id)
                      )
                    }
                  />
                )}
                {item.video && (
                  <video
                    autoPlay
                    muted
                    loop
                    onClick={() => openVideoLightbox(item.video)} // Ouvre la lightbox vidéo
                  >
                    <source src={item.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <button className="btn-primary">View Project</button>
                  </a>
                )}
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </Masonry>
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

      {videoLightbox.isOpen && (
        <>
          <div className="lightbox-overlay" onClick={closeVideoLightbox}></div>
          <div className="lightbox">
            <video className="lightbox-video" controls autoPlay>
              <source src={videoLightbox.videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
