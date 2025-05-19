import React from "react";
import Header from "../partials/header/Header";
import Footer from "../container/Footer/Footer";

const Loader = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="loader-overlay">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Loader;
