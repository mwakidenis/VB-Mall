import React from "react";
import "./Footer.css";
import {
  FaDiscord,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaHome,
  FaQuestionCircle,
  FaInfoCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaCertificate,
  FaUsers,
  FaShieldAlt,
  FaUndoAlt,
  FaFileContract,
  FaTruck,
  FaRecycle,
  FaBoxOpen,
  FaHeadset,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";
import googlePlay from "../../../assets/google-play.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo-link" onClick={scrollToTop} aria-label="VigyBag home">
              <img src={Logo} alt="VigyBag Logo" className="brand-logo" />
            </Link>

            <div className="app-badge-wrapper">
              <a
                href="https://play.google.com/store/apps/details?id=com.vigybag"
                target="_blank"
                rel="noopener noreferrer"
                className="app-badge"
              >
                <img src={googlePlay} alt="Google Play" className="app-icon" />
                <span className="app-text">
                  <small>GET IT ON</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <FaHome className="li-icon" />
                <Link to="/" onClick={scrollToTop} className="link-3d">Home</Link>
              </li>
              <li>
                <FaQuestionCircle className="li-icon" />
                <Link to="/faq" onClick={scrollToTop} className="link-3d">FAQ</Link>
              </li>
              <li>
                <FaInfoCircle className="li-icon" />
                <Link to="/about-us" onClick={scrollToTop} className="link-3d">About Us</Link>
              </li>
              <li>
                <FaPhone className="li-icon" />
                <Link to="/contact" onClick={scrollToTop} className="link-3d">Contact us</Link>
              </li>
              <li>
                <FaBriefcase className="li-icon" />
                <Link to="/career" onClick={scrollToTop} className="link-3d">Careers</Link>
              </li>

              {/* Disabled links - Coming Soon */}
              <li>
                <FaCertificate className="li-icon" />
                <span
                  className="link-disabled"
                  role="link"
                  aria-disabled="true"
                  tabIndex={-1}
                  title="Coming soon"
                >
                  Certification Page
                  <span className="sr-only"> (Coming soon)</span>
                </span>
              </li>
              <li>
                <FaUsers className="li-icon" />
                <span
                  className="link-disabled"
                  role="link"
                  aria-disabled="true"
                  tabIndex={-1}
                  title="Coming soon"
                >
                  Meet our contributor
                  <span className="sr-only"> (Coming soon)</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-policies">
            <h4>Consumer Policy</h4>
            <ul>
              <li>
                <FaBoxOpen className="li-icon" />
                <Link to="/myorders" onClick={scrollToTop} className="link-3d">Order</Link>
              </li>
              <li>
                <FaHeadset className="li-icon" />
                <Link to="/help" onClick={scrollToTop} className="link-3d">Help</Link>
              </li>
              <li>
                <FaShieldAlt className="li-icon" />
                <Link to="/privacy-policy" onClick={scrollToTop} className="link-3d">Privacy Policy</Link>
              </li>
              <li>
                <FaUndoAlt className="li-icon" />
                <Link to="/return-and-cancellation" onClick={scrollToTop} className="link-3d">Return & Cancellation</Link>
              </li>
              <li>
                <FaFileContract className="li-icon" />
                <Link to="/terms-and-condition" onClick={scrollToTop} className="link-3d">Terms & Conditions</Link>
              </li>
              <li>
                <FaTruck className="li-icon" />
                <Link to="/shipping" onClick={scrollToTop} className="link-3d">Shipping</Link>
              </li>
              <li>
                <FaRecycle className="li-icon" />
                <Link to="/epr-compliance" onClick={scrollToTop} className="link-3d">EPR Compliance</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Registered Office Address:</h4>
            <address>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon location-icon" />
                <span className="address-line">Kanpur, Uttar Pradesh 208025</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon email-icon" />
                <a href="mailto:vigybag@gmail.com">vigybag@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon phone-icon" />
                <a href="tel:+911234567890">+91 1234567890</a>
              </div>
            </address>

            <div className="socials" aria-label="Social media links">
              <a href="https://www.instagram.com/vigybag/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><FaInstagram className="social-icon" /></a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="social-link"><BsTwitterX className="social-icon" /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><FaFacebookF className="social-icon" /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><FaLinkedinIn className="social-icon" /></a>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link"><FaWhatsapp className="social-icon" /></a>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="social-link"><FaDiscord className="social-icon" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© {new Date().getFullYear()} VigyBag. All rights reserved</div>
          <div className="payment">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods" />
          </div>
          <nav className="footer-nav">
            <Link to="/service" onClick={scrollToTop}>Our Services</Link>
            <Link to="/gift-card" onClick={scrollToTop}>Gift Cards</Link>
            <Link to="/payment-page" onClick={scrollToTop}>Payments</Link>
            <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
