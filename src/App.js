import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import elipse from "./assets/elipse.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FourOhFour from "./components/FourOhFour";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
        <img className="elipse" src={elipse} alt="elipse" />
      </div>
    </BrowserRouter>
  );
};

export default App;
