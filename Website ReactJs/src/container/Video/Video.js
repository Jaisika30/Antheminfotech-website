import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ModalVideo from "react-modal-video";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

const Video = () => {
  // const [isOpen, setOpen] = useState(false);
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
      className="video-section section section-padding overlay-two"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/video-bg.webp)`,
      }}
    >
      <div className="container text-center">
        <div className="section-title color-light text-center">
          <h2 className="title"></h2>
        </div>
        <SectionTitle
          titleOption="color-light text-center"
          title="As a software service creative agency, we are dedicated to setting the standard of
          excellence in our industry."
        />

        <Link to={`/request-a-quote`}>
          <button
            className="play-btn icon video-popup"
            // onClick={() => setOpen(true)}
          >
            <i className="fas fa-play"></i>
          </button>
        </Link>
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="v4uJvQINGmk"
          onClose={() => setOpen(false)}
        /> */}
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

export default Video;
