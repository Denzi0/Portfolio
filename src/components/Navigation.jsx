import { Link } from "react-scroll";
import "./Navigation.css";
import Button from "./Button";
function Navigation() {
  return (
    <>
      <div className="navigation-section">
        <div className="container navigation-container">
          <a className="navigation-logo" href="#">
            DenzeL.
          </a>
          <div className="navigation-links-container">
            <ul className="navigation-links">
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navigation-item"
              >
                About
              </Link>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navigation-item"
              >
                Projects
              </Link>
              <Link
                to="#"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navigation-item"
              >
                Contact
              </Link>
            </ul>
          </div>
          <Button
            url="tel:09262133932"
            text="Let's Talk !"
            buttonType={"btn-fill"}
          />
        </div>
      </div>
    </>
  );
}

export default Navigation;
