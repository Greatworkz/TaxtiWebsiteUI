import "./Footer.css";
import VisaImage from "../../assets/visa.svg";
import MasterImage from "../../assets/master-card.svg";
import StripeImage from "../../assets/stripe.svg";
import AmericanImage from "../../assets/american-express.svg";
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
              <img src={MasterImage} alt="Mastercard" className="payment-logo" />
              <img src={VisaImage} alt="VISA" className="payment-logo" />
              <img src={StripeImage} alt="Stripe" className="payment-logo" />
              <img src={AmericanImage} alt="American Express" className="payment-logo" />
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