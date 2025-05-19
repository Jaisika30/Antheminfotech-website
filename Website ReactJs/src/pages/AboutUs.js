import React from "react";

import SEO from "../components/SEO.jsx";
import Header from "../partials/header/Header.jsx";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb.js";
import AboutFour from "../container/About/AboutFour.js";
import Video from "../container/Video/Video.js";
import AboutFive from "../container/About/AboutFive.js";
import IntroTwo from "../container/IntroSlider/IntroTwo.js";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer.js";
import CallToActionTwo from "../container/CallToAction/CallToActionTwo.js";
import Footer from "../container/Footer/Footer.js";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AboutUs = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - About Us"
        description="Learn more about Anthem Infotech, a leading provider of tech solutions. Discover our mission, values, and commitment to innovation and client success."
        ogtitle="Anthem Infotech - About Us"
        ogdescription="Learn more about Anthem Infotech, a leading provider of tech solutions. Discover our mission, values, and commitment to innovation and client success."
      />

      <Header />
      {/* <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="We are an agency located in India (Chandigarh Region) since 2011"
        content="Home"
        contentTwo="About Us"
      /> */}
      <IntroTwo />
      <AboutFour classOption="bg-white" />
      <Video />
      <AboutFive classOption="bg-white" />
      <TestimonialContainer classOption="background-1" />
      <CallToActionTwo classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default AboutUs;
