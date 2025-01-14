import "./Carousel.css";
import img from "../images/pexels-ssteenbergenn-2966315.jpg";
import { useNavigate } from "react-router-dom";

const Carousel1 = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  const scrollSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-img">
        <img src={img} alt="Innovative Business Solutions" />
      </div>

      <div className="carousel-content">
        <h1 className="carousel-title">Transform Your Future with AmpPay</h1>
        <p className="carousel-text">
          Experience seamless solutions designed to drive success in every step
          of your journey.
        </p>
        <div className="carousel-buttons">
          <button
            onClick={(event) => scrollSection("about1", event)}
            className="btn-primary"
          >
            Discover More
          </button>
          <button className="btn-secondary" onClick={handleButtonClick}>
            Start Today
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
