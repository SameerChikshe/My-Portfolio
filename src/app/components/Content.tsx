"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextArrow from "../../images/NextArrow.svg";
import PreviousArrow from "../../images/PreviousArrow.svg";
import "../styles/content.scss";

const Content = () => {
  const data: any = [
    {
      section: "About",
      content:
        "Experienced UI/UX Designer passionate about creating intuitive and visually compelling digital experiences. Proficient in translating complex ideas into user-friendly interfaces, I specialize in crafting designs that seamlessly blend aesthetics with functionality. My skill set includes design thinking, wireframing, visual design, prototyping, and a strong proficiency in design tools",
    },
    {
      section: "Education",
      content:
        "Experienced UI/UX Designer passionate about creating intuitive and visually compelling digital experiences. Proficient in translating complex ideas into user-friendly interfaces, I specialize in crafting designs that seamlessly blend aesthetics with functionality. My skill set includes design thinking, wireframing, visual design, prototyping, and a strong proficiency in design tools",
      logo: [
        "../../public/BVM.jpeg",
        "../../public/ssc.jpg",
        "../../public/sggs.jpg",
      ],
    },
    {
      section: "Skills",
      content:
        "Experienced UI/UX Designer passionate about creating intuitive and visually compelling digital experiences. Proficient in translating complex ideas into user-friendly interfaces, I specialize in crafting designs that seamlessly blend aesthetics with functionality. My skill set includes design thinking, wireframing, visual design, prototyping, and a strong proficiency in design tools",
    },
    {
      section: "Experience",
      content:
        "Experienced UI/UX Designer passionate about creating intuitive and visually compelling digital experiences. Proficient in translating complex ideas into user-friendly interfaces, I specialize in crafting designs that seamlessly blend aesthetics with functionality. My skill set includes design thinking, wireframing, visual design, prototyping, and a strong proficiency in design tools",
    },
  ];

  return (
    <>
      <div className="page_container">
        <div className="category_container">
          <div className="category">About.</div>
          <div className="category active">Introduction</div>
          <div className="category">Experience</div>
          <div className="category">Skills</div>
          <div className="category">Education</div>
        </div>
        <div className="circular_container">
          <div className="info">
            <Carousel
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <img
                    onClick={clickHandler}
                    className="previous"
                    src={PreviousArrow.src}
                  />
                )
              }
              renderArrowNext={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <img
                    onClick={clickHandler}
                    className="next"
                    src={NextArrow.src}
                    alt="Next Slide"
                  />
                )
              }
              showIndicators={false}
              showStatus={false}
              autoPlay={false}
            >
              {data &&
                data.length > 0 &&
                data.map(
                  (
                    item: { [x: string]: { content: any } },
                    index: string | number
                  ) => {
                    return <div>{item.content}</div>;
                  }
                )}
            </Carousel>
          </div>
          <div className="rotating_container"></div>
        </div>
      </div>
    </>
  );
};

export default Content;
