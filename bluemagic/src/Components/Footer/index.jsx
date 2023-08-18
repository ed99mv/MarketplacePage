import React from 'react';
import "./index.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src="https://lirp.cdn-website.com/2de1c362/dms3rep/multi/opt/hotel-ensue%C3%B1o-boutique-logo--02-640w.png" alt="Logo de la empresa" />
        </div>
        <div className="contact-info">
          <p>Contáctanos: <a href="mailto:info@tecnotech.com">info@bmtours.com</a></p>
          <p>Teléfono: +506 8796 6065</p>
        </div>
        <div className="social-links">
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <p className="footer-text">© 2023 BlueMagicTours. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;