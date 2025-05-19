import React from "react";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";
import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

const WebMobileApps = () => {
  let filterservices = "Web & Mobile Apps"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Web & Mobile Apps"
        description="Anthem Infotech offers cutting-edge web and mobile app development services. We build scalable, user-friendly apps to help businesses succeed in the digital world."
        ogtitle="Anthem Infotech - Web & Mobile Apps"
        ogdescription="Anthem Infotech offers cutting-edge web and mobile app development services. We build scalable, user-friendly apps to help businesses succeed in the digital world."
      />

      <Header />
      <Breadcrumb
        image="images/bg/Web-Mobile-Apps.webp"
        title="Deliver <span class='text-color-span'>Seamless User Experiences</span> with Our <span class='text-color-span'>Responsive</span> and <span class='text-color-span'>Cross-Platform</span> Solutions"
        content="Home"
        contentTwo="Services"
        contentThree="Web & Mobile Apps"
      />
      <ServiceGrid service={filteredServices} classOption="bg-white" />
      <ServiceDesign service={filteredServices} classOption="bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default WebMobileApps;
