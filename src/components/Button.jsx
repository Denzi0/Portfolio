import "./Button.css";
import { Link } from "react-scroll";
function Button({ text, buttonType, url, children }) {
  return (
    <Link
      spy={true}
      smooth={true}
      offset={-70}
      duration={1500}
      to={`${url}`}
      className={`btn ${buttonType}`}
    >
      {children}
    </Link>
  );
}

export default Button;
