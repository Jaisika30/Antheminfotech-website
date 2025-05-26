import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from "../../../utils";

const MobileNavMenu = () => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-toggle") ||
            target.classList.contains("menu-toggle")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <nav className="site-mobile-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/Home/Index"}><span className="menu-text">Home</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/Home/Services"}><span className="menu-text">Services</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Custom-Software"}><span className="menu-text">Custom Software</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Web-Mobile-Apps"}><span className="menu-text">Web & Mobile Apps</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/AI-Powered-Solutions"}><span className="menu-text">AI-Powered Solutions </span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Marketing-Automation"}><span className="menu-text">Marketing Automation</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/MVP-Development"}><span className="menu-text">MVP Development </span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Enterprise-Software"}><span className="menu-text">Enterprise Software</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Data-Analysis-ETL"}><span className="menu-text">Data Analysis & ETL</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/UI-UX-Design"}><span className="menu-text">UI/UX Design</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/On-Demand-Dedicated-Talent"}><span className="menu-text">On-Demand Dedicated Talent</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/Home/Industries"}><span className="menu-text">Industries</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        {/* <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Workforce Compliance Solutions"}><span className="menu-text">Workforce Compliance Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Publishing Rights Management"}><span className="menu-text">Publishing Rights Management</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Financial Audit Compliance"}><span className="menu-text">Financial Audit Compliance</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Food Ordering Solutions"}><span className="menu-text">Food Ordering Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Information Technology Solutions"}><span className="menu-text">Information Technology Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Business Promotion Solutions"}><span className="menu-text">Business Promotion Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=HOA Automation Solutions"}><span className="menu-text">HOA Automation Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Logistics and Supply Chain Management"}><span className="menu-text">Logistics & Supply Chain Management</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Construction Industry Software"}><span className="menu-text">Construction Industry Software</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Healthcare and Medical Solutions"}><span className="menu-text">Healthcare & Medical Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=Tourism and Travel Solutions"}><span className="menu-text">Tourism & Travel Solutions</span></NavLink></li> */}

                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Workforce Compliance Solutions")}><span className="menu-text">Workforce Compliance Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Publishing Rights Management")}><span className="menu-text">Publishing Rights Management</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Financial Audit Compliance")}><span className="menu-text">Financial Audit Compliance</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Food Ordering Solutions")}><span className="menu-text">Food Ordering Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Information Technology Solutions")}><span className="menu-text">Information Technology Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Business Promotion Solutions")}><span className="menu-text">Business Promotion Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("HOA Automation Solutions")}><span className="menu-text">HOA Automation Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Logistics and Supply Chain Management")}><span className="menu-text">Logistics & Supply Chain Management</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Construction Industry Software")}><span className="menu-text">Construction Industry Software</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Healthcare and Medical Solutions")}><span className="menu-text">Healthcare & Medical Solutions</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/Home/Industries?Industrytype=" + encodeURIComponent("Tourism and Travel Solutions")}><span className="menu-text">Tourism & Travel Solutions</span></NavLink></li>

                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/Career"}><span className="menu-text">Career</span></NavLink>
                </li>
                {/* <li>
                    <NavLink to={process.env.PUBLIC_URL + "/OurWork"}><span className="menu-text">Portfolio</span></NavLink>
                </li> */}
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/OurWork"}><span className="menu-text">Portfolio</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/Technologies"}><span className="menu-text">Technologies</span></NavLink></li>
                    </ul>
                </li>

                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/about-us"}><span className="menu-text">About Us</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/faqs"}><span className="menu-text">FAQs</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/our-clients"}><span className="menu-text">Our Clients</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/testimonials"}><span className="menu-text">Testimonials</span></NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact-us"}><span className="menu-text">Contact Us</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNavMenu;
