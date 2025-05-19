import { useState, useEffect, useRef } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';



const HomeSuccess = ({ classOption }) => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className={`section section-padding-top success-section-padding-bottom-180 ${classOption}`}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="about-image-area right-0 skill-image-area">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "../images/skill/skill-1.jpg"} alt="skill-1" loading="lazy" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "../images/skill/skill-2.jpg"} alt="skill-2" loading="lazy" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "../images/shape-animation/video-shape-1.png"} alt="video-shape-1" loading="lazy" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-5" data-aos="fade-up" data-aos-delay="300">
                        <div className="success-content mt-lg-0 mt-md-50 mt-sm-50 mt-40">
                            <SectionTitleTwo
                                subTitle="Your success drives our success."
                                title="Web Development, Generative AI, Data ETL, &amp; Presentation are our strengths"
                            />


                            <div className="progress-bar--one">
                                <div className="progress-charts">
                                    <h6 className="heading ">Software Development <span className="float-end">99%</span></h6>
                                    <div className="single-progress">

                                        <ProgressBar data-aos="fade-right" aria-label="Software Development" data-aos-delay="100" data-aos-duration="450" className="gradient-1" now="93" />
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Generative AI <span className="float-end">92%</span></h6>
                                    <div className="single-progress">
                                        <ProgressBar data-aos="fade-right" aria-label="Generative AI" data-aos-delay="100" data-aos-duration="450" className="gradient-2" now="85" />
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Web Design <span className="float-end">99%</span></h6>
                                    <div className="single-progress">
                                        <ProgressBar data-aos="fade-right" aria-label="Web Design" data-aos-delay="100" data-aos-duration="450" className="gradient-3" now="93" />
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Database API Development <span className="float-end">99%</span></h6>
                                    <div className="single-progress">
                                        <ProgressBar data-aos="fade-right" aria-label="Database API Development" data-aos-delay="100" data-aos-duration="450" className="gradient-4" now="93" />
                                    </div>
                                </div>

                                <div className="progress-charts">
                                    <h6 className="heading ">Mobile Applications <span className="float-end">90%</span></h6>
                                    <div className="single-progress">
                                        <ProgressBar data-aos="fade-right" aria-label="Mobile Applications" data-aos-delay="100" data-aos-duration="450" className="gradient-1" now="80" />
                                    </div>
                                </div>

                                <div className="progress-charts ">
                                    <h6 className="heading ">Data ETL & Dashboards <span className="float-end">97%</span></h6>
                                    <div className="single-progress">
                                        <ProgressBar aria-label="Data ETL & Dashboards" data-aos="fade-right" data-aos-delay="100" data-aos-duration="450" className="gradient-2" now="90" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default HomeSuccess;
