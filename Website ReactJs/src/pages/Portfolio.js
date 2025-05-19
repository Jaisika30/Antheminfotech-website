import React from "react";

import SEO from "../components/SEO.jsx";
import Header from "../partials/header/Header.jsx";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb.js";
import WorkContainer from "../container/Work/WorkContainer.js";
import Footer from "../container/Footer/Footer.js";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Portfolio = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Portfolio"
        description="Explore Anthem Infotech's portfolio to discover our recent success stories and innovative solutions. See how we’ve helped businesses across industries achieve growth and transformation."
        ogtitle="Anthem Infotech - Portfolio"
        ogdescription="Explore Anthem Infotech's portfolio to discover our recent success stories and innovative solutions. See how we’ve helped businesses across industries achieve growth and transformation."
      />

      <Header />
      <Breadcrumb
        image="images/bg/portfoliobg.webp"
        title="A Glimpse Into Our Recent <span class='text-color-span'>Success Stories</span> and <span class='text-color-span'>Innovative Solutions</span>"
        content="Home"
        contentTwo="Portfolio"
      />
      <WorkContainer classOption="bg-white" />
      {/* <CallToAction />
      <AboutFive />
      <BrandContainer classOption="section-padding-bottom" />
      <Faq /> */}
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Portfolio;
