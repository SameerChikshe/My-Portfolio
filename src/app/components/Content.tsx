"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextArrow from "../../images/NextArrow.svg";
import PreviousArrow from "../../images/PreviousArrow.svg";
import "../styles/content.scss";
import { useState } from "react";

interface Props {
  data: any;
  heading: string;
  classname: string;
}

const Content = ({ data, heading, classname }: Props) => {
  const [activeTab, setActiveTab] = useState(data[0].section);

  const handleCarouselChange = (index: number) => {
    setActiveTab(data[index].section);
  };

  return (
    <>
      <div className="page_container">
        <div className="category_container">
          <div className="category heading">{heading}</div>
          {data &&
            data.length > 0 &&
            data.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`category
                     ${activeTab === item.section ? "active" : ""}`}
                >
                  {item.section}
                </div>
              );
            })}
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
          interval={25000}
          onChange={(index) => handleCarouselChange(index)}
        >
          {data &&
            data.length > 0 &&
            data.map((item: any, index: number) => {
              return (
                <div className="circular_container">
                  <div className={index === 3 ? "skills_content" : "content"}>
                    {item.text && <div className="text">{item.text}</div>}
                    {item.content &&
                      item.content.length > 0 &&
                      item.content.map((i: any, j: number) => {
                        return (
                          <div className={index === 3 ? classname : "info"}>
                            <div>
                              <img className="logo" src={i.logo} />
                            </div>
                            <div className="company">
                              {i.company && (
                                <div className="name">{i.company}</div>
                              )}
                              {i.role && <div className="role">{i.role}</div>}
                              {i.span && <div className="span">[{i.span}]</div>}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                  <div className="rotating_container"></div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
};

export default Content;
