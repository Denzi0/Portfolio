import "./Contact.css";
import image from "../../../assets/images/placeholder.png";

function Contact() {
  return (
    <div className="contact-section" id="contact-id">
      <div className="contact-container flex-container container">
        <div className="contact-details">
          <h1 className="contact-heading">
            Let's <span className="transparent-text">Talk</span>.
          </h1>
          <p>
            I'm available to discuss freelance projects and other opportunities.
            Please don't hesitate to reach out with any questions or inquiries
            you may have. I look forward to hearing from you and discussing how
            I can be of service
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
