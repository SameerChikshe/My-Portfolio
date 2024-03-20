import React from "react";
import "../styles/contact.scss";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.svg";
import phone from "../../images/phone.svg";
import mail from "../../images/mail.svg";
import line from "../../images/line.svg";

const ContactMe = () => {
  return (
    <div className="page_container">
      <div className="category_container">
        <div className="heading">Contact.</div>
        <div className="subheading">Contact Details</div>
      </div>

      <div className="circular_container">
        <div className="types">
          <div className="logo">
            <img src={phone.src} alt="phone" title="phone" />
          </div>
          <div className="content">+91 7020346056</div>
        </div>

        <div>
          <img src={line.src} alt="line" title="line" />
        </div>

        <div className="types">
          <div className="logo">
            <img src={mail.src} alt="mail" title="mail" />
          </div>
          <div className="content">sameerchikshe.1@gmail.com</div>
        </div>

        <div>
          <img src={line.src} />
        </div>

        <a
          className="types"
          href="https://www.linkedin.com/in/sameer-chikshe-913127178/"
          target="_blank"
        >
          <div className="logo">
            <img src={linkedin.src} alt="linkedin" title="linkedin" />
          </div>
          <div className="content">linkedin.com/in/sameer-chikshe</div>
        </a>

        <div className="line">
          <img src={line.src} />
        </div>

        <a
          className="types"
          href="https://github.com/SameerChikshe"
          target="_blank"
        >
          <div className="logo">
            <img src={github.src} alt="github" title="github" />
          </div>
          <div className="content">github.com/SameerChikshe</div>
        </a>

        <div className="rotating_container"></div>
      </div>
    </div>
  );
};

export default ContactMe;
