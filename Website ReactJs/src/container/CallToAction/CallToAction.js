import { useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import { Link } from "react-router-dom";
import Parallax from "parallax-js";

const CallToAction = ({ classOption }) => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div
      className={`section section-bg-image section-padding-t110-b120 newsletter-section overlay-two ${classOption}`}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/images/bg/newsletter.jpg)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="cta-content text-center">
              <SectionTitle
                titleOption="color-light text-center mb-0"
                title="Let’s find out how to work together"
                subTitle="<p class='text-white'>Ready to start your project? The contact information collected through
                                this form will only be used to send a response to your inquiry.</p>"
              />
              <Link
                to={process.env.PUBLIC_URL + "/request-a-quote"}
                className="btn btn-bottom mt-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-hover="Get Started"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape shape-1" id="scene" ref={sceneEl}>
        <span data-depth="1">
          <img
            src={
              process.env.REACT_APP_PUBLIC_URL +
              "/images/shape-animation/newsletter-shape.png"
            }
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default CallToAction;
