import "./Projects.css";
import webDesign1 from "../../../assets/images/web-design.jpg";
import webDesign2 from "../../../assets/images/web-design.jpg";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "Web Design",
      // content: "This is tab 1 content",
      webDesign: [
        {
          image: webDesign1,
          content: "FUR CARE",
          description: "lorem ipsum dolor sit amet, consectetur",
        },
        {
          image: webDesign2,
          content: "BTA",
          description: "lorem ipsum dolor sit amet, consectetur",
        },
        {
          image: webDesign2,
          content: "STAKE",
          description: "lorem ipsum dolor sit amet, consectetur",
        },
        {
          image: webDesign1,
          content: "lorem2 sdfs dfsdf sdf",
          description: "lorem ipsum dolor sit amet, consectetur",
        },
        {
          image: webDesign1,
          content: "lorem2 sdfs dfsdf sdf",
          description: "lorem ipsum dolor sit amet, consectetur",
        },
      ],
    },
    {
      id: 2,
      title: "Live Web Sites",
      content: "This is tab 2 content",
    },
    {
      id: 3,
      title: "Mobile App Design",
      content: "This is tab 3 content",
    },
  ];
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };
  const customeSlider = useRef();

  // setting slider configurations
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <div className="projects-section container" id="projects-id">
      <div className="projects-details">
        <a className="projects-arrow-left" onClick={next}>
          <FaChevronLeft />
        </a>
        <a className="projects-arrow-right" onClick={previous}>
          <FaChevronRight />
        </a>
      </div>
      <div className="projects-content">
        {tabs.map((tab, index) => (
          <div key={index} className={index === activeIndex ? "active" : ""}>
            {tab.content}
            {tab.webDesign ? (
              <div className="project-images">
                {/* <img src={webDesign1} alt="" /> */}
                <Slider {...settings} ref={customeSlider}>
                  {tab.webDesign.map((webDesign, index) => (
                    <div>
                      <div key={index} className="project-image">
                        <img src={webDesign.image} alt="" />
                      </div>
                      <div className="project-description">
                        <h3>{webDesign.content}</h3>
                        <p>{webDesign.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <p>{tab.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
