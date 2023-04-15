import { Link } from "react-scroll";
import "./Navigation.css";
import Button from "./Button";
import React, { useEffect, useState } from "react";

function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  return (
    <>
      <div className="navigation-section">
        <div
          className={`container navigation-container ${
            scrollPosition > 300 ? "fixed" : ""
          }`}
        >
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
          <Button url="tel:09262133932" buttonType={"btn-fill"}>
            Let's Talk !
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
