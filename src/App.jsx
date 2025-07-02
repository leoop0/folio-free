import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Newgo from "./pages/Newgo";
import Halto from "./pages/Halto";
import Flowcam from "./pages/Flowcam";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
