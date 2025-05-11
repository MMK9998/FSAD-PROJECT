// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>CineBooker</h3>
          <p>The easiest way to book movie tickets online. Get the best seats, exclusive offers, and a seamless booking experience.</p>
          <div className="social-links">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Theaters</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@cinebooker.com</li>
            <li>Phone: +91 8888888888</li>
            <li>Address: 1234 Movie Lane, Cinema City, MC 12345</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 CineBooker. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
