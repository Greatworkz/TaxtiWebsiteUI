import "./Footer.css";
import VisaImage from "../../assets/visa.svg";
import MasterImage from "../../assets/master-card.svg";
import StripeImage from "../../assets/stripe.svg";
import AmericanImage from "../../assets/american-express.svg";
import YoutubeImage from "../../assets/youtube.svg";
import InstaImage from "../../assets/insta.svg";
import Fbimage from '../../assets/FB.svg';
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
            <img src={YoutubeImage} className="social-link" alt="" />
            <img src={Fbimage} className="social-link" alt="" />
            <img src={InstaImage} className="social-link" alt="" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;