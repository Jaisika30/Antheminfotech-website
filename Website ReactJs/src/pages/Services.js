import React, { useEffect, useState } from "react";
import "./New.css";
import $ from "jquery";
import { baseApiUrl } from "./baseApiUrl";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Services({ showHeadingSection = true }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetchData();
  }, []); // Empty array to run the effect only once on component mount

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProjects();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".ftco-animate");
      elements.forEach((element) => {
        const bounding = element.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          if (!element.classList.contains("ftco-animated")) {
            element.classList.add("ftco-animated");
            element.classList.add("fadeIn");
            element.classList.add("fadeInRight");
            element.classList.add("fadeInLeft");
            element.classList.add("fadeInUp");
          }
        }
      });
    };

    // Initial call to handle scroll in case elements are already in view
    handleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://anthemwebsiteapi.antheminfotech.com/api/Home/GetProjectForHomePage",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data.topEight);
        // Display data under "topEight" parameter
        console.log(data.topEight);
      } else {
        console.error("Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      // Get JWT token from local storage
      const token = localStorage.getItem("Token");

      // Make API request with JWT token in headers
      const response = await fetch(
        `${baseApiUrl}api/Home/GetProjectForHomePage`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      if (!Array.isArray(data)) {
        throw new Error("Fetched data is not an array");
      }
      // Parse JSON response
      const data = await response.json();

      // Log the data to console
      console.log("Fetched Projects:", data);

      // Set projects state with fetched data
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  const handleProjectSelect = (projectName, projectSubCategory) => {
    navigate("/projectDetails", { state: { projectName, projectSubCategory } });
  };
  const navigate = useNavigate();
  return (
    <div>
      {showHeadingSection && (
        <section
          className="hero-wrap hero-wrap-2"
          style={{ backgroundImage: "url(images/bg_1.jpg)" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center ftco-animate">
              <div className="col-md-9 additional text-center">
                <h1 className="mb-2 bread">Services</h1>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="ftco-services">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-5">
            <div className="col-md-4 heading-section ftco-animate">
              <h2 className="mb-4">Our Work Flow</h2>
            </div>
            <div className="col-md-8 pl-md-5 ftco-animate">
              <div className="pl-md-4 border-line">
                <div>
                  <strong>Trust : </strong>Trust means a firm belief in the
                  reliability, truth, or ability of someone. We intend to be
                  that someone, we present ourselves as a team that will carry
                  the load with the client and work as a member of their team
                  with same goals and not a separate team with different
                  objectives in mind.
                </div>
                <div>
                  <strong>Commitment : </strong>
                  Commitment means the state or quality of being dedicated to a
                  cause or activity. We believe in our commitments and carry
                  them as a badge with pride. We make realistic and sometimes
                  unrealistic goals possible and once we commit, we do not back
                  off it.
                </div>
                <div>
                  <strong>Delivery : </strong> Delivery means the supply or
                  provision of something, in software context that also means on
                  time, we adhere to preset timelines and work with the client
                  on maximizing the chance of on-time delivery, so client plans
                  stay on track.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-idea"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Our Mission</h3>
                  <p>
                    We are a professional web development company in India. We
                    offer custom-made web designs, various web solutions like
                    eCommerce or shopping cart website design, website
                    re-design, PHP, MySQL, domain registration, web hosting, and
                    Search Engine Optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-compass-symbol"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Our Vision</h3>
                  <p>
                    Our dedicated support team is friendly and passionate with
                    years of experience in web design, web development,
                    eCommerce, and SEO. We work for you to give you the best web
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-layers"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Our Philosophy</h3>
                  <p>
                    At every step of the project, we promise you quality and
                    user interface designs. Whether it is a simple website or a
                    comprehensive automated software, we work to deliver a user
                    experience/user interface design with responsive screen
                    views.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="ftco-services">
            <div className="row justify-content-start">
              <div className="col-md-4 heading-section  ">
                <h2 className="mb-4">Our Services</h2>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
              <div className="col-md-8  ">
                <div className="row d-flex">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span>
                          <img
                            src="images/coding.gif"
                            alt="Coding GIF"
                            style={{ width: "200%", height: "200%" }}
                          />
                        </span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">
                          Website Design & Development
                        </h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span>
                          {" "}
                          <img
                            src="images/computer.gif"
                            alt="Coding GIF"
                            style={{ width: "200%", height: "200%" }}
                          />
                        </span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3
                          className="heading"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Custom Software & Development
                        </h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span>
                          {" "}
                          <img
                            src="images/virus.gif"
                            alt="Coding GIF"
                            style={{ width: "200%", height: "200%" }}
                          />
                        </span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Web Software Maintenance</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span>
                          {" "}
                          <img
                            src="images/lightbulb.gif"
                            alt="Coding GIF"
                            style={{ width: "200%", height: "200%" }}
                          />
                        </span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Digital Marketing (SEO)</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span>
                          {" "}
                          <img
                            src="images/idea.gif"
                            alt="Coding GIF"
                            style={{ width: "200%", height: "200%" }}
                          />
                        </span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Mobile App & Development</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span>
                          {" "}
                          <img
                            src="images/ux-design.gif"
                            alt="Coding GIF"
                            style={{ width: "200%", height: "200%" }}
                          />
                        </span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">UI/UX Designing</h3>
                        <p>
                          Even the all-powerful Pointing has no control about
                          the blind texts it is an almost unorthographic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-2">
            <div className="col-md-4 heading-section ftco-animate">
              <span className="subheading subheading-with-line">
                <small className="pr-2 bg-light">Projects</small>
              </span>
              <h2 className="mb-4">Recent Projects</h2>
            </div>
            <div className="col-md-8 pl-md-5 heading-section ftco-animate">
              <div className="pl-md-4 border-line">
                <p>
                  Here you can find our recent projects. We are passionate about
                  delivering high-quality work and providing innovative
                  solutions to our clients. Our team works tirelessly to bring
                  your ideas to life and ensure your satisfaction.
                </p>
                <p>
                  Whether you need a responsive website, ASP.Net development,
                  WordPress customization, or mobile app development, we have
                  the expertise to meet your requirements. Explore our{" "}
                  <Link
                    to="/Portfolio"
                    style={{
                      color: "#007bff",
                      fontWeight: "bold",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                    onMouseLeave={(e) => (e.target.style.color = "#007bff")}
                  >
                    portfolio
                  </Link>
                  <br />
                  and discover the diverse range of projects we have completed.
                </p>
                <p>
                  Get in touch with us today to discuss your project
                  requirements and let us help you turn your vision into
                  reality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {projects.map(
            (project, index) =>
              index % 4 === 0 && (
                <div className="row mb-4" key={`row-${index}`}>
                  {projects
                    .slice(index, index + 4)
                    .map((projectItem, innerIndex) => (
                      <div
                        className="col-md-6 col-lg-3 ftco-animate"
                        key={`col-${index}-${innerIndex}`}
                      >
                        <div
                          className="project"
                          style={{ height: "300px", objectFit: "cover" }}
                        >
                          <img
                            src={`https://antheminfotech.com/PortfolioImages/${projectItem.projectImage}`}
                            className="img-fluid"
                            alt={projectItem.projectName}
                            style={{
                              // height: "300px",
                              width: "100%",
                              objectFit: "cover",
                              textAlign: "justify",
                            }}
                          />
                          <div className="text">
                            <span>{projectItem.projectCategory}</span>
                            <h4 style={{ color: "white" }}>
                              {projectItem.projectName}
                            </h4>
                            <button
                              className="btn btn-secondary"
                              onClick={() =>
                                handleProjectSelect(
                                  projectItem.projectName,
                                  projectItem.projectSubCategory
                                )
                              }
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}

export default Services;
