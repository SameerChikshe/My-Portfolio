"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextArrow from "../../images/NextArrow.svg";
import PreviousArrow from "../../images/PreviousArrow.svg";
import "../styles/content.scss";
import { useState } from "react";
import Image from "next/image";

interface Props {
  data: any;
  heading: string;
  classname: string;
}

const ContentWork = ({ data, heading }: Props) => {
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
              <Image
                onClick={clickHandler}
                className="previous"
                src={PreviousArrow.src}
                alt="Previous Slide"
                width={68}
                height={68}
              />
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelPrev) =>
            hasNext && (
              <Image
                onClick={clickHandler}
                className="next"
                src={NextArrow.src}
                alt="Next Slide"
                width={68}
                height={68}
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
                <div key={index} className="circular_container">
                  {item.content &&
                    item.content.length > 0 &&
                    item.content.map((i: any, j: number) => {
                      return (
                        <a
                          className="project_image_container"
                          key={j}
                          href={i.url}
                          target="_blank"
                        >
                          <Image
                            className="project_image"
                            src={i.logo.src}
                            alt={i.company}
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </a>
                      );
                    })}
                  <div className="rotating_container"></div>
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
};

export default ContentWork;
