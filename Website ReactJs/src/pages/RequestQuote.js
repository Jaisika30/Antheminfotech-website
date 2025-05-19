import React from "react";

import SEO from "../components/SEO.jsx";
import Header from "../partials/header/Header.jsx";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb.js";
import Footer from "../container/Footer/Footer.js";
import ScrollToTop from "../components/ScrollToTop.jsx";
import RequestQuoteContainer from "../container/RequestQuoteContainer/RequestQuoteContainer.js";

const RequestQuote = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Request A Quote"
        description="Get a personalized quote for your project needs. Anthem Infotech offers tailored solutions for businesses of all sizes. Reach out to us today for a quote and take the first step towards growth."
        ogtitle="Anthem Infotech - Request A Quote"
        ogdescription="Get a personalized quote for your project needs. Anthem Infotech offers tailored solutions for businesses of all sizes. Reach out to us today for a quote and take the first step towards growth."
      />

      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-three.jpg"
        title="Request A Quote"
        content="Home"
        contentTwo="Request A Quote"
      />
      <RequestQuoteContainer classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default RequestQuote;
