import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const MarketingAutomation = () => {
  let filterservices = "Marketing Automation"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Marketing Automation"
        description="Boost lead generation and customer engagement with Anthem Infotech’s marketing automation solutions. Streamline workflows and drive better results with our innovative tools and strategies."
        ogtitle="Anthem Infotech - Marketing Automation"
        ogdescription="Boost lead generation and customer engagement with Anthem Infotech’s marketing automation solutions. Streamline workflows and drive better results with our innovative tools and strategies."
      />

      <Header />
      <Breadcrumb
        image="images/bg/Marketing-Automation.jpg"
        title="Enhance <span class='text-color-span'>Lead Generation</span> and <span class='text-color-span'>Customer Engagement</span> with Streamlined <span class='text-color-span'>Marketing Workflows</span>"
        content="Home"
        contentTwo="Services"
        contentThree="Marketing Automation"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default MarketingAutomation;
