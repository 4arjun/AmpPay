import { useEffect } from "react";
import "./Card.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Card = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div className="card-container">
      <div className="card left" data-aos="fade-up">
        <h3>Our Story</h3>
        <p>
          AmpPay's journey is marked by innovation and dedication. From the
          inception of our idea to the implementation of cutting-edge solutions,
          we've overcome challenges and reached key milestones. Driven by a
          passion to create a positive impact, we aim to revolutionize energy
          consumption.
        </p>
      </div>

      <div className="card right" data-aos="fade-up" data-aos-delay="200">
        <h3>Our Vision</h3>
        <p>
          At AmpPay, we envision a future where energy efficiency is seamlessly
          integrated into everyday life. Our commitment to improvement and
          innovation drives us to shape a sustainable way of living. Together,
          we can build a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Card;
