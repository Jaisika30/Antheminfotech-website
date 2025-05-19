import React from "react";
import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import ServiceIconBoxTwo from "../../container/service/ServiceIconBoxTwo.js";
import ServiceSkill from "../../container/service/ServiceSkill.js";
import AboutSix from "../../container/About/AboutSix.js";
import FunfactTwo from "../../container/Funfact/FunfactTwo.js";
import ContactInformationThree from "../../container/ContactInformation/ContactInformationThree.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";
import Services from "../../components/Services/Services.jsx";
import ServiceDesign from "../../container/service/serviceDesign.js";

import servicesData from "../../data/services/services.json";

const Service = () => {
  let filterservices = "Custom Software Development"; // The title you want to filter by
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Services"
        description="Explore Anthem’s comprehensive range of services designed to help businesses develop, scale, and transform using the latest technology solutions."
        ogtitle="Anthem Infotech - Services"
        ogdescription="Explore Anthem’s comprehensive range of services designed to help businesses develop, scale, and transform using the latest technology solutions."
      />

      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title="End-to-End Partner in <span class='text-color-span'>Developing, Scaling</span>, and <span class='text-color-span'>Transforming</span> Businesses with Technology"
        content="Home"
        contentTwo="Services"
      />
      <ServiceIconBoxTwo classOption="bg-white" />
      <ServiceSkill classOption={`background-1`} />
      <AboutSix classOption="bg-white" />
      <FunfactTwo classOption={`background-1`} />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Service;
