// import React from "react";

// import SEO from "../../components/SEO.jsx";
// import Header from "../../partials/header/Header.jsx";
// import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
// import Footer from "../../container/Footer/Footer.js";
// import ScrollToTop from "../../components/ScrollToTop.jsx";
// import ServiceDesign from "../../container/service/serviceDesign.js";

// import servicesData from "../../data/services/services.json";
// import ServiceGrid from "../../components/Services/ServiceGrid.jsx";

// const UIUXDesign = () => {
//   let filterservices = "UI/UX Design"; // The title you want to filter by
//   const filteredServices = Array.isArray(servicesData)
//     ? servicesData.filter((data) => data.title === filterservices)
//     : [];

//   return (
//     <React.Fragment>
//       <SEO
//         title="Anthem Infotech - UI/UX Design"
//         description="Discover Anthem Infotech’s expert UI/UX design services. We create intuitive, user-centered designs that enhance the user experience and drive business success."
//         ogtitle="Anthem Infotech - UI/UX Design"
//         ogdescription="Discover Anthem Infotech’s expert UI/UX design services. We create intuitive, user-centered designs that enhance the user experience and drive business success."
//       />

//       <Header />
//       <Breadcrumb
//         image="images/bg/ui-ux.webp"
//         title="<span class='text-color-span'>Craft Engaging</span> User Experiences with <span class='text-color-span'>Intuitive</span> and Visually Appealing <span class='text-color-span'>Digital Interfaces</span>"
//         content="Home"
//         contentTwo="Services"
//         contentThree="UI/UX Design"
//       />
//       <ServiceGrid service={filteredServices} classOption="bg-white" />
//       <ServiceDesign service={filteredServices} classOption="bg-white" />
//       <Footer />
//       <ScrollToTop />
//     </React.Fragment>
//   );
// };

// export default UIUXDesign;


import React, { Suspense, lazy } from "react";
import SEO from "../../components/SEO.jsx";

// Lazy load other components
const Header = lazy(() => import("../../partials/header/Header.jsx"));
const Breadcrumb = lazy(() => import("../../container/Breadcrumb/Breadcrumb.js"));
const Footer = lazy(() => import("../../container/Footer/Footer.js"));
const ScrollToTop = lazy(() => import("../../components/ScrollToTop.jsx"));
const ServiceDesign = lazy(() => import("../../container/service/serviceDesign.js"));
const ServiceGrid = lazy(() => import("../../components/Services/ServiceGrid.jsx"));

const Loader = () => <div>Loading...</div>;

const UIUXDesign = () => {
  let filterservices = "UI/UX Design"; // The title you want to filter by
  const filteredServices = useMemo(() => {
    return Array.isArray(servicesData)
      ? servicesData.filter((data) => data.title === filterservices)
      : [];
  }, [servicesData, filterservices]);

  return (
    <>
      <SEO
        title="Anthem Infotech - UI/UX Design"
        description="Discover Anthem Infotech’s expert UI/UX design services. We create intuitive, user-centered designs that enhance the user experience and drive business success."
        ogtitle="Anthem Infotech - UI/UX Design"
        ogdescription="Discover Anthem Infotech’s expert UI/UX design services. We create intuitive, user-centered designs that enhance the user experience and drive business success."
      />

      <Suspense fallback={<Loader />}>
        <Header />
        <Breadcrumb
          image="images/bg/ui-ux.webp"
          title="<span class='text-color-span'>Craft Engaging</span> User Experiences with <span class='text-color-span'>Intuitive</span> and Visually Appealing <span class='text-color-span'>Digital Interfaces</span>"
          content="Home"
          contentTwo="Services"
          contentThree="UI/UX Design"
        />
        <ServiceGrid service={filteredServices} classOption="bg-white" />
        <ServiceDesign service={filteredServices} classOption="bg-white" />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
};

export default UIUXDesign;
