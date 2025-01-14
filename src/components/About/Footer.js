import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Us</h2>
          <p>
            Email:{" "}
            <a className="contact-link" href="mailto:support@amppay.com">
              support@amppay.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a className="contact-link" href="tel:+91 9074966721">
              +91 9074966721
            </a>
          </p>
          <div className="social-media">
            {[
              {
                href: "https://facebook.com",
                label: "Facebook",
                iconClass: "fab fa-facebook-f",
              },
              {
                href: "https://twitter.com",
                label: "Twitter",
                iconClass: "fab fa-twitter",
              },
              {
                href: "https://instagram.com",
                label: "Instagram",
                iconClass: "fab fa-instagram",
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                iconClass: "fab fa-linkedin-in",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-center">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates and tips.</p>
          <form className="newsletter-form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-right">
          <h2>Get in Touch</h2>
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
        <p>Crafted with 💙 by Team AmpPay</p>
      </div>
    </footer>
  );
};

export default Footer;
