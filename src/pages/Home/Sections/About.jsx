import "./About.css";
import Button from "../../../components/Button";
import { FaBeer } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaCircle,
} from "react-icons/fa";
import IconLink from "../../../components/IconLink";
import { useState } from "react";

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
            <Button buttonType={"btn-ghost"} url="contact-id">
              Explore More Projects
            </Button>
            {/* <div className="about-details-icon">
              <IconLink iconUrl="#">
                <FaFacebookF />
              </IconLink>
              <IconLink iconUrl="https://twitter.com/Denzox44">
                <FaTwitter />
              </IconLink>
              <IconLink iconUrl="https://www.linkedin.com/in/denzel-lanzaderas-47a9a5212/">
                <FaLinkedinIn />
              </IconLink>
              <IconLink iconUrl="https://github.com/Denzi0">
                <FaGithubAlt />
              </IconLink>
            </div> */}
          </div>

          <div className="about-details2">
            <div className="about-card">
              <p>Wordpress</p>
              <h3>JKC Real Estates</h3>
              <a href="" className="about-link">
                <span>View Live Site</span> <BsFillArrowRightCircleFill />
              </a>
            </div>
            <div className="about-card">
              <p>React and Laravel</p>
              <h3>De Oro Mediko</h3>
              <a href="" className="about-link">
                <span>View Live Site</span>
                <BsFillArrowRightCircleFill />
              </a>
            </div>
            <div className="about-card">
              <p>React and Laravel</p>
              <h3>BTA Ballina</h3>
              <a href="" className="about-link">
                <span>View Live Site</span>
                <BsFillArrowRightCircleFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
