import "./Button.css";

function Button({ text, buttonType, url }) {
  return (
    <a href={`${url}`} className={`btn ${buttonType}`}>
      {text}
    </a>
  );
}

export default Button;
