import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sitemap.css';

const Sitemap = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sitemapData = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Our Doctors", path: "/doctors" },
                { name: "Book Appointment", path: "/appointments" },
                { name: "Contact Us", path: "/contact" },
                { name: "Blog", path: "/blog" }
            ]
        },
        {
            title: "Departments",
            links: [
                { name: "Cardiology", path: "/services" },
                { name: "Neurology", path: "/services" },
                { name: "Orthopedics", path: "/services" },
                { name: "Pediatrics", path: "/services" },
                { name: "Emergency Care", path: "/services" }
            ]
        },
        {
            title: "Patient Care",
            links: [
                { name: "Appointment Booking", path: "/appointments" },
                { name: "Emergency: 96100 05141", path: "tel:9610005141", external: true },
                { name: "Terms of Service", path: "#" },
                { name: "Privacy Policy", path: "#" }
            ]
        },
        {
            title: "Connect With Us",
            links: [
                { name: "Facebook", path: "https://facebook.com", external: true },
                { name: "Instagram", path: "https://www.instagram.com/chrc_jaipur/", external: true },
                { name: "YouTube", path: "https://www.youtube.com/@CMHhospitaljaipur", external: true },
                { name: "WhatsApp", path: "https://wa.me/9610005141", external: true }
            ]
        }
    ];

    return (
        <div className="sitemap-page">
            <div className="sitemap-header">
                <h1>Sitemap</h1>
                <p>Overview of Chauhan Hospital Website Structure</p>
            </div>
            
            <div className="container">
                <div className="sitemap-grid">
                    {sitemapData.map((section, index) => (
                        <div key={index} className="sitemap-section">
                            <h2 className="sitemap-section-title">{section.title}</h2>
                            <ul className="sitemap-list">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.external ? (
                                            <a href={link.path} target="_blank" rel="noopener noreferrer">
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={link.path}>{link.name}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
