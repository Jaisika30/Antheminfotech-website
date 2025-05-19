import React, { useState, useEffect } from "react";

function Brochure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".ftco-animate");
      elements.forEach((element) => {
        const bounding = element.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          if (!element.classList.contains("ftco-animated")) {
            element.classList.add("ftco-animated");
            element.classList.add("fadeIn");
            element.classList.add("fadeInRight");
            element.classList.add("fadeInLeft");
            element.classList.add("fadeInUp");
          }
        }
      });
    };

    // Initial call to handle scroll in case elements are already in view
    handleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {" "}
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center ">
            <div className="col-md-9 ftco-animate text-center">
              <h1 className="mb-2 bread">Brochure</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <iframe
            title="Brochure"
            src="https://antheminfotech.com/Brochure/mobile/index.html"
            width="100%"
            height="600px"
          />
        </div>
      </div>
    </div>
  );
}

export default Brochure;
