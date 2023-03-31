import "./Button.css";

function Button({ text, buttonType }) {
  return <a className={`btn ${buttonType}`}>{text}</a>;
}

export default Button;
