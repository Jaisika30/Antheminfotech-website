import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = ({ showServices, showIndustries }) => {

    return (
        <>
            <nav className="site-main-menu">
                <ul>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/Home/Index"}><span className="menu-text">Home</span></NavLink>
                    </li>

                    <li className="has-children">
                        <NavLink to={process.env.PUBLIC_URL + "/Home/OurServices"}><span className="menu-text" >Services</span></NavLink>
                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                        <ul className="sub-menu">
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/SoftwareDevelopment"}><span className="menu-text">Custom Software</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/SearchEngineOptimization"}><span className="menu-text">Digital Marketing (SEO)</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/MobileAppDevelopment"}><span className="menu-text">Mobile & App</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/SoftwareMaintenance"}><span className="menu-text">Software Maintenance</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/WebsiteDesigningService"}><span className="menu-text">UI/UX </span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/AspDotnetApplication"}><span className="menu-text">Website Design</span></NavLink></li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <NavLink to={process.env.PUBLIC_URL + "/Home/Industries"}><span className="menu-text">Industries</span></NavLink>
                        <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                        <ul className="sub-menu">
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Business Promotions"}><span className="menu-text">Business Promotions</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Construction"}><span className="menu-text">Construction</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Financial Advisory"}><span className="menu-text">Financial Advisory</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Food Ordering"}><span className="menu-text">Food Ordering</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Health & Medicines"}><span className="menu-text">Health & Medicines</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=HOA Automation"}><span className="menu-text">HOA Automation</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Information Technology"}><span className="menu-text">Information Technology</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Logistics"}><span className="menu-text">Logistics</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Tourism"}><span className="menu-text">Tourism</span></NavLink></li>
                            <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Travel"}><span className="menu-text">Travel</span></NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/Career"}><span className="menu-text">Career</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/OurWork"}><span className="menu-text">Portfolio</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/Brochure/mobile/index.html"}><span className="menu-text">Brochure</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar
