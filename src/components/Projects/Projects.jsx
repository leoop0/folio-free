import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import "./Projects.scss";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Aria from "../../assets/works/aria.jpg";
import Betnow from "../../assets/works/betnow.jpg";
import Bimobox from "../../assets/works/bimobox.jpeg";
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

const Projects = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const [selectedType, setSelectedType] = useState("All");

  const filters = ["All", "UI/UX Mobile", "UI/UX Web", "Development", "Art Direction"];

  const items = [
    {
      id: 1,
      title: "B2B landing page",
      image: Koino,
      types: ["All", "UI/UX Web"],
      link: "https://www.figma.com/proto/Oc8pc3290i1OyazZEBX2GJ/Koino---Synqro-%7C-L%C3%A9o-FRATI?page-id=1%3A1006&node-id=26-1010&viewport=1241%2C-3%2C0.16&t=6rBZJj9bbZ40wjhG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1998",
    },
    {
      id: 2,
      title: "Landing Page for a Chicory brand",
      image: Choffee,
      types: ["All", "UI/UX Web"],
    },
    {
      id: 3,
      title: "An app to find your friends at festivals",
      image: Isulia,
      types: ["All", "UI/UX Mobile"],
      link: "https://www.behance.net/gallery/194730945/ESPLORA-UIUX-Design",
    },
    {
      id: 4,
      title: "Alternate view of Koino",
      image: Koino1,
      types: ["All", "UI/UX Web"],
      link: "https://www.figma.com/proto/Oc8pc3290i1OyazZEBX2GJ/Koino---Synqro-%7C-L%C3%A9o-FRATI?page-id=1%3A1006&node-id=26-1010&viewport=1241%2C-3%2C0.16&t=6rBZJj9bbZ40wjhG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A1998",
    },
    {
      id: 4.5,
      title: "B2B SaaS Landing Page",
      image: Bimobox,
      types: ["All", "UI/UX Web", "Development"],
      link: "https://modest-volunteers-419430.framer.app/",
    },
    {
      id: 5,
      title: "App for a museum during lockdown",
      image: Feel,
      types: ["All", "UI/UX Mobile"],
    },
    {
      id: 6,
      title: "3D Cube created and animated with Blender",
      video: Cube,
      types: ["All", "Art Direction"],
    },
    {
      id: 7,
      title: "Alternate view of Olympus game",
      image: Olympus1,
      types: ["All", "Art Direction"],
      link: "https://www.behance.net/gallery/201015257/Olympus-Jeu-de-cartes-mtyhologique",
    },
    { id: 8, title: "Landing for a football app", image: Hexacup, types: ["All", "UI/UX Web"] },
    {
      id: 9,
      title: "Metro poster created with data",
      image: Metro,
      types: ["All", "Art Direction"],
    },
    {
      id: 10,
      title: "Greek Mythology cards game",
      image: Olympus,
      types: ["All", "Art Direction"],
      link: "https://www.behance.net/gallery/201015257/Olympus-Jeu-de-cartes-mtyhologique",
    },
    {
      id: 11,
      title: "Rebranding for Sonigiri",
      image: Sonigiri,
      types: ["All", "Art Direction"],
      link: "https://www.behance.net/gallery/186958185/Rebranding-Sonigiri",
    },
    { id: 12, title: "New app for Betclic", image: Betnow, types: ["All", "UI/UX Mobile"] },
    {
      id: 13,
      title: "Website for a concierge service",
      image: Aria,
      types: ["All", "Development", "UI/UX Web"],
      link: "https://ariaconciergerie.com/",
    },
    {
      id: 14,
      title: "Alternate view of Choffee packaging",
      image: Choffee1,
      types: ["All", "Art Direction"],
    },
    { id: 15, title: "Physics app for students", image: Meyze, types: ["All", "UI/UX Mobile"] },
    {
      id: 16,
      title: "Alternate view of Isulia app",
      image: Isulia1,
      types: ["All", "UI/UX Mobile"],
      link: "https://www.behance.net/gallery/194730945/ESPLORA-UIUX-Design",
    },
    {
      id: 17,
      title: "Website for WWF",
      image: WWF,
      types: ["All", "UI/UX Web"],
      link: "https://www.behance.net/gallery/140315317/WWF-Data-For-Change",
    },
    {
      id: 18,
      title: "E-commerce Horror Vacui Redesign",
      image: Horror,
      types: ["All", "UI/UX Web"],
    },
  ];

  const filteredItems =
    selectedType === "All" ? items : items.filter((item) => item.types.includes(selectedType));

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
  };

  return (
    <div className="wrapper works" id="projects">
      <div className="container-lg">
        <h2>Other works</h2>
        <div className="filters-container">
          <div className="filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${selectedType === filter ? "active" : ""}`}
                onClick={() => setSelectedType(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredItems.map((item) => (
            <div className="project-item fade-in" key={item.id}>
              <div className="img-container">
                {item.image && <LazyLoadImage src={item.image} alt={item.title} />}
                {item.video && (
                  <video autoPlay muted loop>
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
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Projects;
