import bvm from "../../images/BVM.jpeg"
import ssc from "../../images/ssc.jpg"
import sggs from "../../images/sggs.jpg"
import thyssenkrupp from "../../images/thyssenkrupp.png"
import monsoonfish from "../../images/monsoonfish.jpg"
import css from "../../images/css.png"
import html from "../../images/html.svg"
import js from "../../images/js.png"
import ts from "../../images/ts.png"
import react from "../../images/react.png"
import nextjs from "../../images/next.png"
export type AboutData = {
  section: string;
  text?: string;
  content: OrganisationDetails[];
};

export type OrganisationDetails = {
  logo: any;
  company?: string;
  role: string;
  span?: string;
};

export const about: AboutData[] = [
  {
    section: "Introduction",
    text: "I am a skilled frontend developer with 3.5 years of experience, specializing in React, JavaScript, HTML, CSS, TypeScript, and Next.js. My expertise lies in crafting visually impressive and SEO-optimized web pages with meticulous precision. I've had the privilege of working with leading clients such as BrighlifeCare, contributing to major e-commerce platforms like HealthKart and MuscleBlaze. Additionally, I played a key role in the development of a sophisticated chat support application for NPAV using React, Next.js, and Material-UI. My passion for great user experiences and web development drives me to keep pushing the limits.",
    content: [],
  },
  {
    section: "Education",
    content: [
      {
        logo: sggs,
        company: "SGGS Institute of Engineering & Technology, Nanded",
        role: "B.Tech",
        span: "2016 - 2020",
      },
      {
        logo: ssc,
        company: "Shri Shivaji College, Parbhani",
        role: "HSC",
        span: "2016",
      },
      {
        logo: bvm,
        company: "Bal Vidya Mandir, Parbhani",
        role: "SSC",
        span: "2014",
      },
    ],
  },

  {
    section: "Experience",
    content: [
      {
        logo: monsoonfish,
        company: "Monsoonfish",
        role: "Front-end Developer",
        span: "Jan 2023 - Present",
      },
      {
        logo: thyssenkrupp,
        company: "ThyssenKrupp",
        role: "Support Engineer",
        span: "Jan 2021 - Dec 2022",
      },
    ],
  },

  {
    section: "Skills",
    content: [
      {
        logo: react,
        role: "React.js",
      },
      {
        logo: nextjs,
        role: "Next.js",
      },
      {
        logo: js,
        role: "JavaScript",
      },
      {
        logo: ts,
        role: "TypeScript",
      },
      {
        logo: html,
        role: "HTML",
      },
      {
        logo: css,
        role: "CSS",
      },
    ],
  },
];
