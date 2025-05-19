import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./Industries.css";

export const Header = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/img/Screenshot_34.png",
      title: "TRUST, COMMITMENT & DELIVERY1",
      description: "Description 1",
    },
    {
      image: "/img/Screenshot_35.png",
      title: "TRUST, COMMITMENT & DELIVERY2",
      description: "Description 2",
    },
    {
      image: "/img/Screenshot_38.png",
      title: "TRUST, COMMITMENT & DELIVERY3",
      description: "Description 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const headerContentAnimation = useSpring({
    from: {
      transform: "translateZ(-100px) rotateX(45deg)",
      opacity: 0,
    },
    to: {
      transform: "translateZ(0px) rotateX(0deg)",
      opacity: 1,
    },
    delay: 500,
  });

  const sliderAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <animated.header id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <animated.div
              style={{
                ...sliderAnimation,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentSlide ? "block" : "none",
                    flex: "1",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    zIndex: "0",
                    marginRight: "40px",
                  }}
                >
                  <h1 className="image-title">{slide.title}</h1>{" "}
                  <img
                    src={slide.image}
                    alt={`Slider${index + 1}`}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "90%",
                    }}
                  />
                </div>
              ))}
            </animated.div>
          </div>
        </div>
      </div>
    </animated.header>
  );
};
