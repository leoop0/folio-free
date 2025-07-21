import Logo from "../assets/projects/flow.svg";
import { Helmet } from "react-helmet-async";
import MetaImg from "../assets/img/img.png";

import Flowcam1 from "../assets/projects/flowcam-1.png";
import Flowcam2 from "../assets/projects/flowcam-2.png";
import Flowcam3 from "../assets/projects/flowcam-3.png";
import Flowcam4 from "../assets/projects/flowcam-4.png";

const Flowcam = () => {
  return (
    <div className="wrapper project-page newgo">
      <Helmet>
        <title>Flowcam - Minimalist iOS Camera App by Léo Frati</title>
        <meta
          name="description"
          content="Flowcam is a minimalist iOS photo capture app designed by Léo Frati. It offers a simple and authentic photography experience without overprocessing."
        />
        <meta
          name="keywords"
          content="Flowcam, minimalist camera app, iOS photography, Léo Frati, SwiftUI, AVFoundation, Product Design, UX"
        />
        <meta property="og:title" content="Flowcam - Minimalist iOS Camera App" />
        <meta
          property="og:description"
          content="Discover Flowcam, a minimalist iOS camera app designed to deliver authentic, natural photos without unnecessary processing."
        />
        <meta property="og:image" content={MetaImg} />
        <meta property="og:url" content="https://leofrati.fr/flowcam" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flowcam - Minimalist iOS Camera App" />
        <meta
          name="twitter:description"
          content="Flowcam is a minimalist iOS camera app by Léo Frati, offering natural photos with a simple interface."
        />
        <meta name="twitter:image" content={MetaImg} />
      </Helmet>
      <div className="container-min">
        <section className="title">
          <div className="logo">
            <img src={Logo} alt="Flowcam" />
          </div>
          <div className="title-btn">
            <div className="txt">
              <h1>Minimalist camera app</h1>
              <h3>Flowcam</h3>
            </div>
            <a
              href="https://flowcam.vercel.app/"
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
              Download Flowcam
            </a>
          </div>
          <div className="divider"></div>
        </section>

        <section className="infos-project">
          <div className="info">
            <h6>ROLE</h6>
            <p>iOS Developer</p>
            <p>Product Designer</p>
          </div>
          <div className="info">
            <h6>MAIN TOOLS</h6>
            <p>Figma</p>
            <p>SwiftUI, React</p>
            <p>Xcode</p>
          </div>
          <div className="info">
            <h6>PROCESS</h6>
            <p>User-centered Design</p>
            <p>Iterative Development</p>
          </div>
          <div className="info">
            <h6>TIMELINE</h6>
            <p>June 2025 - Now</p>
          </div>
        </section>

        <section className="content-project">
          <div className="part">
            <h2>Context</h2>
            <p>
              Flowcam is an ultra-minimal iOS photo capture app, designed to offer a simple and
              authentic alternative to classic apps. While most other solutions add exaggerated
              processing (HDR, oversharpening, filters, AI), Flowcam aims to deliver a natural,
              unaltered photo with an intentionally stripped-down interface.
            </p>
            <p>
              This app was born out of a bit of frustration: minimalist photo apps have become paid
              (like Zerocam or Halide) or closed (like Soft). I wanted to create my own simple,
              free, and open alternative. Coming from no SwiftUI background, let's just say it was a
              real challenge!
            </p>

            <img
              src={Flowcam1}
              alt="The website cover, iphone mockup with headling saying Tap to shoot, nothing more"
            />
          </div>

          <div className="part">
            <h2>Challenges & Implementation</h2>
            <p>
              Flowcam is developed in SwiftUI, using <span className="code">AVFoundation</span> for
              the camera stream and <span className="code">CoreImage</span> for image processing.
              The project quickly faced several challenges:
            </p>
            <ul>
              <li>
                <span className="bold">Lens management</span>: Apple does not provide uniform lens
                management across iPhone models, so I had to dynamically detect available lenses,
                their zoom factors, and create a fallback if a chosen focal length was unavailable.
              </li>
              <li>
                <span className="bold">Performance</span>: real-time capture, smooth display, and
                stabilizing threads for both the UI and camera were tricky to handle, especially to
                avoid saturating the GPU and RAM.
              </li>
              <li>
                <span className="bold">Memory leaks & thread management</span>: I had to make sure
                that processing pipelines <span className="code">(CoreImage, Metal, Vision)</span>{" "}
                correctly released memory after each capture, without freezing the preview or
                causing crashes in multithreaded scenarios.
              </li>
              <li>
                <span className="bold">Compression</span>: the image had to remain high quality
                while being compressed (to avoid 6–8 MB default files). I experimented with
                different JPEG levels and added a metadata injection system to preserve the original
                EXIF capture date.
              </li>
              <li>
                <span className="bold">Photo pipeline</span>: orchestrating capture, optional style
                application (exposure, colorimetry, etc.), and saving — while keeping everything
                responsive — was a true architectural challenge.
              </li>
              <li>
                <span className="bold">Custom LUT experimentation</span>: I tried to integrate a
                color grading LUT, which taught me how to work with .CUBE files, use{" "}
                <span className="code">SwiftCube</span> and{" "}
                <span className="code">Xcode PackageDependencies</span>, and generate a compatible
                x64 LUT. This idea was ultimately not retained in the final build.
              </li>
            </ul>

            <img src={Flowcam2} alt="Xcode screenshot" />
          </div>

          <div className="part">
            <h2>Design</h2>
            <p>
              For the interface, I went through several iterations before reaching the version you
              see today. Some tests were more or less successful, with effects ranging from
              technical to more artistic. But that's part of the creative process.
            </p>
            <p>I finally opted for something ultra-simple:</p>
            <ul>
              <li>A capture button</li>
              <li>A lens selection button</li>
              <li>A button to switch cameras</li>
            </ul>
            <img src={Flowcam4} alt="Iphone mockup of flowcam" />
            <p>
              No parameters, no manual control of exposure, white balance, or focus. The goal was
              not to distract the user and to{" "}
              <span className="bold">highlight composition rather than interface</span>.
            </p>
          </div>

          <div className="part">
            <h2>Distribution (TestFlight & Sideloading)</h2>
            <p>
              Since TestFlight requires a paid developer account, I opted for an alternative via
              AltStore (sideloading) to share the app freely with testers, especially thanks to
              AltStore PAL, which simplifies installation in Europe through the DMA. This allows me
              to iterate faster without immediately investing 100 € in an Apple Developer
              subscription, while also learning more about sideloading.
              <div className="warning">
                <p>
                  After some investigation, it seems that AltStore doesn't allow you to do without
                  an Apple Developer account. Flowcam won't be available immediately, but I hope it
                  will be soon!
                </p>
              </div>
            </p>
            <img src={Flowcam3} alt="Testflight & AltStore Logos" />
          </div>

          <div className="part">
            <h2>User Feedback (in progress)</h2>
            <p>
              The app is still in beta. First feedback will be collected in the coming weeks about
              the simplicity of the interface, the speed of photo capture, and color accuracy.
            </p>
          </div>

          <div className="part">
            <h2>Results (provisional)</h2>
            <p>
              Even though Flowcam doesn't yet have formal user feedback, I'm already satisfied to
              have:
            </p>
            <ul>
              <li>Validated the overall architecture</li>
              <li>Handled multi-device compatibility</li>
              <li>Maintained a stable and performant interface</li>
              <li>Learned to manage the camera stack in Swift in depth</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Flowcam;
