import "./Vision.css";
import { useState, useEffect, useRef } from "react";

const Vision = () => {
  const [visibleHeader, setVisibleHeader] = useState(false);
  const [fadeInIntro, setFadeInIntro] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleHeader(true);
          setFadeInIntro(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="vision" className="vision-container" ref={sectionRef}>
      <div className="vision-inner">
        <h1
          className={`vision-title ${
            visibleHeader ? "active_header2" : "hidden2"
          }`}
        >
          About Us
        </h1>
        <div className="vision-bottom">
          <div className={`vision-intro ${fadeInIntro ? "fade-in" : ""}`}>
            <p>
              Welcome to AmpPay – your gateway to empowered energy management.
              Founded by a team passionate about sustainability, AmpPay offers a
              comprehensive solution for tracking, managing, and optimizing
              energy consumption. Our platform delivers real-time tracking,
              predictive insights, and personalized recommendations to help you
              achieve your energy goals. Explore AmpPay today and take control
              of your energy like never before.
            </p>
          </div>
          <div className="vision-img">
            <img
              src="https://adamsyy.github.io/tedx-2022/metamorphosis-removebg.png"
              alt="Vision"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
