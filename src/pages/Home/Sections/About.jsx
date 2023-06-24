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
import Card from "../../../components/Card";

function About() {
  const [isCardClick, setIsCardClick] = useState(false);
  function handleSidebar() {
    setIsCardClick(!isCardClick);
  }

  return (
    <>
      <div className="about-section" id="about-id">
        <div className="container about-container">
          <div className="about-details">
            <h2>Introduction.</h2>
            <p className="about-more-details">
              I'm Denzel Lanzaderas, a passionate Web Developer dedicated to
              continuous learning and growth. With expertise in
              Wordpress,React,Laravel and other web technology, I thrive at the
              intersection of creativity and technology. I enjoy tackling
              complex challenges and crafting innovative solutions.
              Collaboration and problem-solving are at the heart of my approach.
              Let's connect and explore opportunities to make a meaningful
              impact together.
            </p>
          </div>
          <div className="box-container">
            <div className="box">
              <h5 className="box-number box-1">1.</h5>
              <p className="box-title box-title-1">Front End Developer</p>
            </div>
            <div className="box">
              <h5 className="box-number box-2">2.</h5>
              <p className="box-title box-title-2">Wordpress Developer</p>
            </div>
            <div className="box">
              <h5 className="box-number box-3">3.</h5>
              <p className="box-title box-title-3">UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
