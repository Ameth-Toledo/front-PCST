import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about-section">
          <h2 className="footer-about-section-h2">PCStore</h2>
          <p className="footer-about-section-p">
            PCStore es una tienda en línea de alta calidad para ayudarte a
            alcanzar a adquirir productos a mejores precios. Únete a nuestra
            comunidad y comienza a comprar hoy.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons-a">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons-a">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons-a">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons-a">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>

        <div className="footer-contact-section">
          <h3 className="footer-contact-section-h3">Contáctanos</h3>
          <p className="footer-contact-section-p">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-contact-section-icon" /> 123 Calle Principal, Ciudad de México
          </p>
          <p className="footer-contact-section-p">
            <FontAwesomeIcon icon={faPhone} className="footer-contact-section-icon" /> +52 55 1234 5678
          </p>
          <p className="footer-contact-section-p">
            <FontAwesomeIcon icon={faEnvelope} className="footer-contact-section-icon" /> info@upeducation.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-p">&copy; {new Date().getFullYear()} PCStore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
