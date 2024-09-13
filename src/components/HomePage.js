import "./HomePage.css";
import NavBar from "./NavBar/NavBar";
import About from "./About/About";
import React, { useState, useEffect } from "react";
import Carousel1 from "./Carousel";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-container">
      {loading ? (
        <div id="loader">
          <h1 className="loading-animation">
            <span>🅰</span>
            <span>🅼</span>
            <span>🅿</span>
            <span>🅿</span>
            <span>🅰</span>
            <span>🆈</span>
          </h1>
        </div>
      ) : (
        <div className="content-container">
          <NavBar />
          <Carousel1 />
          <About />
        </div>
      )}
    </div>
  );
};

export default HomePage;
