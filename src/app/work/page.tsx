import React from "react";
import { work } from "../data/work";
import ContentWork from "../components/ContentWork";

const Work = () => {
  return (
    <div className="work">
      <ContentWork data={work} heading="Work." classname="skills" />
    </div>
  );
};

export default Work;
