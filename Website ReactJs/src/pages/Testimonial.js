import React from "react";

import SEO from "../components/SEO.jsx";
import Header from "../partials/header/Header.jsx";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb.js";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer.js";
import Footer from "../container/Footer/Footer.js";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Testimonial = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Testimonials"
        description="Read what our clients say about their experience with Anthem Infotech. Discover how our innovative solutions have helped businesses achieve success and drive growth."
        ogtitle="Anthem Infotech - Testimonials"
        ogdescription="Read what our clients say about their experience with Anthem Infotech. Discover how our innovative solutions have helped businesses achieve success and drive growth."
      />

      <Header />
      <Breadcrumb
        image="images/bg/testimonials.jpg"
        title="What Our Clients Say About Their Experience with Us"
        content="Home"
        contentTwo="Testimonials"
      />
      <TestimonialContainer classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Testimonial;
