import tabatapng from "../assets/tabataoranje.png";
import weatherpng from "../assets/desktop.jpg";
import AnimatedContainer from "./AnimatedContainer";

import "./Projects.css";

const Projects = () => {
  return (
    <AnimatedContainer>
      <div className="projects-container">
        <div id="border-bottom" className="project-container">
          <div className="project-container__photo left">
            <a
              rel="noreferrer"
              className="project-container__photo__github"
              target="_blank"
              href="https://github.com/gazibarad/interval-timer"
            >
              <img className="photo" src={tabatapng} alt="HIIT Timer" />
            </a>
          </div>
          <div className="project-container__text right">
            <a
              rel="noreferrer"
              className="project-container__text__live-link"
              target="_blank"
              href="https://tabata.pages.dev/"
            >
              Interval Timer - Live
            </a>
            <p className="project-container__text__technology">Vanilla JS</p>
            <br />
            <h1 className="project-container__text__features-title">
              Some Features:
            </h1>
            <p className="project-container__text__features">
              -working with user input
            </p>
            <p className="project-container__text__features">
              -DOM Manipulation
            </p>
            <p className="project-container__text__features">
              -WakeScreen Lock
            </p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-container__text left">
            <a
              rel="noreferrer"
              className="project-container__text__live-link"
              target="_blank"
              href="https://gdweather.pages.dev/"
            >
              Weather API - Live
            </a>
            <p className="project-container__text__technology">
              React.js | Tailwind CSS
            </p>
            <br />
            <h1 className="project-container__text__features-title">
              Some Features:
            </h1>
            <p className="project-container__text__features">
              -redux toolkit and redux-saga
            </p>
            <p className="project-container__text__features">
              -Tailwind CSS mobile first development
            </p>
            <p className="project-container__text__features">
              -geolocation or user input
            </p>
          </div>
          <div className="project-container__photo right">
            <a
              rel="noreferrer"
              className="project-container__photo__github"
              target="_blank"
              href="https://github.com/gazibarad/reactweather"
            >
              <img className="photo" src={weatherpng} alt="Weather API" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default Projects;
