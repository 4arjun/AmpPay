import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Features.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,
      once: false,
     });
  }, []);

  const featuresData = [
    {
      icon: `<i class="fas fa-tachometer-alt"></i>`,
      title: "Real-time Tracking",
      description: "Monitor your energy consumption instantly.",
    },
    {
      icon: `<i class="fas fa-chart-line"></i>`,
      title: "Predictive Billing",
      description:
        "Plan and adjust your energy habits with accurate bill predictions.",
    },
    {
      icon: `<i class="fas fa-star"></i>`,
      title: "Efficiency Rankings",
      description:
        "Compare your energy efficiency with neighboring households.",
    },
    {
      icon: `<i class="fas fa-leaf"></i>`,
      title: "Carbon Footprint Assessment",
      description:
        "Gain insights into the environmental impact of your energy use.",
    },
    {
      icon: `<i class="fas fa-bell"></i>`,
      title: "Proactive Notification System",
      description:
        "Set limits and receive instant alerts, encouraging proactive energy-saving measures.",
    },
    {
      icon: `<i class="fas fa-lock"></i>`,
      title: "Secure Data Management",
      description:
        "Ensure the security and privacy of your energy consumption data.",
    },
  ];

  return (
    <div className="features-container">
      <h2>Key Features</h2>
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature" data-aos="fade-up">
            <div
              className="feature-icon"
              dangerouslySetInnerHTML={{ __html: feature.icon }}
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
