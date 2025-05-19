import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const EnterpriseSoftware = () => {
  let filterservices = "Enterprise Software"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Enterprise Software"
        description="Empower your business with Anthem Infotech’s enterprise software solutions. We provide secure software for large-scale data management and seamless integration to drive business growth."
        ogtitle="Anthem Infotech - Enterprise Software"
        ogdescription="Empower your business with Anthem Infotech’s enterprise software solutions. We provide secure software for large-scale data management and seamless integration to drive business growth."
      />

      <Header />
      <Breadcrumb
        image="images/bg/Enterprise-Software.webp"
        title="Drive Business Growth with <span class='text-color-span'>Secure Software</span> for Large-Scale <span class='text-color-span'>Data Management</span> and <span class='text-color-span'>Integration</span>"
        content="Home"
        contentTwo="Services"
        contentThree="Enterprise Software"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default EnterpriseSoftware;
