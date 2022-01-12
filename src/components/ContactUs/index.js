import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FormContainer, FormWrapper } from "./ContactUsElems";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1t8j66",
        "template_648dyds",
        form.current,
        "user_24YLgkQPcBo4LvjtWbL6k"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your email has been sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <FormContainer>
      <form ref={form} onSubmit={sendEmail}>
        <FormWrapper>
          <label>Name</label>
          <input type="text" name="to_name" required />
          <label>Email</label>
          <input type="email" name="from_email" required />
          <label>Message</label>
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
        </FormWrapper>
      </form>
    </FormContainer>
  );
};
export default ContactUs;
