import Logo from "../assets/projects/newgo-logo.svg";
import ReactCompareImage from "react-compare-image";
import BeforeImage from "../assets/projects/clubs-before.png";
import AfterImage from "../assets/projects/clubs-after.png";
import Buttons from "../assets/projects/buttons.png";
import Home from "../assets/projects/home.png";
import Retool from "../assets/projects/retool.png";

const Newgo = () => {
  return (
    <div className="wrapper project-page newgo">
      <div className="container-min">
        <section className="title">
          <div className="logo">
            <img src={Logo} alt="Newgo" />
          </div>
          <div className="title-btn">
            <div className="txt">
              <h1>Gaming & Esport SaaS</h1>
              <h3>Newgo</h3>
            </div>
            <a href="https://newgo.io" target="_blank" rel="noreferrer" className="btn-primary-sm">
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
              Visit Newgo
            </a>
          </div>
          <div className="divider"></div>
        </section>

        <section className="infos-project">
          <div className="info">
            <h6>ROLE</h6>
            <p>Web Developer</p>
            <p>Product Designer</p>
          </div>
          <div className="info">
            <h6>MAIN TOOLS</h6>
            <p>Figma</p>
            <p>React</p>
          </div>
          <div className="info">
            <h6>PROCESS</h6>
            <p>User-centric Design</p>
            <p>Iterative Design</p>
          </div>
          <div className="info">
            <h6>TIMELINE</h6>
            <p>Oct 2020 - Oct 2023</p>
          </div>
        </section>

        <section className="content-project">
          <div className="part">
            <h2>Context</h2>
            <p>
              Newgo is a SaaS platform serving a wide array of gaming professionals, from esports
              clubs and gaming influencers to publishers, studios, specialized press, and
              educational institutions. Its core value proposition lies in streamlining exchanges
              between these stakeholders, facilitating partnerships, and enabling marketing
              opportunities within the gaming ecosystem.
            </p>
            <p>
              As a Product Designer at Newgo, during the three-year work-study program, my key
              responsibilities included ideation and assessment of new features, definition of their
              relevance, designing intuitive interfaces, and engaging with users directly to
              understand their needs, pain points, and overall goals.
            </p>
            <img src={Home} alt="" />
          </div>

          <div className="part">
            <h2>Challenges</h2>
            <p>
              The biggest hurdle from the beginning was user retention. At first, Newgo's platform
              was a simple directory, and users had no meaningful reason to return. Users also felt
              that Newgo's value proposition was unclear and its utility not immediately apparent.
            </p>
            <p>
              Scalability-wise, we had to cater to different needs for various stakeholder types
              with unique objectives each while keeping a consistent and easily understandable user
              experience.
            </p>
          </div>

          <div className="part">
            <h2>User Reasearch & insights</h2>
            <p>
              Addressing these issues, I conducted several user interviews, surveys, usability
              testing, and analytics to be able to understand users. From there, it became evident
              that while the platform might provide value, it is neither communicated nor
              user-focused enough. Users struggled with how to take action or understand why they
              should spend time on Newgo.
            </p>
            <p>
              These insights led us to focus on clarifying the platform’s value proposition and
              improving the onboarding experience to guide new users more effectively.
            </p>
          </div>
          <div className="part">
            <h2>Design Decisions & Process</h2>
            <p>
              At its core, we introduced the directory as a core "primitive" that would bring
              coherence and focus to Newgo's feature set. Rather than sprinkling its site with many
              arbitrary features, we centered the directory as the resource upon which the
              supporting features-partnerships, offers, and events, for example-would rely. This
              made the experience far more intuitive: a user could take a known reference point, in
              this case, and more organically find their way through to the related features.
            </p>
            <p>
              Feature prioritization was at first based on internal brainstorming, but through user
              feedback and testing, we kept refining the roadmap. Non-essential features were
              reduced or removed in favor of those that best supported the directory's central role.
            </p>
            <p>
              I have also established a cohesive design system for maintaining visual and functional
              consistency. This system served as a reference for both the design and development
              teams, allowing us to ensure that each new component aligned with our central vision.
            </p>
            <ReactCompareImage
              leftImage={BeforeImage}
              rightImage={AfterImage}
              sliderLineColor="#FFFFFF" // Ligne de séparation personnalisée
              sliderLineWidth={3} // Largeur de la ligne
            />
          </div>

          <div className="part">
            <h2>Collaboration & Teamwork</h2>
            <p>
              Working in a small, agile team allowed close collaboration with developers and product
              managers. A background in development helped in articulating design requirements
              better to communicate with developers and provided them with straightforward
              solutions. Frequent syncs, hands-on work sessions, and a lean, rapid-delivery approach
              allowed us to iterate quickly and efficiently.
            </p>
          </div>

          <div className="part">
            <h2>Optimizing Development Workflows (Retool)</h2>
            <p>
              In our quest for efficiency and rapid feature delivery, we also explored tools like
              Retool to streamline app development. While we ultimately decided not to use it for
              this project, experimenting with Retool gave us valuable insights into its potential
              for speeding up internal processes. It remains a tool we keep in mind for future use,
              especially for building internal tools or rapidly prototyping features.
            </p>
            <img src={Retool} alt="" />
          </div>

          <div className="part">
            <h2>Technical & Functional Constraints</h2>
            <p>
              While the application itself was not technically complex, we decided to refactor the
              codebase to ensure a cleaner, more scalable architecture. With the product essentially
              rebuilt from scratch, we avoided legacy constraints and designed both the product and
              codebase around a clear, central concept.
            </p>
            <img src={Buttons} alt="" />
          </div>

          <div className="part">
            <h2>Outcomes & Impact</h2>
            <p>
              The introduction of the directory as the lead "primitive" and an onboarding experience
              made user retention better, with more clarity concerning the value proposition of this
              platform. Users could find what they were looking for much easier, and this also
              encouraged reuse and community involvement. The exact metrics had not been formally
              tracked, but internal feedback and user interviews showed a drastic improvement in how
              users would perceive the platform and be able to navigate it.
            </p>
          </div>

          <div className="part">
            <h2>Reflections & Learnings</h2>
            <p>
              This experience just nailed it-the importance of UX over aesthetic considerations. As
              much as I love well-crafted interfaces, this project taught me that clarity and
              intuitiveness of the user experience will always be more important. Spending time to
              conduct thorough research, validate assumptions, and methodically simplify complex
              offerings are ways I've learned to deliver more impactful designs. My approach to
              complex SaaS products is now to identify a clear, central value proposition that
              everything else is built around to create coherence, scalability, and user
              satisfaction.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newgo;
