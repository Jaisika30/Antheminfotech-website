import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const AboutFour = ({ classOption }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  const [scale] = useState(1.04);
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
      className={`section section-padding-top about-section-padding-bottom-200 ${classOption}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-content-area mt-0 mb-md-10 mb-10">
              <SectionTitleTwo
                subTitle="Web design and digital marketing"
                title="We think strategy, UI/UX design, and software development"
              />

              <div className="row row-cols-sm-2 row-cols-auto mb-n6">
                <div className="col mb-6">
                  <div className="about-funfact">
                    <div className="number">
                      <VisibilitySensor
                        onChange={onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={didViewCountUp ? 50 : 0} />
                      </VisibilitySensor>
                      +
                    </div>
                    <h6 className="text">Satisfied Clients</h6>
                    <p>
                      {` We've empowered clients and businesses to grow and succeed
                      through enhanced digital presence and innovative
                      solutions.`}
                    </p>
                  </div>
                </div>
                <div className="col mb-6">
                  <div className="about-funfact">
                    <div className="number">
                      <VisibilitySensor
                        onChange={onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={didViewCountUp ? 120 : 0} />
                      </VisibilitySensor>
                      +
                    </div>
                    <h6 className="text">Successful Projects</h6>
                    <p>
                      Delivering customised digital solutions streamlining
                      operations and boosting client performance across various
                      industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-image-area about-shape-animation right-0 me-0">
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/about/about-1.webp"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="about-image js-tilt">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/about/about-2.webp"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/shape-animation/video-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
