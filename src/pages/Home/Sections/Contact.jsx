import "./Contact.css";
import image from "../../../assets/images/placeholder.png";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SubmitButton from "../../../components/SubmitButton";
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
              <Input labelID="fname" inputType="text">
                Full name
              </Input>
              <Input labelID="email" inputType="email">
                Email
              </Input>
            </div>
            <TextArea
              labelName="Message"
              labelID="message"
              inputType="textarea"
            />
            <SubmitButton buttonClass="btn btn-submit">
              Submit Message
            </SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
