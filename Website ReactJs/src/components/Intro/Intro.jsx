// import React from 'react'
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const Intro = ({ data }) => {

//     return (

//         <div className="intro-section overlay section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})` }}>

//             <div className="container">
//                 <div className="row row-cols-lg-1 row-cols-1">

//                     <div className="col align-self-center">
//                         <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
//                             <h2
//                                 className="title"
//                                 dangerouslySetInnerHTML={{ __html: data.title }}
//                             />
//                             <div className="desc">
//                                 <p>{data.desc}</p>
//                             </div>
//                             <Link to={process.env.PUBLIC_URL + "/request-a-quote"} className="btn btn-bottom" data-hover="Get Started">Get Started</Link>
//                             <Link to={process.env.PUBLIC_URL + "/Home/Services"} className="btn btn-bottom" data-hover="Learn More">Learn More </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>

//     )
// }

// Intro.propTypes = {
//     data: PropTypes.object
// };


// export default Intro
import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Intro = ({ data, isFirstSlide = false }) => {
  return (
    <div className="intro-section overlay section position-relative">
      {/* Background image as actual img for better LCP */}
      <img
        src={process.env.PUBLIC_URL + data.backgroundImage}
        alt="Hero Background"
        className="position-absolute w-100 h-100 object-fit-cover top-0 start-0"
        style={{ zIndex: 0 }}
        loading={isFirstSlide ? "eager" : "lazy"}
        // fetchPriority={isFirstSlide ? "high" : "auto"}
      />

      {/* Optional overlay */}
      <div className="position-absolute w-100 h-100 top-0 start-0 bg-dark opacity-50" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8 text-white text-center">
              <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <div className="desc">
                <p>{data.desc}</p>
              </div>
              <Link to={process.env.PUBLIC_URL + "/request-a-quote"} className="btn btn-bottom me-3" data-hover="Get Started">
                Get Started
              </Link>
              <Link to={process.env.PUBLIC_URL + "/Home/Services"} className="btn btn-bottom" data-hover="Learn More">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  data: PropTypes.object,
  isFirstSlide: PropTypes.bool
};

export default Intro;
