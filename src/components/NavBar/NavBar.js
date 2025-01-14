import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/amppay.png"; // Use your provided logo path here

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (isOpen) toggleMenu();
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 80;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`navbar ${visible ? "active" : "hidden"}`}>
      <div className="logo">
        <img src={logo} alt="AmpPay Logo" />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a
          href="#"
          onClick={(e) => scrollSection("home", e)}
          className="nav-link"
        >
          Home
        </a>
        <a
          href="#about1"
          onClick={(e) => scrollSection("about1", e)}
          className="nav-link"
        >
          About
        </a>
        <a
          href="#footer"
          onClick={(e) => scrollSection("footer", e)}
          className="nav-link"
        >
          Contact
        </a>
        <Link to="/dashboard" className="nav-link" onClick={toggleMenu}>
          Dashboard
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
};

export default NavBar;
