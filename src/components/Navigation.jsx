import { Link } from "react-scroll";
import "./Navigation.css";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import resume from "../../src/assets/files/Resume.pdf";

function Navigation() {
  return (
    <>
      <div className="navigation-section">
        <div className="navigation-container">
          <Link
            to="banner-id"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            activeClass="active"
            className="navigation-logo"
          >
            DenzeL.
          </Link>
          <div className="navigation-links-container">
            <ul className="navigation-links">
              <Link
                to="about-id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                activeClass="active"
                className="navigation-item"
              >
                About
              </Link>
              <Link
                to="projects-id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                activeClass="active"
                className="navigation-item"
              >
                Projects
              </Link>
              <Link
                to="contact-id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                activeClass="active"
                className="navigation-item"
              >
                Contact
              </Link>
            </ul>
          </div>
          <Button url={resume} buttonType={"btn-fill"}>
            View Resume
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
