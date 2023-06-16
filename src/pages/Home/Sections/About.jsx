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
            <h2>Introduction</h2>
            <p className="about-more-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui
              in dolore similique corporis aperiam magnam, praesentium enim,
              omnis, reprehenderit eveniet nostrum necessitatibus. Doloribus
              omnis amet, eaque quaerat praesentium beatae ullam repudiandae
              illo iure aliquam magnam error molestiae labore nobis.
            </p>
          </div>
          <div className="box-container">
            <div className="box">
              <h5 className="box-number">1</h5>
              <p className="box-title">Front End Developer</p>
            </div>
            <div className="box">
              <h5 className="box-number">2</h5>
              <p className="box-title">Wordpress Developer</p>
            </div>
            <div className="box">
              <h5 className="box-number">3</h5>
              <p className="box-title">UI/UX</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
