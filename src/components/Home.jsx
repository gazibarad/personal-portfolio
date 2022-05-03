import underline from "../assets/underline.svg";
import heroPng from "../assets/ineedahero.png";
import AnimatedContainer from "./AnimatedContainer";

import "./Home.css";

const Home = () => {
  return (
    <AnimatedContainer>
      <div className="home wrap">
        <div className="left-side">
          <h1 className="left-side__title">
            From <br /> <span className="left-side__title__span">idea</span> to
            <br />
            <img
              className="left-side__title__underline-svg"
              src={underline}
              alt="underline"
            />
            <span className="left-side__title__span">website.</span>
          </h1>
          <p>Frontend developer & web designer</p>
          <a className="left-side__button" href="/">
            LEARN MORE
          </a>
        </div>
        <div className="right-side">
          <img className="portrait-img" src={heroPng} alt="portait-img" />
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default Home;
