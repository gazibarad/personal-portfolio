import linkedin from "../assets/linkedin.svg";
import email from "../assets/Mail.svg";
import discord from "../assets/Discord.svg";
import fromidea from "../assets/fromidea.png";

import AnimatedContainer from "./AnimatedContainer";

import "./About.css";

const About = () => {
  return (
    <AnimatedContainer>
      <div className="about-container">
        <div className="left">
          <h1 className="mb left__title">Hi there,</h1>
          <p className="left__paragraph">
            I am a 24 year old based in Sarajevo who loves to do what he does,
            when I’m not coding or designing I like to spend time outside, read,
            write and work out.
          </p>
          <p className="mb left__accent-paragraph">
            I can help you with creating your own website - taking care of
            everything from design to code to deployment!
          </p>
          <p className="mb left__one-line">
            Looking forward to hearing from <span className="you">You</span>.
          </p>
          <div className="mb left__contact-container">
            <h3 className="left__contact-container__title">Contact:</h3>

            <div className="left__contact-container__links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/users/367771422577131521"
              >
                <img className="social-image" src={discord} alt="discord" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:gazibaradino@outlook.com"
              >
                <img className="social-image" src={email} alt="email" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/dino-gazibara-66b187238/"
              >
                <img className="social-image" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          <h1 className="left__thanks-title">Thanks for visiting!</h1>
        </div>
        <div className="right">
          <img src={fromidea} alt="from design to website" />
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default About;
