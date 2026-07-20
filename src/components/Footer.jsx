import React from 'react';
import '../css/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="footer-links">
          
        <a
  href="https://www.linkedin.com/in/kiran-dhule-7552873bb"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>
          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
            Naukri
          </a>
          <a href="mailto:kirandhule50@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
