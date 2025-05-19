import PropTypes from "prop-types";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Brand = ({ data }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handleImageError = () => {
        setIsLoaded(false);
    };

    return (
        <div className="brand-item">
            <a href={data.websiteAddress} target="_blank" rel="noreferrer">
                <div className="image-container position-relative" style={{ display: 'inline-block' }}>
                    {!isLoaded && (
                        <Skeleton
                            height={100}
                            width={200}
                            className="rounded"
                            baseColor="#f0f0f0"
                            highlightColor="#e0e0e0"
                            style={{ margin: 0 }}
                        />
                    )}
                    <img
                        src={data.logo1}
                        alt={data.clientName}
                        title={data.clientName}
                        className="brand-image img-fluid"
                        loading="lazy"
                        style={{
                            transition: "opacity 0.9s ease",
                            opacity: isLoaded ? 1 : 0,
                            display: isLoaded ? "block" : "none",
                        }}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                    />
                </div>
            </a>
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
