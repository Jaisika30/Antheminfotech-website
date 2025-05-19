import PropTypes from "prop-types";
import React from 'react';
import ReactVivus from 'react-vivus';
import { Link } from "react-router-dom";

const IconBox = ({ data, classOption }) => {
    // process.env.REACT_APP_PUBLIC_URL
    return (

        <div className={`icon-box text-center ${classOption}`}>
            <Link to={data.link} className="link">
                <div className="icon">
                    <ReactVivus
                        id={`servicesvg-${data.id}`}
                        option={{
                            file: `${process.env.REACT_APP_PUBLIC_URL}${data.icon}`,
                            animTimingFunction: 'EASE',
                            type: 'oneByOne',
                            delay: 80
                        }}
                    />
                </div>
                <div className="content">
                    <h3 className="title">{data.title}</h3>
                    <div className="desc">
                        <p>{data.desc}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

IconBox.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string
};

IconBox.defaultProps = {
    classOption: "icon-box text-center",
};

export default IconBox;
