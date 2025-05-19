import React from "react";
import SEO from "../components/SEO.jsx";
import Header from "../partials/header/Header.jsx";
import IntroSlider from "../container/IntroSlider/IntroSlider.js";
import HomeAbout from "../components/About/HomeAbout.jsx";
import ServiceIconBox from "../container/service/ServiceIconBox.js";
import HomeSuccess from "../components/Success/HomeSuccess.jsx";
import Portfolio from "../container/Portfolio/Portfolio.js";
import HomeBlog from "../container/BlogGrid/HomeBlog.js";
import Newsletter from "../container/Newsletter/Newsletter.js";
import ContactInformation from "../container/ContactInformation/ContactInformation.js";
import Footer from "../container/Footer/Footer.js";
import ScrollToTop from "../components/ScrollToTop.jsx";
import BrandContainer from "../container/Brand/BrandContainer.js";
import ReactTabs from "../components/Tabs/Tab.jsx";
import Services from "../components/Services/Services.jsx";
import CallToAction from "../container/CallToAction/CallToAction.js";
import Funfact from "../container/Funfact/Funfact.js";

const Home = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Software Product Development and Maintenance Company"
        description="Anthem Infotech specializes in end-to-end software product development and maintenance. Our services help businesses create, scale, and sustain software products with precision and innovation."
        ogtitle="Revolutionize Your Software with Anthem Infotech"
        ogdescription="Discover how Anthem Infotech can help your business grow with innovative software product development and maintenance."
      />

      <Header />

      <IntroSlider />
      <HomeAbout classOption="bg-white" />
      <Funfact classOption="bg-white" />
      <ServiceIconBox classOption="background-1" />
      {/* <ReactTabs /> */}
      {/* <Services /> */}
      <HomeSuccess classOption="bg-white" />
      {/* <Portfolio /> */}
      {/* <HomeBlog /> */}
      {/* <Newsletter /> */}
      <CallToAction />
      <ContactInformation classOption="background-1" />
      <BrandContainer classOption="section-padding bg-white" />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Home;
