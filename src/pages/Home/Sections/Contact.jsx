import "./Contact.css";
import image from "../../../assets/images/placeholder.png";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SubmitButton from "../../../components/SubmitButton";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
          alert("message not sent");
        }
      );
  };
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-col-1">
              <Input labelID="fname" inputType="text" inputName="full_name">
                Full name
              </Input>
              <Input labelID="email" inputType="email" inputName="email">
                Email
              </Input>
            </div>
            <TextArea
              labelName="Message"
              labelID="message"
              inputType="textarea"
              inputName="message"
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
