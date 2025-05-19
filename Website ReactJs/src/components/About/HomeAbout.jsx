import { useState, useEffect, useRef } from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';
import { Link } from "react-router-dom";

const HomeAbout = ({ classOption }) => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    const [didViewCountUp, setDidViewCountUp] = useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])

    return (
        <div className={`section section-padding-t90 section-padding-bottom ${classOption}`}>
            <div className="container">

                <SectionTitle
                    title="We provide custom software solutions that drive business growth through innovation"
                    subTitle="Delivering innovative, custom software technology solutions that empower businesses to thrive
                                and stay ahead in a rapidly evolving digital landscape."
                />

                <div className="row">


                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.REACT_APP_PUBLIC_URL + "/images/about/home-one-about/home_agency_about_1.jpg"} alt="home_agency_about" loading="lazy" />
                                </Tilt>
                            </div>

                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.REACT_APP_PUBLIC_URL + "/images/about/home-one-about/home_agency_about_2.jpg"} alt="home_agency_about" loading="lazy" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.REACT_APP_PUBLIC_URL + "/images/shape-animation/about-shape-1.png"} alt="about-shape" loading="lazy" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo
                                subTitle="Trust, Commitment and Delivery"
                                title="We automate manual business processes"
                            />
                            <div className="row mb-n6 mt-5 text-lg-start text-center">
                                <div className="col-md-5 col-sm-6 col-12 mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                            <VisibilitySensor
                                                onChange={onVisibilityChange}
                                                offset={{ top: 10 }}
                                                delayedCall
                                            >
                                                <CountUp end={didViewCountUp ? 50 : 0} />
                                            </VisibilitySensor>+
                                        </div>
                                        <h6 className="text">Happy Clients</h6>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6 col-12 mb-6">
                                    <div className="about-funfact">
                                        <div className="number">
                                            <VisibilitySensor
                                                onChange={onVisibilityChange}
                                                offset={{ top: 10 }}
                                                delayedCall
                                            >
                                                <CountUp end={didViewCountUp ? 120 : 0} />
                                            </VisibilitySensor>+
                                        </div>
                                        <h6 className="text">Completed projects</h6>
                                    </div>
                                </div>
                            </div>

                            <p className="justify-content">At Anthem Infotech, we focus on building trust through unwavering commitment and seamless delivery. Automating manual business processes empowers organisations to streamline operations, boost efficiency, and stay ahead in a rapidly evolving digital landscape.</p>

                            {/* <Link className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/about"}>About Us</Link> */}

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAbout;
