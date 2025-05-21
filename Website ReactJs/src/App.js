// import React, { useEffect, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import NavScrollTop from "./components/NavScrollTop";
// import "bootstrap/dist/css/bootstrap.min.css";
// import WebMobileApps from "./pages/services/WebMobileApps";
// import UIUXDesign from "./pages/services/UIUXDesign";
// import MVPDevelopment from "./pages/services/MVPDevelopment";
// import MarketingAutomation from "./pages/services/MarketingAutomation";
// import EnterpriseSoftware from "./pages/services/EnterpriseSoftware";
// import DataAnalysisETL from "./pages/services/DataAnalysisETL";
// import CustomSoftware from "./pages/services/CustomSoftware";
// import AIPoweredSolutions from "./pages/services/AIPoweredSolutions";
// import Faqs from "./pages/FAQs";
// import Testimonial from "./pages/Testimonial";
// import OurClients from "./pages/OurClients";
// import RequestQuote from "./pages/RequestQuote";
// import NotFound from "./pages/NotFound";
// import OnDemandDedicatedTalent from "./pages/services/OnDemandDedicatedTalent";
// import Brochure from "./pages/NotInUse/Brochure";
// import Career from "./pages/Career";
// import Industries from "./pages/Industries";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Service from "./pages/services/Service";
// import Portfolio from "./pages/Portfolio";
// import ViewProject from "./pages/ViewProject";
// import BlogCategories from "./pages/NotInUse/BlogCategories";
// import BlogTag from "./pages/NotInUse/BlogTag";
// import ContactUs from "./pages/ContactUs";
// import Technologies from "./pages/Technologies";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       offset: 80,
//       duration: 1000,
//       once: true,
//       easing: "ease",
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <Router>
//       <NavScrollTop>
//         {/* <Suspense
//           fallback={
//             <>
//               <Loader />
//             </>
//           }
//         > */}
//         <Routes>
//           <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Home />} />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Index"}`}
//             element={<Home />}
//           />

//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Services"}`}
//             element={<Service />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Web-Mobile-Apps"}`}
//             element={<WebMobileApps />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/UI-UX-Design"}`}
//             element={<UIUXDesign />}
//           />
//           <Route
//             path={`${
//               process.env.PUBLIC_URL + "/Home/On-Demand-Dedicated-Talent"
//             }`}
//             element={<OnDemandDedicatedTalent />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/MVP-Development"}`}
//             element={<MVPDevelopment />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Marketing-Automation"}`}
//             element={<MarketingAutomation />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Enterprise-Software"}`}
//             element={<EnterpriseSoftware />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Data-Analysis-ETL"}`}
//             element={<DataAnalysisETL />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Custom-Software"}`}
//             element={<CustomSoftware />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/AI-Powered-Solutions"}`}
//             element={<AIPoweredSolutions />}
//           />

//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Industries"}`}
//             element={<Industries />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/Home/Industries"}`}
//             element={<Industries />}
//           />

//           <Route
//             path={`${process.env.PUBLIC_URL + "/Career"}`}
//             element={<Career />}
//           />

//           {/* <Route
//             path={`${process.env.PUBLIC_URL + "/blogs"}`}
//             element={<BlogGrid />}
//           /> */}

//           <Route
//             path={`${process.env.PUBLIC_URL + "/OurWork"}`}
//             element={<Portfolio />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/OurWork/:slug"}`}
//             element={<Portfolio />}
//           />

//           <Route
//             path={`${process.env.PUBLIC_URL + "/Brochure/mobile/index.html"}`}
//             element={<Brochure />}
//           />

//           <Route
//             path={`${process.env.PUBLIC_URL + "/about-us"}`}
//             element={<AboutUs />}
//           />

//           <Route
//             path={`${process.env.PUBLIC_URL + "/contact-us"}`}
//             element={<ContactUs />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/faqs"}`}
//             element={<Faqs />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/testimonials"}`}
//             element={<Testimonial />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/our-clients"}`}
//             element={<OurClients />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/request-a-quote"}`}
//             element={<RequestQuote />}
//           />

//           {/* <Route
//               path={`${process.env.PUBLIC_URL + "/work"}`}
//               element={<Work />}
//             /> */}
//           <Route
//             path={`${process.env.PUBLIC_URL + "/ViewProject/:id"}`}
//             element={<ViewProject />}
//           />

