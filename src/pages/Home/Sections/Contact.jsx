import "./Contact.css";
import image from "../../../assets/images/placeholder.png";

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container container">
        <div className="contact-details">
          <h1 className="contact-heading">
            Let's <span className="transparent-text">Talk</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quia
            quod magni amet delectus reprehenderit commodi numquam facilis
            soluta sapiente.
          </p>
        </div>
        <div className="contact-form">
          <div className="contact-placeholder-image">
            <img src={image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
