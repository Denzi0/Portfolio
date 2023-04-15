import "./About.css";
import image from "../../../assets/images/placeholder2.webp";
import {
  FaGithubAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function About() {
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
              <FaGithubAlt />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
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
              <div className="card">
                <p>Lived Sites</p>
                <p className="number">10</p>
              </div>
              <div className="card">
                <p>Projects</p>
                <p className="number">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
