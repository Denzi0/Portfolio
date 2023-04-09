import "./About.css";
import image from "../../../assets/images/placeholder.png";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about-section" id="about-id">
        <div className="container about-container">
          <div className="about-details">
            <p className="about-details-sub">My Web Development Journey</p>
            <h2>
              Web <span className="transparent-text">Dev</span> & <br />
              Design <span className="transparent-text">Expertise</span>
            </h2>
            <p className="about-more-details">
              I'm an experienced and dedicated web deverloper/designer with a
              passion for creating beautiful, responsive websites. With over 1/2
              years of experience in the industry, I specialize in creating
              user-friendly, visually appealing websites from start to finish.
            </p>
            <div className="about-details-icon">
              <FaGithubAlt />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>
          <div className="about-image">
            <img src={image}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
