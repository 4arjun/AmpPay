import "./Carousel.css";
import img from "../images/pexels-ssteenbergenn-2966315.jpg";

const Carousel1 = () => {
  const scrollSection = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: "0", behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-img">
        <img src={img} alt="Carousel Background" />
      </div>

      <div className="carousel-content">
        <h1 className="carousel-title">Welcome to AmpPay</h1>
        <p className="carousel-text">
          Explore our services and find out how we can help you succeed.
        </p>
        <div className="carousel-buttons">
          <button
            onClick={(event) => {
              scrollSection("about1", event);
            }}
            className="btn-primary"
          >
            Learn More
          </button>
          <button className="btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
