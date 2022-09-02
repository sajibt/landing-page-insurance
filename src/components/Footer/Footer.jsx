import React from "react";
import "./Footer.scss";
import { images } from "../../images";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-art">
          <source media="(max-width: 767px)" srcset={images.footer_mob} />
          <img src={images.footer} alt="footerimg" />
        </div>
        <div className="container">
          <div className="footer">
            <div className="footer__header">
              <div className="logo">
                <img src={images.logo} alt="footer_logo" />
              </div>
              <div className="media-icon">
                <img src={images.fb} alt="footer_logo" />
                <img src={images.twitter} alt="footer_logo" />
                <img src={images.insta} alt="footer_logo" />
                <img src={images.pinterest} alt="footer_logo" />
              </div>
            </div>
            <div className="footer__menu">
              <div className="company">
                <h4> Our Company</h4>
                <ul>
                  <li> How we work </li>
                  <li> Why insure</li>
                  <li>view plans</li>
                  <li>Reviws</li>
                </ul>
              </div>
              <div className="company">
                <h4>Help</h4>
                <ul>
                  <li>FAQ</li>
                  <li>Terms Of Use</li>
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                </ul>
              </div>
              <div className="company">
                <h4>Contact</h4>
                <ul>
                  <li>Sals</li>
                  <li>Support</li>
                  <li>Live chat</li>
                </ul>
              </div>
              <div className="company">
                <h4>Others</h4>
                <ul>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>LIcense</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
