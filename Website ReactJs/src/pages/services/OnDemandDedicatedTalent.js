import React from "react";
import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const OnDemandDedicatedTalent = () => {
  let filterservices = "On-Demand Dedicated Talent"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - On-Demand Dedicated Talent"
        description="Access top-tier designers, developers, and other skilled professionals on a fixed or hourly basis. Anthem provides flexible on-demand talent to meet your business needs."
        ogtitle="Anthem Infotech - On-Demand Dedicated Talent"
        ogdescription="Access top-tier designers, developers, and other skilled professionals on a fixed or hourly basis. Anthem provides flexible on-demand talent to meet your business needs."
      />

      <Header />
      <Breadcrumb
        image="images/bg/OnDemand-1.webp"
        title="Expert Professional <span class='text-color-span'>Designers, Developers</span>, and Other <span class='text-color-span'>Resources</span> Are Available on Fixed or Hourly Basis"
        content="Home"
        contentTwo="Services"
        contentThree="On-Demand Dedicated Talent"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default OnDemandDedicatedTalent;
