import "./Button.css";
import { Link } from "react-scroll";
function Button({ text, buttonType, url, children }) {
  const isExternalLink = url.startsWith("/src");

  if (isExternalLink) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn ${buttonType}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={1500}
        to={`${url}`}
        className={`btn ${buttonType}`}
        href={url}
      >
        {children}
      </Link>
    );
  }
}

export default Button;
