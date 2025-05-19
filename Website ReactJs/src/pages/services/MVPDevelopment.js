import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const MVPDevelopment = () => {
  let filterservices = "MVP Development"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - MVP Development"
        description="Bring your market idea to life with a Minimum Viable Product (MVP). Anthem Infotech uses an Agile Iterative Process to quickly validate ideas and accelerate product development."
        ogtitle="Anthem Infotech - MVP Development"
        ogdescription="Bring your market idea to life with a Minimum Viable Product (MVP). Anthem Infotech uses an Agile Iterative Process to quickly validate ideas and accelerate product development."
      />

      <Header />
      <Breadcrumb
        image="images/bg/MVP-Development.webp"
        title="Validate Your Market Idea with a <span class='text-color-span'>Minimum Viable Product</span> and <span class='text-color-span'>Agile Iterative</span> Process"
        content="Home"
        contentTwo="Services"
        contentThree="MVP Development"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default MVPDevelopment;
