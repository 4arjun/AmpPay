import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Features.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const featuresData = [
    {
      icon: "🚀",
      title: "Real-time Tracking",
      description: "Monitor your energy consumption instantly.",
    },
    {
      icon: "📊",
      title: "Predictive Billing",
      description:
        "Plan and adjust your energy habits with accurate bill predictions.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 256 256">
      <path
       fill="green" d="M112.41 102.53a8 8 0 0 1 5.06-10.12l12-4A8 8 0 0 1 140 96v40a8 8 0 0 1-16 0v-28.9l-1.47.49a8 8 0 0 1-10.12-5.06M248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h8v-96a16 16 0 0 1 16-16h40V56a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v72h40a16 16 0 0 1 16 16v56h8a8 8 0 0 1 8 8m-72-64v56h40v-56Zm-80 56h64V56H96Zm-56 0h40v-96H40Z" />
      </svg>`,
      title: "Efficiency Rankings",
      description:
        "Compare your energy efficiency with neighboring households.",
    },
    {
      icon: "🌿",
      title: "Carbon Footprint Assessment",
      description:
        "Gain insights into the environmental impact of your energy use.",
    },
    {
      icon: "🔔",
      title: "Proactive Notification System",
      description:
        "Set limits and receive instant alerts, encouraging proactive energy-saving measures.",
    },
    {
      icon: "🔒",
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
          <div
            key={index}
            className="feature"
            data-aos="fade-up"
          >
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
