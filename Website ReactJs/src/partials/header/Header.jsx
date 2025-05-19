import React, { Fragment, Suspense, lazy, useEffect, useState } from 'react';
import Logo from '../../components/logo/Logo';
import UtilityNavbar from './UtilityNavbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import MobileMenu from '../../components/NavBar/MobileMenu';
import MainSearch from '../../components/NavBar/MainSearch';
import NewNavBar from '../../components/NavBar/newNavBar';


const Header = () => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const [token] = useState(localStorage.getItem("token"));

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    const [searchbarShow, setSearchbarShow] = useState(false);
    const onSearchHandler = () => {
        setSearchbarShow(prev => !prev);
    }
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".header-section");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    //Tokan 

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await axios.post(`${process.env.REACT_APP_PUBLIC_API_URL}/api/Home/GetTokenForAllAPI?tokenn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiUmFtYW4gS3VtYXIiLCJuYmYiOjE3MTM0OT`);
                localStorage.setItem("token", response.data.token);
                // console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchToken();
    }, []);


    const [bgColor, setBgColor] = useState('white');
    useEffect(() => {
        const updateBackgroundColor = (e) => {
            if (e.matches) {
                setBgColor('rgba(255, 255, 255, 0.6)');
            } else {
                setBgColor('rgba(255, 255, 255, 0.8)');
            }
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        updateBackgroundColor(mediaQuery);

        mediaQuery.addEventListener('change', updateBackgroundColor);

        return () => mediaQuery.removeEventListener('change', updateBackgroundColor);
    }, []);


    return (
        <Fragment>
            <div className={`header-section header-transparent sticky-header section ${scroll > headerTop ? "is-sticky" : ""
                }`} >
                <div className="menu-column-area d-none d-xl-block">
                    <UtilityNavbar />
                </div>
                <div className="header-inner" style={{ backgroundColor: bgColor }}>

                    <div className="container position-relative">
                        <div className="row justify-content-between align-items-center position-static">
                            <div className="col-xl-4 col-sm-4 col-auto order-0">
                                <Logo
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="anthem infotech logo"
                                />
                            </div>
                            <div className="col-auto col-xl-8 col-sm-4 d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                                <div className="menu-column-area d-none d-xl-block">

                                    <NewNavBar />
                                </div>

                                {/* <div className="header-mobile-menu-toggle d-xl-none ms-sm-2">
                                    <button type="button" className="toggle" onClick={onCanvasHandler}>
                                        <i className="icon-top"></i>
                                        <i className="icon-middle"></i>
                                        <i className="icon-bottom"></i>
                                    </button>
                                </div> */}
                                <div className={`header-mobile-menu-toggle d-xl-none ms-sm-2 ${isDarkMode ? "dark-mode-logo" : "light-mode-logo"}`}>
                                    <button type="button" className="toggle" onClick={onCanvasHandler}>
                                        <i className="icon-top"></i>
                                        <i className="icon-middle"></i>
                                        <i className="icon-bottom"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
            <MainSearch show={searchbarShow} onClose={onSearchHandler} />
        </Fragment>
    )
}

export default Header;