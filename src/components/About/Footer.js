import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="footer-content">
        {/* Contact Section */}
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
          <h2>Follow Us</h2>
          <div className="social-media">
            {[
              {
                href: "https://facebook.com",
                label: "Facebook",
                svgPath:
                  "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95",
              },
              {
                href: "https://twitter.com",
                label: "Twitter",
                svgPath:
                  "M22.46 6c-.77.34-1.6.57-2.46.68A4.19 4.19 0 0 0 21.86 4a8.36 8.36 0 0 1-2.63 1 4.14 4.14 0 0 0-7.06 3.77 11.73 11.73 0 0 1-8.52-4.3 4.13 4.13 0 0 0 1.28 5.53 4.1 4.1 0 0 1-1.87-.51v.05a4.14 4.14 0 0 0 3.32 4.06 4.16 4.16 0 0 1-1.85.07 4.14 4.14 0 0 0 3.87 2.88 8.32 8.32 0 0 1-5.15 1.77A11.7 11.7 0 0 0 12 21c7.53 0 11.65-6.24 11.65-11.65v-.53A8.36 8.36 0 0 0 22.46 6",
              },
              {
                href: "https://instagram.com",
                label: "Instagram",
                svgPath:
                  "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3",
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                svgPath:
                  "M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z",
              },
            ].map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={icon.label}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                  <path fill="currentColor" d={icon.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="footer-right">
          <h2>Get in Touch</h2>
          <p>
            Have any questions or need support? Fill out the form below and we’ll get back to you as soon as possible.
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

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AmpPay. All rights reserved.</p>
        <p>Designed with 💙 by Team AmpPay</p>
      </div>
    </footer>
  );
};

export default Footer;
