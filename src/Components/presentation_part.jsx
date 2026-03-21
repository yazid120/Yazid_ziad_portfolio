import React from "react";
import Person from "../../public/assets/images/1745831090805.jpg"
import { Link } from "react-scroll"


const PresentationSection = function () {
    const Links_list = [
        { link_name: "Home", section_id: "section-home" },
        { link_name: "Experience", section_id: "section-experience" },
        { link_name: "Certification", section_id: "section-certification" },
        { link_name: "Skills", section_id: "section-2" },
    ];

    return (
        <section className="hero-section" id="section-home">
            {/* Avatar with animated gradient ring */}
            <div className="hero-avatar-wrapper">
                <div className="hero-avatar-ring"></div>
                <img src={Person} alt="Yazid Ziad" className="hero-avatar" />
            </div>

            {/* Status badge */}
            <div>
                <span className="hero-status">
                    <span className="hero-status-dot"></span>
                    Available for work
                </span>
            </div>

            {/* Name & Title */}
            <h1 className="hero-name">
                Hi, I'm <span className="gradient-text">Yazid Ziad</span>
            </h1>
            <p className="hero-title">Full Stack Web Developer</p>

            {/* Navigation links */}
            <nav className="hero-nav">
                {Links_list.map(({ link_name, section_id }) => (
                    <Link
                        key={section_id}
                        activeClass="active"
                        to={section_id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={800}
                        className="hero-nav-link"
                    >
                        {link_name}
                    </Link>
                ))}
            </nav>
        </section>
    );
};

export default PresentationSection; 