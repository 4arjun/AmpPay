import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import img5 from '../../images/WhatsApp Image 2024-02-28 at 2.42.59 PM.jpeg';

const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50, // Adjusted offset to consider navbar height
                behavior: 'smooth',
            });
        }
    };

    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <div className={`navbar ${visible ? 'active' : 'hidden'}`}>
            <div className="logo">
                <img src={img5} alt="Logo" />
            </div>
            <div className="nav container">
                <a href="#" onClick={() => scrollToSection('#home')} className="nav-link">Home</a>
                <a href="#about1" onClick={() => scrollToSection('#about1')} className="nav-link">About us</a>
                <a href="#" className="nav-link">Contact</a>
            </div>
            <div className="login-btn">
                <Link to="/dashboard" className="btn">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;