//           {/* <Route
//             path={`${process.env.PUBLIC_URL + "/blog-classic"}`}
//             element={<BlogClassic />}
//           /> */}
//           <Route
//             path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
//             element={<BlogTag />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
//             element={<BlogCategories />}
//           />
//           <Route
//             path={`${process.env.PUBLIC_URL + "/technologies"}`}
//             element={<Technologies />}
//           />
//           {/* <Route
//             path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
//             element={<BlogDetails />}
//           /> */}
//           {/* <Route
//             path={`${process.env.PUBLIC_URL + "/home-two"}`}
//             element={<HomeTwo />}
//           /> */}
//           {/* <Route
//             path={`${process.env.PUBLIC_URL + "/home-three"}`}
//             element={<HomeThree />}
//           /> */}
//           <Route
//             path="*"
//             element={<NotFound />} // Replace with your 404 page component
//           />
//         </Routes>
//         {/* </Suspense> */}
//       </NavScrollTop>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from "./components/NavScrollTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Lazy load pages instead of importing all at once
const WebMobileApps = lazy(() => import("./pages/services/WebMobileApps"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const MVPDevelopment = lazy(() => import("./pages/services/MVPDevelopment"));
const MarketingAutomation = lazy(() => import("./pages/services/MarketingAutomation"));
const EnterpriseSoftware = lazy(() => import("./pages/services/EnterpriseSoftware"));
const DataAnalysisETL = lazy(() => import("./pages/services/DataAnalysisETL"));
const CustomSoftware = lazy(() => import("./pages/services/CustomSoftware"));
const AIPoweredSolutions = lazy(() => import("./pages/services/AIPoweredSolutions"));
const Faqs = lazy(() => import("./pages/FAQs"));
const Testimonial = lazy(() => import("./pages/Testimonial"));
const OurClients = lazy(() => import("./pages/OurClients"));
const RequestQuote = lazy(() => import("./pages/RequestQuote"));
const NotFound = lazy(() => import("./pages/NotFound"));
const OnDemandDedicatedTalent = lazy(() => import("./pages/services/OnDemandDedicatedTalent"));
const Brochure = lazy(() => import("./pages/NotInUse/Brochure"));
const Career = lazy(() => import("./pages/Career"));
const Industries = lazy(() => import("./pages/Industries"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Service = lazy(() => import("./pages/services/Service"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ViewProject = lazy(() => import("./pages/ViewProject"));
const BlogCategories = lazy(() => import("./pages/NotInUse/BlogCategories"));
const BlogTag = lazy(() => import("./pages/NotInUse/BlogTag"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Technologies = lazy(() => import("./pages/Technologies"));

// Simple fallback UI for lazy loading
const Loader = () => <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>;

function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <NavScrollTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Index"}`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Services"}`} element={<Service />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Web-Mobile-Apps"}`} element={<WebMobileApps />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/UI-UX-Design"}`} element={<UIUXDesign />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/On-Demand-Dedicated-Talent"}`} element={<OnDemandDedicatedTalent />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/MVP-Development"}`} element={<MVPDevelopment />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Marketing-Automation"}`} element={<MarketingAutomation />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Enterprise-Software"}`} element={<EnterpriseSoftware />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Data-Analysis-ETL"}`} element={<DataAnalysisETL />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Custom-Software"}`} element={<CustomSoftware />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/AI-Powered-Solutions"}`} element={<AIPoweredSolutions />} />
            <Route path={`${process.env.PUBLIC_URL + "/Home/Industries"}`} element={<Industries />} />
            <Route path={`${process.env.PUBLIC_URL + "/Career"}`} element={<Career />} />
            <Route path={`${process.env.PUBLIC_URL + "/OurWork"}`} element={<Portfolio />} />
            <Route path={`${process.env.PUBLIC_URL + "/OurWork/:slug"}`} element={<Portfolio />} />
            <Route path={`${process.env.PUBLIC_URL + "/Brochure/mobile/index.html"}`} element={<Brochure />} />
            <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} element={<AboutUs />} />
            <Route path={`${process.env.PUBLIC_URL + "/contact-us"}`} element={<ContactUs />} />
            <Route path={`${process.env.PUBLIC_URL + "/faqs"}`} element={<Faqs />} />
            <Route path={`${process.env.PUBLIC_URL + "/testimonials"}`} element={<Testimonial />} />
            <Route path={`${process.env.PUBLIC_URL + "/our-clients"}`} element={<OurClients />} />
            <Route path={`${process.env.PUBLIC_URL + "/request-a-quote"}`} element={<RequestQuote />} />
            <Route path={`${process.env.PUBLIC_URL + "/ViewProject/:id"}`} element={<ViewProject />} />
            <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} element={<BlogTag />} />
            <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} element={<BlogCategories />} />
            <Route path={`${process.env.PUBLIC_URL + "/technologies"}`} element={<Technologies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </NavScrollTop>
    </Router>
  );
}

export default App;
