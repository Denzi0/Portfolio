import "./Contact.css";
import image from "../../../assets/images/placeholder.png";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SubmitButton from "../../../components/SubmitButton";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDoneSubmit, setDoneSubmit] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("message sent");
        },
        (error) => {
          console.log("message not sent");
        }
      )
      .finally(() => {
        setFormData({
          full_name: "",
          email: "",
          message: "",
        });
        setIsSubmitting(false);
        setIsLoading(false);
        setDoneSubmit(true);
      });
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
          {!isDoneSubmit ? (
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-col-1">
                <Input
                  labelID="fname"
                  inputType="text"
                  inputName="full_name"
                  onChange={handleChange}
                  inputValue={formData.full_name}
                >
                  Full name
                </Input>
                <Input
                  labelID="email"
                  inputType="email"
                  inputName="email"
                  onChange={handleChange}
                  inputValue={formData.email}
                >
                  Email
                </Input>
              </div>
              <TextArea
                labelName="Message"
                labelID="message"
                inputType="textarea"
                inputName="message"
                onChange={handleChange}
                inputValue={formData.message}
              />
              <SubmitButton
                buttonClass="btn btn-submit"
                disabled={isSubmitting}
              >
                {isLoading ? "Loading..." : "Submit Message"}
              </SubmitButton>
            </form>
          ) : (
            <p className="thankyou-text">
              Thank you I will be in touch with you soon !
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
