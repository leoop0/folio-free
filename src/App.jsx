import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Newgo from "./pages/Newgo";
import Halto from "./pages/Halto";
import Flowcam from "./pages/Flowcam";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef, useState } from "react";

function App() {
  const footerRef = useRef(null);
  const [showBlur, setShowBlur] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const distanceFromBottom = documentHeight - (scrollY + windowHeight);

      const fadeStart = 200;
      const opacity = Math.max(0, Math.min(1, distanceFromBottom / fadeStart));

      const blurElement = document.querySelector(".gradient-blur");
      if (blurElement) {
        blurElement.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgo" element={<Newgo />} />
          <Route path="/halto" element={<Halto />} />
          <Route path="/flowcam" element={<Flowcam />} />
        </Routes>
      </Router>
      <div className="blur-wrapper">
        <div className={`gradient-blur${!showBlur ? " hide-blur" : ""}`}>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
