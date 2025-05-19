import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import WorkDetailsContainer from "../container/Work/WorkDetailsContainer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import WorkData from "../data/work/workDetails.json";
import axios from "axios";
import { getProjectByID } from "../services/projectsservices.js";
import { getToken } from "../services/tokenservice.js";

const WorkDetails = () => {
  let { id } = useParams();
  const projectid = parseInt(id);
  const data = WorkData.filter((work) => work.id === projectid);

  //new implementation
  const [token, setToken] = useState(null);
  const [projects, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      if (token && projectid) {
        try {
          const projectDetails = await getProjectByID(projectid);
          setProject(projectDetails);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchProject();
  }, [token, projectid]);

  return (
    <React.Fragment>
      <SEO
        title="Anthem Infotech - Work Details"
        description="Explore the detailed overview of Anthem Infotech's projects and services. Learn how we deliver tailored solutions that drive business success and innovation."
        ogtitle="Anthem Infotech - Work Details"
        ogdescription="Explore the detailed overview of Anthem Infotech's projects and services. Learn how we deliver tailored solutions that drive business success and innovation."
      />

      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-two.jpg"
        title={projects.data?.projectName}
        content="Home"
        contentTwo="OurWork"
        contentThree="View Project"
      />
      <WorkDetailsContainer
        projects={projects}
        loading={loading}
        classOption="bg-white"
      />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default WorkDetails;
