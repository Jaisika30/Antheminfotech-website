import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const AIMLDevelopment = () => {
  let filterservices = "AI-Powered Solutions"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - AI-Powered Solutions"
        description="Transform your business with Anthem Infotech's AI-powered solutions. Elevate creativity, streamline processes, and boost customer engagement with cutting-edge artificial intelligence technologies."
        ogtitle="Anthem Infotech - AI-Powered Solutions"
        ogdescription="Transform your business with Anthem Infotech's AI-powered solutions. Elevate creativity, streamline processes, and boost customer engagement with cutting-edge artificial intelligence technologies."
      />

      <Header />
      <Breadcrumb
        image="images/bg/AI-ML-Development.webp"
        title="<span class='text-color-span'>AI-Powered</span> Solutions to <span class='text-color-span'>Elevate Creativity</span>, Streamline Processes, and <span class='text-color-span'>Boost Customer Engagement</span>"
        content="Home"
        contentTwo="Services"
        contentThree="AI-Powered Solutions"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default AIMLDevelopment;
