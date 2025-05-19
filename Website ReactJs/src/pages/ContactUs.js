import React from "react";

import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import IntroThree from "../container/IntroSlider/IntroThree";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import GoogleMap from "../container/Map/GoogleMap";
import ContactFromContainer from "../container/ContactFromContainer/ContactFromContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const ContactUs = () => {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Contact Us"
        description="Get in touch with Anthem Infotech. Whether you have inquiries or need assistance, our team is here to help. Reach out to us today!"
        ogtitle="Anthem Infotech - Contact Us"
        ogdescription="Get in touch with Anthem Infotech. Whether you have inquiries or need assistance, our team is here to help. Reach out to us today!"
      />

      <Header />
      {/* <Breadcrumb
        image="images/bg/breadcrumb-bg-five.jpg"
        title="Let’s connect"
        content="Home"
        contentTwo="Contact Us"
      /> */}
      <IntroThree />
      <ContactInformation classOption="bg-white" />
      <GoogleMap classOption="bg-white" />
      <ContactFromContainer classOption={`background-1`} />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default ContactUs;
