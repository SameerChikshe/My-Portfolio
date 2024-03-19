import React from "react";
import Content from "../components/Content";
import { contact } from "../data/contact";

const ContactMe = () => {
  return (
    <div className="contact_me">
      <Content
        data={contact}
        heading="Contact."
        className="contact_container"
      />
    </div>
  );
};

export default ContactMe;
