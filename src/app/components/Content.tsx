"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextArrow from "../../images/NextArrow.svg";
import PreviousArrow from "../../images/PreviousArrow.svg";
import "../styles/content.scss";
import { useState } from "react";

const Content = () => {
  const [activeTab, setActiveTab] = useState("About");
  const data: any = [
    {
      section: "About",
      content:
        "Experienced UI/UX Designer passionate about creating intuitive and visually compelling digital experiences. Proficient in translating complex ideas into user-friendly interfaces, I specialize in crafting designs that seamlessly blend aesthetics with functionality. My skill set includes design thinking, wireframing, visual design, prototyping, and a strong proficiency in design tools",
    },
    {
      section: "Introduction",
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

  const handleCarouselChange = (index) => {
    setActiveTab(data[index].section);
  };

  return (
    <>
      <div className="page_container">
        <div className="category_container">
          {data &&
            data.length > 0 &&
            data.map(
              (
                item: { [x: string]: { content: any } },
                index: string | number
              ) => {
                return (
                  <div
                    key={index}
                    className={`category ${
                      activeTab === item.section ? "active" : ""
                    }`}
                  >
                    {item.section}
                  </div>
                );
              }
            )}
        </div>

        <Carousel
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <img
                onClick={clickHandler}
                className="previous"
                src={PreviousArrow.src}
                alt="Previous Slide"
              />
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelPrev) =>
            hasNext && (
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
          onChange={(index) => handleCarouselChange(index)}
        >
          {data &&
            data.length > 0 &&
            data.map(
              (
                item: { [x: string]: { content: any } },
                index: string | number
              ) => {
                return (
                  <div className="circular_container">
                    <div className="info">{item.content}</div>
                    <div className="rotating_container"></div>
                  </div>
                );
              }
            )}
        </Carousel>
      </div>
    </>
  );
};

export default Content;
