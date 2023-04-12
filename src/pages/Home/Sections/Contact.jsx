import "./Contact.css";
import image from "../../../assets/images/placeholder.png";

function Contact() {
  return (
    <div className="contact-section" id="contact-id">
      <div className="contact-container flex-container-vertical container">
        <div className="contact-details">
          <h2 className="contact-heading">
            Let's <span className="transparent-text">Talk</span>.
          </h2>
          <p>
            I'm available to discuss freelance projects and other opportunities.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-col-1">
              <div className="form-control">
                <label id="fname">
                  <small>Full name</small>
                </label>
                <input type="text" value="" id="fname" />
              </div>
              <div className="form-control">
                <label id="email">
                  <small>Email</small>
                </label>
                <input type="email" value="" id="email" />
              </div>
            </div>
            <div className="form-control">
              <label id="message">
                <small>Message</small>
              </label>
              <textarea value="" id="message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
