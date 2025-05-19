import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { baseApiUrl } from "./baseApiUrl";
import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";
import { Button } from "reactstrap";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDetails = (props) => {
  // Extract project name and subcategory from URL parameters
  const { state } = useLocation();
  const { projectName, projectSubCategory } = state;
  const [projects, setProjects] = useState([]);

  // const { projectName, projectSubCategory } = useParams();
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [projectDetails, setProjectDetails] = useState(null);
  const [projectImages, setProjectImages] = useState(null);
  const [projectCategory, setProjectCategory] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Define the API URL based on the project name and subcategory
    const apiUrl = `${baseApiUrl}api/Home/ViewProjectByProjectName?projectname=${projectName},${projectSubCategory}`;
    // Start loading animation
    setLoading(true);

    // Fetch project details from the API with JWT token
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((response) => response.json())
      .then((data, img) => {
        // Set the fetched project details to state
        const imageUrls = data.img.map((imageData) => imageData.imageURL);

        // Set the fetched project details to state
        setProjectDetails(data.data);
        setProjectImages(imageUrls);
        setProjectCategory(data.projectCategory);
        console.log("fetching project Images:", data.img);
        setLoading(false); // Stop loading animation once data is received
        console.log("fetching project details:", data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setLoading(false); // Stop loading animation on error
      });
  }, [projectName, projectSubCategory]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5e72e4;
  `;
  // Function to handle clicking the Live Preview button
  const handleLivePreviewClick = () => {
    // Open the live preview link in a new window
    window.open(projectDetails.url, "_blank");
  };

  const handleProjectSelect = (projectName, projectSubCategory) => {
    navigate("/projectDetails", { state: { projectName, projectSubCategory } });
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projectImages.length - 1 : prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projectImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const navigate = useNavigate();

  const handlePlanSelect = (projectName, projectSubCategory) => {
    debugger;
    navigate("/projectDetails", { state: { projectName, projectSubCategory } });

    console.log(projectName, projectSubCategory);
    // setSelectedPlanId(planId);
    // fetchPeriodsByPlan(planId);
  };

  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('images/bg_1.jpg')" }}
        // style="background-image: url('images/bg_1.jpg')"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9  text-center">
              <h1 className="mb-2 bread">{projectName}</h1>
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Portfolio <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          {loading ? (
            <div
              className="loader-container"
              style={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircleLoader
                color={"#5e72e4"}
                loading={loading}
                css={override}
                size={200}
              />
            </div>
          ) : (
            projectDetails && (
              <div className="row justify-content-start mb-5 pb-2">
                <div className="col-md-4 heading-section ">
                  <span className="subheading subheading-with-line">
                    <small className="pr-2 bg-white">Projects</small>
                  </span>
                  <h2 className="mb-4"> {projectName}</h2>
                  {projectDetails.technolgies.split(",").map((tech, i) => (
                    <p key={i}>{tech}</p>
                  ))}
                  <Button
                    style={{ backgroundColor: "#ff6347", color: "white" }} // Change the background color here
                    onClick={handleLivePreviewClick}
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      style={{ marginRight: "5px", color: "white" }}
                    />{" "}
                    LIVE PREVIEW
                  </Button>
                </div>
                <div className="col-md-8 pl-md-5 heading-section ">
                  <div
                    className="singleslider wow fadeInDown"
                    style={{ position: "relative", marginBottom: "20px" }}
                  >
                    <button
                      className="prev"
                      onClick={prevSlide}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        zIndex: "1",
                        transition: "transform 0.3s",
                      }}
                    >
                      &#10094;
                    </button>
                    <button
                      className="next"
                      onClick={nextSlide}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        zIndex: "1",
                        transition: "transform 0.3s",
                      }}
                    >
                      &#10095;
                    </button>

                    {projectImages.map((imageURL, index) => (
                      <div
                        key={index}
                        style={{
                          display: index === currentSlide ? "block" : "none",
                          height: "450px",
                          width: "100%",
                          boxShadow:
                            "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                        }}
                      >
                        <img
                          src={`https://antheminfotech.com/PortfolioImages/${imageURL}`}
                          className="img-responsive"
                          alt={`Slider${index + 1}`}
                          style={{ height: "450px", width: "100%" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pl-md-4 border-line">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: projectDetails.description,
                    }}
                  />
                </div>
              </div>
            )
          )}

          <div className="container-wrap">
            <div className="row no-gutters">
              <h3 style={{ fontWeight: "bold" }}>RELATED PORTFOLIO</h3>
              <div className="container-fluid">
                {projectCategory && projectCategory.length > 0 ? (
                  <div className="row ">
                    {projectCategory.map((project, index) => (
                      <a
                        key={index}
                        className="col-md-4 mb-4"
                        onClick={() =>
                          handlePlanSelect(
                            project.projectName,
                            project.projectSubCategory
                          )
                        }
                        style={{
                          minHeight: "280px",
                        }}
                      >
                        <div
                          className="card my-3"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="card-footer">
                            <img
                              src={`https://antheminfotech.com/PortfolioImages/${project.projectImage}`}
                              alt={`Project Image`}
                              style={{
                                width: "100%",
                                marginBottom: "10px",
                                justifyContent: "center",
                                height: "250px",
                              }}
                            />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p>No related projects found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
