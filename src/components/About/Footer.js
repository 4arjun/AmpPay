import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-container">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AmpPay. All rights reserved.</p>
        <p>Crafted with 💙 by Team AmpPay</p>
      </div>
    </footer>
  );
};

export default Footer;
