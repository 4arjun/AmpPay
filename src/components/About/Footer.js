import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Us</h2>
          <p>
            Email: <a href="mailto:contact@amppay.com">contact@amppay.com</a>
          </p>
          <p>
            Phone: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
          <p>Address: 123 Energy Lane, Green City, GA 30301</p>

          <h2>Follow Us</h2>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h2>Get in Touch</h2>
          <p>
            Have any questions or need support? Fill out the form below and
            we’ll get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="4" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AmpPay. All rights reserved.</p>
        <p>Designed with 💙 team AmpPay</p>
      </div>
    </footer>
  );
};

export default Footer;
