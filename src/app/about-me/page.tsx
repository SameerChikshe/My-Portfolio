import React from "react";
import Content from "../components/Content";
import { about } from "../data/about";

const AboutMe = () => {
  return (
    <div className="about_me">
      <Content data={about} heading="About." className="about_container" />
    </div>
  );
};

export default AboutMe;
