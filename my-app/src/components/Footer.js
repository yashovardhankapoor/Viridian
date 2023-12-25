import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Mission</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="#">Email: shantanu.pandhre@gmail.com</a></li>
            <li><a href="#">Phone: +1 (123) 456-7890</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FAQ</h3>
          <ul>
            <li><a href="#">General</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Shipping</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Viridian. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
