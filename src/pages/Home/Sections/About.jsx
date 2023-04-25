import "./About.css";
import image from "../../../assets/images/placeholder2.webp";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaCircle,
} from "react-icons/fa";
import IconLink from "../../../components/IconLink";
import { useState } from "react";
import Sidebar from "../../../components/Sidebar";

function About() {
  const [isCardClick, setIsCardClick] = useState(false);
  function handleSidebar() {
    setIsCardClick(!isCardClick);
  }

  return (
    <>
      <div className="about-section flex-container" id="about-id">
        <div className="container about-container flex-container">
          <div className="about-details">
            <p className="about-details-sub">My Web Development Journey</p>
            <h2>
              Web <span className="transparent-text">Dev</span> and <br />
              Design <span className="transparent-text">Expertise</span>
            </h2>
            <p className="about-more-details">
              I'm an experienced and dedicated web deverloper/designer with a
              passion for creating beautiful, responsive websites. With over 1/2
              years of experience in the industry, I specialize in creating
              user-friendly, visually appealing websites from start to finish.
            </p>
            <div className="about-details-icon">
              <IconLink iconUrl="#">
                <FaFacebookF />
              </IconLink>
              <IconLink>
                <FaTwitter />
              </IconLink>
              <IconLink iconUrl="https://www.linkedin.com/in/denzel-lanzaderas-47a9a5212/">
                <FaLinkedinIn />
              </IconLink>
              <IconLink iconUrl="https://github.com/Denzi0">
                <FaGithubAlt />
              </IconLink>
            </div>
          </div>
          <div className="about-image">
            <img src={image}></img>
          </div>
          <div className="about-details2">
            <p className="about-details-sub">Technical and Soft Skills</p>
            <h2>
              My
              <span className="transparent-text"> Skills</span> and Web
              <span className="transparent-text"> Experience</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem
              provident est sapiente soluta officia aperiam omnis enim
              asperiores atque.
            </p>
            <div className="about-skills-list">
              <code>HTML</code>
              <code>Css</code>
              <code>Bootstrap</code>
              <code>Tailwind</code>
              <code>Javascript</code>
              <code>React</code>
              <code>Vue</code>
              <code>Laravel</code>
              <code>MySQL</code>

              <code>Wordpress</code>
              <code>Wordpress Builders</code>
            </div>
            <div className="about-live-sites">
              <div className="card" onClick={handleSidebar}>
                <FaCircle className="blinking-dot blink" />
                <p>Lived Sites</p>
                <p className="number">10</p>
              </div>
              <div className="card">
                <p>Projects</p>
                <p className="number">15</p>
              </div>
            </div>
            <Sidebar isCardClick={isCardClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
