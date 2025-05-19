import React from "react";

import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import GoogleMap from "../container/Map/GoogleMap";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import CareerFromContainer from "../container/CareerFromContainer/CareerFromContainer.js";

const Career = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Career"
        description="Explore exciting career opportunities at Anthem Infotech. Join our innovative team and contribute to cutting-edge projects. Discover your next role today!"
        ogtitle="Anthem Infotech - Career"
        ogdescription="Explore exciting career opportunities at Anthem Infotech. Join our innovative team and contribute to cutting-edge projects. Discover your next role today!"
      />

      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="Explore Career Opportunities with Anthem Infotech"
        content="Home"
        contentTwo="Career"
      />
      <CareerFromContainer classOption="background-7" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Career;
