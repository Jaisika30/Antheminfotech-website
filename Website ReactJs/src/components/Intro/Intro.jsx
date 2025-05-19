import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Intro = ({ data }) => {

    return (

        <div className="intro-section overlay section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})` }}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h2
                                className="title"
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            />
                            <div className="desc">
                                <p>{data.desc}</p>
                            </div>
                            <Link to={process.env.PUBLIC_URL + "/request-a-quote"} className="btn btn-bottom" data-hover="Get Started">Get Started</Link>
                            <Link to={process.env.PUBLIC_URL + "/Home/Services"} className="btn btn-bottom" data-hover="Learn More">Learn More </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

Intro.propTypes = {
    data: PropTypes.object
};


export default Intro
