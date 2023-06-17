import { Link } from "react-scroll";
import "./Navigation.css";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import resume from "../../src/assets/files/Resume.pdf";
import { HiMenuAlt3 } from "react-icons/hi";

function Navigation() {
  const [isMobileMenuClose, setMobileMenuClose] = useState(true);
  function handleClickMobile() {
    setMobileMenuClose(!isMobileMenuClose);
  }
  return (
    <>
      <div className="navigation-section fixed">
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
            <ul
              className={
                isMobileMenuClose ? "navigation-links" : "navigation-links open"
              }
            >
              <Link
                to="banner-id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                activeClass="active"
                className="navigation-item"
              >
                Home
              </Link>
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
                to="project-id"
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
          <div className="mobile-menu" onClick={handleClickMobile}>
            <HiMenuAlt3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
