import React from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ReactTabs from "../components/Tabs/Tab.jsx";

const Industries = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const industryType = queryParams.get("Industrytype");

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Industries"
        description={`We partner with bold brands across various industries to drive innovation and growth. Our expertise in ${
          industryType ? industryType : "diverse industries"
        } helps businesses thrive with tailored technology solutions.`}
        ogtitle="Anthem Infotech - Industries"
        ogdescription={`We partner with bold brands across various industries to drive innovation and growth. Our expertise in ${
          industryType ? industryType : "diverse industries"
        } helps businesses thrive with tailored technology solutions.`}
      />

      <Header />
      <Breadcrumb
        image="images/Industries/industryHeader.webp"
        title={`We Work With <span class='text-color-span'>Bold Brands</span> That We <span class='text-color-span'>Believe</span> in <span class='text-color-span'>${
          industryType ? industryType : ""
        }</span>`}
        content="Home"
        contentTwo="Industries"
      />
      <ReactTabs industryType={industryType} />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Industries;
