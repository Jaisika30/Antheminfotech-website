// import PropTypes from "prop-types";
// import React from 'react';
// import { Link } from "react-router-dom";


// const Logo = ({ image }) => {

//     return (
//         <div className="header-logo">
//             <Link to={process.env.PUBLIC_URL + "/"}>
//                 <img className="dark-logo" src={process.env.PUBLIC_URL + image} alt="Anthem Infotech logo" />
//             </Link>
//         </div>
//     )
// }

// Logo.propTypes = {
//     image: PropTypes.string
// };

// export default Logo;

import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // console.log(mediaQuery)
        setIsDarkMode(mediaQuery.matches);  // Set initial mode

        // Add listener to update when user switches mode
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const appDarkMode = localStorage.getItem('appDarkMode') // Check your app storage

    return (
        <div className="header-logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <img
                    className={isDarkMode ? "dark-mode-logo" : "light-mode-logo"}
                    src={process.env.PUBLIC_URL + image}
                    alt="Anthem Infotech logo"
                />
            </Link>
        </div>
    );
}

Logo.propTypes = {
    image: PropTypes.string.isRequired
};

export default Logo;
