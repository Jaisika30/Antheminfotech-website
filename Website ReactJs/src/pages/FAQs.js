import React from "react";

import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Faq from "../container/Faq/Faq.js";

const Faqs = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - FAQs"
        description="Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings."
        ogtitle="Anthem Infotech - FAQs"
        ogdescription="Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings."
      />

      <Header />
      <Breadcrumb
        image="images/bg/faq.webp"
        title="Everything You Need to Know About Our Services and Solutions"
        content="Home"
        contentTwo="FAQs"
      />
      <Faq classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Faqs;
