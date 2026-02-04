
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

//         {/* About / Logo */}
//         <div className="footer-col">
//           <h3 className="footer-title">Paris Transfers</h3>
//           <p>
//             Luxury car hire service in Paris. Private transfers, hourly packages, and sightseeing tours.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-col">
//           <h4 className="footer-title">Quick Links</h4>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Hourly Packages</a></li>
//             <li><a href="#">Airport Transfers</a></li>
//             <li><a href="#">Tours</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="footer-col">
//           <h4 className="footer-title">Contact</h4>
//           <ul>
//             <li>Email: info@paristransfers.com</li>
//             <li>Phone: +33 1 23 45 67 89</li>
//             <li>Address: 12 Rue de Paris, 75001 Paris, France</li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div className="footer-col">
//           <h4 className="footer-title">Newsletter</h4>
//           <p>Subscribe to get the latest updates and offers:</p>
//           <form className="footer-form">
//             <input type="email" placeholder="Your email" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>

//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Paris Transfers. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Brand Column */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <span className="logo-letter logo-p">P</span>
              <span className="logo-letter logo-d">D</span>
              <span className="logo-letter logo-t">T</span>
            </div>
            <p className="footer-tagline">
              From airport transfers to Disneyland Paris and city tours, we ensure comfort, safety, and top-class service.
            </p>
          </div>

          {/* Tour Packages Column */}
          <div className="footer-col">
            <h4 className="footer-title">Tour Packages</h4>
            <ul className="footer-list">
              <li><a href="#airport">Airport</a></li>
              <li><a href="#disneyland">Disneyland Paris</a></li>
              <li><a href="#paris">Paris City</a></li>
            </ul>
          </div>

          {/* Support Links Column */}
          <div className="footer-col">
            <h4 className="footer-title">Support links</h4>
            <ul className="footer-list">
              <li><a href="#terms">Terms &amp; Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          {/* Payment Method Column */}
          <div className="footer-col footer-payment">
            <h4 className="footer-title">Payment Method</h4>
            <div className="payment-cards">
              <img src="/images/mastercard-logo.png" alt="Mastercard" className="payment-logo" />
              <img src="/images/visa-logo.png" alt="VISA" className="payment-logo" />
              <img src="/images/stripe-logo.png" alt="Stripe" className="payment-logo" />
              <img src="/images/amex-logo.png" alt="American Express" className="payment-logo" />
            </div>
            <p className="payment-note">
              We also provide Payment by cash to the driver options.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © 2025 PDAT &nbsp;&nbsp;&nbsp; All Rights Reserved
          </p>
          
          <div className="footer-social">
            {/* YouTube */}
            <a href="#youtube" className="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="#facebook" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#instagram" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;