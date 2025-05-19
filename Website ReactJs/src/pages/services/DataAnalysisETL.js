import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const DataAnalysisETL = () => {
  let filterservices = "Data Analysis & ETL"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Data Analysis & ETL"
        description="Unlock the power of data with Anthem Infotech’s Data Analysis & ETL services. We provide comprehensive data solutions and custom dashboards to enhance decision-making and business insights."
        ogtitle="Anthem Infotech - Data Analysis & ETL"
        ogdescription="Unlock the power of data with Anthem Infotech’s Data Analysis & ETL services. We provide comprehensive data solutions and custom dashboards to enhance decision-making and business insights."
      />

      <Header />
      <Breadcrumb
        image="images/bg/Data-Analysis-ETL.webp"
        title="<span class='text-color-span'>Empower</span> Your Decision-Making with Comprehensive <span class='text-color-span'>Data Solutions</span> and <span class='text-color-span'>Custom Dashboards</span>"
        content="Home"
        contentTwo="Services"
        contentThree="Data Analysis & ETL"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default DataAnalysisETL;
