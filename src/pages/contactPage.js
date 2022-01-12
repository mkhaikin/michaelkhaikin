import React from "react";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";

const ContactPage = () => {
  return (
    <div className="container">
      <Header title={"Contact"} />
      <ContactUs />
    </div>
  );
};

export default ContactPage;
