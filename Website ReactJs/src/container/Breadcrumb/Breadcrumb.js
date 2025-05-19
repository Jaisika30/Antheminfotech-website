import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, content, contentTwo, contentThree, image }) => {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <div
      className="page-title-section section section-padding-top overlay-two"
      style={{
        backgroundImage: `url(${publicUrl}/${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="page-title">
        <div className="container">
          <h1
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>
      </div>
      <div className="page-breadcrumb position-static">
        <div className="container">
          <ul className="breadcrumb justify-content-center">
            <li>
              <Link to={process.env.PUBLIC_URL + "/"}>{content}</Link>
            </li>
            {!contentThree ? (
              <li className="current">{contentTwo}</li>
            ) : (
              <li>
                {contentTwo === "OurWork" ? (
                  <Link to={process.env.PUBLIC_URL + "/" + contentTwo + ""}>
                    {contentTwo}
                  </Link>
                ) : (
                  <Link
                    to={process.env.PUBLIC_URL + "/Home/" + contentTwo + ""}
                  >
                    {contentTwo}
                  </Link>
                )}
              </li>
            )}

            {contentThree && <li className="current">{contentThree}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
  image: PropTypes.string,
};

export default Breadcrumb;
