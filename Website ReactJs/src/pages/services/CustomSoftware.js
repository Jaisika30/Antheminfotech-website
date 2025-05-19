import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const CustomSoftware = () => {
  let filterservices = "Custom Software Development"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Custom Software Development"
        description="Optimize your operations with Anthem Infotech’s bespoke software development solutions. We design custom software for efficiency, scalability, and seamless web and mobile app integration."
        ogtitle="Anthem Infotech - Custom Software Development"
        ogdescription="Optimize your operations with Anthem Infotech’s bespoke software development solutions. We design custom software for efficiency, scalability, and seamless web and mobile app integration."
      />

      <Header />
      <Breadcrumb
        image="images/bg/Custom-Software.webp"
        title="<span class='text-color-span'>Optimise</span> Your Operations with <span class='text-color-span'>Bespoke Software</span> Designed for <span class='text-color-span'>Efficiency</span> and <span class='text-color-span'>Scalability</span> Web & Mobile Apps"
        content="Home"
        contentTwo="Services"
        contentThree="Custom Software Development"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default CustomSoftware;
