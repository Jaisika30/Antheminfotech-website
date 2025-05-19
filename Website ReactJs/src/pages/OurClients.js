import React from "react";

// Directly import the components without lazy loading
import SEO from "../components/SEO.jsx";
import Header from "../partials/header/Header.jsx";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb.js";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer.js";
import Footer from "../container/Footer/Footer.js";
import ScrollToTop from "../components/ScrollToTop.jsx";
import BrandContainer from "../container/Brand/BrandContainer.js";

const OurClients = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Our Clients"
        description="Anthem Infotech is trusted by leading brands across various industries. Our clients benefit from innovative technology solutions that drive business growth and transformation."
        ogtitle="Anthem Infotech - Our Clients"
        ogdescription="Anthem Infotech is trusted by leading brands across various industries. Our clients benefit from innovative technology solutions that drive business growth and transformation."
      />

      <Header />
      <Breadcrumb
        image="images/bg/clients.webp"
        title="Trusted by Leading Brands Across Industries"
        content="Home"
        contentTwo="Our Clients"
      />
      <BrandContainer classOption="section-padding bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default OurClients;
