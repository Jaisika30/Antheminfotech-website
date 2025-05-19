import React from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import { Link } from "react-router-dom";

const CallToActionTwo = ({ classOption }) => {
  return (
    <div className={`cta-section section section-padding-250 ${classOption}`}>
      <div className="container text-center icon-up-down-animation">
        <SectionTitle
          headingOption="fz-34"
          title="Have a Project in Mind? Let’s Bring It to Life!"
          subTitle="Connect with us to develop tailored solutions that achieve your goals and propel your success.
            Let’s turn your vision into reality."
        />
        <Link
          className="btn btn btn-bottom"
          to={process.env.PUBLIC_URL + "/contact-us"}
          data-aos="fade-up"
          data-aos-delay="300"
          data-hover="Contact Us"
          style={{ background: "#0e6497", zIndex: 100000 }}
        >
          Contact Us
        </Link>

        <div className="shape shape-1">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-1.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-2">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-2.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-3">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-3.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-4">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-4.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-5">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-5.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-6">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-6.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-7">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-7.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-8">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-8.png"}
              alt=""
            />
          </span>
        </div>
        <div className="shape shape-9">
          <span>
            <img
              src={process.env.PUBLIC_URL + "images/icon-animation/icon-9.png"}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CallToActionTwo;
