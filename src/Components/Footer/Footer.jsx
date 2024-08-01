import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Frontend_Assets/logo_big.png";
import ins_icon from "../Assets/Frontend_Assets/instagram_icon.png";
import printerest_icon from "../Assets/Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/Frontend_Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shopper</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={ins_icon} alt="instagram-icon" />
        </div>
        <div className="footer-icons-container">
          <img src={printerest_icon} alt="printerest-icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp-icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copy right @ 2023 - All right reserved</p>
      </div>
    </div>
  );
};
