import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

import Aria from "../../assets/works/aria.jpg";
import Betnow from "../../assets/works/betnow.jpg";
import Bimobox from "../../assets/works/bimobox.jpg";
import Choffee from "../../assets/works/choffee.jpg";
import Choffee1 from "../../assets/works/choffee-1.jpg";
import Feel from "../../assets/works/feel.jpg";
import Hexacup from "../../assets/works/hexa.jpg";
import Horror from "../../assets/works/horror.jpg";
import Metro from "../../assets/works/metro.jpg";
import Meyze from "../../assets/works/meyze.jpg";
import Olympus from "../../assets/works/olympus.jpg";
import Olympus1 from "../../assets/works/olympus-1.jpg";
import Sonigiri from "../../assets/works/sonigiri.jpg";
import WWF from "../../assets/works/wwf.jpg";
import Isulia from "../../assets/works/isulia.jpg";
import Isulia1 from "../../assets/works/isulia-1.jpg";
import Koino from "../../assets/works/koino.jpg";
import Koino1 from "../../assets/works/koino-1.jpg";
import Cube from "../../assets/works/cube_low.mp4";

import "./Projects.scss";

const Projects = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  // const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  // const [videoLightbox, setVideoLightbox] = useState({ isOpen: false, videoSrc: "" });

  // const openLightbox = (images, index) => {
  //   if (!isMobile) {
  //     document.body.style.overflow = "hidden"; // Désactiver le scroll
  //     document.documentElement.style.overflow = "hidden"; // Désactiver le scroll
  //     setLightbox({ isOpen: true, images, currentIndex: index });
  //   }
  // };

  // const closeLightbox = () => {
  //   if (!isMobile) {
  //     document.body.style.overflow = "auto"; // Réactiver le scroll
  //     document.documentElement.style.overflow = "auto"; // Réactiver le scroll
  //   }
  //   setLightbox({ isOpen: false, images: [], currentIndex: 0 });
  // };

  // const nextImage = () => {
  //   setLightbox((prev) => ({
  //     ...prev,
  //     currentIndex: (prev.currentIndex + 1) % prev.images.length,
  //   }));
  // };

  // const prevImage = () => {
  //   setLightbox((prev) => ({
  //     ...prev,
  //     currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
  //   }));
  // };

  // const openVideoLightbox = (videoSrc) => {
  //   if (!isMobile) {
  //     document.body.style.overflow = "hidden"; // Désactiver le scroll
  //     document.documentElement.style.overflow = "hidden"; // Désactiver le scroll
  //     setVideoLightbox({ isOpen: true, videoSrc });
  //   }
  // };

  // const closeVideoLightbox = () => {
  //   if (!isMobile) {
  //     document.body.style.overflow = "auto"; // Réactiver le scroll
  //     document.documentElement.style.overflow = "auto"; // Réactiver le scroll
  //   }
  //   setVideoLightbox({ isOpen: false, videoSrc: "" });
  // };

  const items = [
    {
      id: 1,
      title: "B2B landing page",
      image: Koino,
      link: "https://www.figma.com/proto/Oc8pc3290i1OyazZEBX2GJ/Koino---Synqro-%7C-L%C3%A9o-FRATI?page-id=1%3A1006&node-id=26-1010&viewport=1241%2C-3%2C0.16&t=6rBZJj9bbZ40wjhG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1998",
    },
    { id: 2, title: "Design of a chicory packaging", image: Choffee },
    {
      id: 3,
      title: "An app to find your friends at festivals",
      image: Isulia,
      link: "https://www.behance.net/gallery/194730945/ESPLORA-UIUX-Design",
    },
    {
      id: 4,
      title: "Alternate view of Koino",
      image: Koino1,
      link: "https://www.figma.com/proto/Oc8pc3290i1OyazZEBX2GJ/Koino---Synqro-%7C-L%C3%A9o-FRATI?page-id=1%3A1006&node-id=26-1010&viewport=1241%2C-3%2C0.16&t=6rBZJj9bbZ40wjhG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1998",
    },
    {
      id: 4.5,
      title: "B2B SaaS Landing Page",
      image: Bimobox,
      link: "https://modest-volunteers-419430.framer.app/",
    },
    { id: 5, title: "App for a museum during lockdown", image: Feel },
    { id: 6, title: "3D Cube created and animated with Blender", video: Cube },
    {
      id: 7,
      title: "Alternate view of Olympus game",
      image: Olympus1,
      link: "https://www.behance.net/gallery/201015257/Olympus-Jeu-de-cartes-mtyhologique",
    },
    { id: 8, title: "Landing for a football app", image: Hexacup },
    { id: 9, title: "Metro poster created with data", image: Metro },
    {
      id: 10,
      title: "Greek Mythology cards game",
      image: Olympus,
      link: "https://www.behance.net/gallery/201015257/Olympus-Jeu-de-cartes-mtyhologique",
    },
    {
      id: 11,
      title: "Rebranding for Sonigiri",
      image: Sonigiri,
      link: "https://www.behance.net/gallery/186958185/Rebranding-Sonigiri",
    },
    { id: 12, title: "New app for Betclic", image: Betnow },
    {
      id: 13,
      title: "Website for a concierge service",
      image: Aria,
      link: "https://ariaconciergerie.com/",
    },
    { id: 14, title: "Alternate view of Choffee packaging", image: Choffee1 },
    { id: 15, title: "Physics app for students", image: Meyze },
    {
      id: 16,
      title: "Alternate view of Isulia app",
      image: Isulia1,
      link: "https://www.behance.net/gallery/194730945/ESPLORA-UIUX-Design",
    },
    {
      id: 17,
      title: "Website for WWF",
      image: WWF,
      link: "https://www.behance.net/gallery/140315317/WWF-Data-For-Change",
    },
    { id: 18, title: "E-commerce Horror Vacui Redesign", image: Horror },
  ];

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <div className="wrapper works" id="projects">
      <div className="container-lg">
        <h2>Other works</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item) => (
            <motion.div
              className="project-item"
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="img-container">
                {item.image && (
                  <LazyLoadImage
                    src={item.image}
                    alt={item.title}
                    // onClick={() =>
                    //   openLightbox(
                    //     items.map((i) => i.image),
                    //     items.findIndex((i) => i.id === item.id)
                    //   )
                    // }
                  />
                )}
                {item.video && (
                  <video
                    autoPlay
                    muted
                    loop
                    // onClick={() => openVideoLightbox(item.video)}
                  >
                    <source src={item.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                )}
                <div className="content">
                  <p>{item.title}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      See project
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_454_6)">
                          <path
                            d="M5 12.1807H19"
                            stroke="#0D99FF"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 16.1807L19 12.1807"
                            stroke="#0D99FF"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15 8.18066L19 12.1807"
                            stroke="#0D99FF"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_454_6">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0 0.180664)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* {lightbox.isOpen && (
        <>
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox">
            <LazyLoadImage
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
      )} */}

      {/* {videoLightbox.isOpen && (
        <>
          <div className="lightbox-overlay" onClick={closeVideoLightbox}></div>
          <div className="lightbox">
            <video className="lightbox-video" controls autoPlay>
              <source src={videoLightbox.videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </>
      )} */}
    </div>
  );
};

export default Projects;
