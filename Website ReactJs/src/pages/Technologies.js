import React from "react";
import Footer from "../container/Footer/Footer";
import Header from "../partials/header/Header";
import WordCloud from "../container/WordCloud/WordCloud";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import SEO from "../components/SEO";

function Technologies() {
  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Technologies"
        description="Discover the innovative technologies powering Anthem Infotech’s solutions. We leverage the latest tools and platforms to deliver scalable, efficient, and transformative results for businesses."
        ogtitle="Anthem Infotech - Technologies"
        ogdescription="Discover the innovative technologies powering Anthem Infotech’s solutions. We leverage the latest tools and platforms to deliver scalable, efficient, and transformative results for businesses."
      />

      <Header />
      <Breadcrumb
        image="images/bg/portfoliobg.webp"
        title="Technologies Powering Our Innovative Solutions"
        content="Home"
        contentTwo="Technologies"
      />
      <WordCloud classOption="bg-white" />
      <Footer />
    </React.Fragment>
  );
}

export default Technologies;
