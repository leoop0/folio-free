import Logo from "../assets/img/halto-logo.svg";
import Img1 from "../assets/halto/1.jpg";
import Img2 from "../assets/halto/2.jpg";
import Img3 from "../assets/halto/3.jpg";
import Img4 from "../assets/halto/4.jpg";
import Img5 from "../assets/halto/5.jpg";
import Img6 from "../assets/halto/6.jpg";

import { Helmet } from "react-helmet-async";
import MetaImg from "../assets/img/img.png";

const Halto = () => {
  return (
    <div className="wrapper project-page newgo">
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
      <div className="container-min">
        <section className="title">
          <div className="logo">
            <img src={Logo} alt="Halto logo" />
          </div>
          <div className="title-btn">
            <div className="txt">
              <h1>1v1 Space-shooter</h1>
              <h3>Halto</h3>
            </div>
            <a
              href="https://haltogame.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_72_180)">
                  <path
                    d="M9 4.5H4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H12C12.3978 15 12.7794 14.842 13.0607 14.5607C13.342 14.2794 13.5 13.8978 13.5 13.5V9"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 9.75L15 3"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.25 3H15V6.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_72_180">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Play halto
            </a>
          </div>
          <div className="divider"></div>
        </section>

        <section className="infos-project">
          <div className="info">
            <h6>ROLE</h6>
            <p>Web Developer</p>
            <p>UI/UX Designer</p>
          </div>
          <div className="info">
            <h6>MAIN TOOLS</h6>
            <p>Figma</p>
            <p>React</p>
          </div>
          <div className="info">
            <h6>PROCESS</h6>
            <p>Hackathon</p>
          </div>
          <div className="info">
            <h6>TIMELINE</h6>
            <p>Jan 2021</p>
          </div>
        </section>

        <section className="content-project">
          <div className="part">
            <h2>Context</h2>
            <p>
              Halto was born during a hackathon organized at my school, where we had two weeks to
              create a project of our choice. With a team of around ten people - designers,
              developers and UX - we decided to design a video game. We often worked late, sometimes
              until after midnight, to bring our idea to life.
            </p>
            <img src={Img1} alt="Halto" />
            <img src={Img2} alt="Halto" />
            <div className="grid-2">
              <img src={Img3} alt="Halto" />
              <img src={Img4} alt="Halto" />
            </div>
            <img src={Img5} alt="Halto" />
          </div>

          <div className="part">
            <h2>Design & UX</h2>
            <p>
              The main objective was to offer a fluid and accessible experience, while allowing the
              most competitive players to challenge themselves. Balancing the game was therefore a
              key challenge.
            </p>
            <p>
              On the design side, we drew inspiration from futuristic and cyberpunk worlds, with
              visual elements such as broken lines, angled buttons and 3D wireframe shapes. The main
              challenge was to integrate both gameplay and game indications into a single screen, so
              that the player is never lost while avoiding information overload. We thus designed an
              interface where the UI elements blended naturally with the gameplay screen.
            </p>
          </div>

          <div className="part">
            <h2>Development</h2>
            <p>
              We used React, Socket and Firebase for development. At the time, I was still new to
              React, and this project enabled me to learn how it worked in greater depth.
            </p>
            <p>
              My main contributions on the development side included :
              <ul>
                <li>
                  The management of pauses between rounds (15 seconds between rounds to choose a
                  bonus card).
                </li>
                <li>
                  Integration of power cards (reinforced walls, more life, increased damage, etc.).
                </li>
                <li>Basic data recording and retrieval to guarantee smooth gameplay.</li>
              </ul>
            </p>
            <p>
              This project was a real immersion in the constraints of development and gave me a
              better understanding of the balance between design and code.
            </p>
          </div>
          <div className="part">
            <h2>Results</h2>
            <p>
              After the hackathon, we organized a tournament within the school, with a leaderboard
              system and advanced statistics (number of shots received, opponents hit, win/loss
              ratio...). The event was a real success, and the winner went home with AirPods.
            </p>
            <p>
              However, a few bugs appeared during the tournament (score update problems, incorrect
              life gauge). With more time, we could have fine-tuned the code, carried out more tests
              and added new cards and powers.
            </p>
            <img src={Img6} alt="Halto" />
          </div>

          <div className="part">
            <h2>Conclusion</h2>
            <p>
              Halto has been an enriching adventure, on both a technical and human level. This
              project has enabled me to perfect my UI management in a game context, and to explore
              development with React. It was also a great collaborative experience, where we were
              able to draw on each other's strengths to create a functional and competitive game in
              a limited time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Halto;
