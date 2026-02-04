import "./Booking.css";
import BookingBanner from "../../assets/Banner.svg";
import HourlyPackage from "../../component/hourly-package/HourlyPackage";
import FAQSection from "../../component/faq/FAQSection";
import DriverImage from '../../assets/professional-driver.svg';
import PaymentImage from '../../assets/payment-mode.svg';
import FreeCancelImage from '../../assets/free-cancel.svg';
const Booking = () => {
  return (
    <div>
      <div className="home-container">
        <img className="BnrImg" src={BookingBanner} alt="" />
        </div>
        <section className="quote-section">
          <div className="quote-grid">
            {/* LEFT – Booking Card */}
            <div className="quote-card">
              <label>Trip Type</label>
              <select>
                <option>Single Trip</option>
              </select>

              <label>Pickup From</label>
              <input placeholder="Pickup Location" />

              <label>Destination</label>
              <select>
                <option>Select Destination</option>
              </select>

              <div className="row">
                <div>
                  <label>Passengers</label>
                  <select>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <label>Vehicle Type</label>
                  <select>
                    <option>Business Class Van</option>
                  </select>
                </div>
              </div>

              <div className="fare-row">
                <span>Total Fare</span>
                <strong>10,234.00 €</strong>
              </div>

              <button className="quote-btn">Request for Booking</button>
            </div>

            {/* RIGHT – Info */}
            <div className="info-panel">
            <h2>
              <span className="Title-line"></span>
              <span className="title"></span> Instant Quote and Book
            </h2>
            <p>
              Enjoy door-to-door private transfers that get you to your
              destination relaxed and on time. Pre-book affordable taxi services
              to the city center, Disneyland, or the airport. Choose from
              comfortable family cars, economy minivans for groups, or luxury
              vehicles for a premium experience.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                {/* <div className="feat-icon"> */}
                  {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="7"
                      r="3.5"
                      stroke="#666"
                      stroke-width="1.7"
                    />
                    <path
                      d="M5 21c0-3.87 3.13-7 7-7s7 3.13 7 7"
                      stroke="#666"
                      stroke-width="1.7"
                      stroke-linecap="round"
                    />
                  </svg> */}
                  <img src={DriverImage} alt="" />
                {/* </div> */}
                <div className="feat-text">
                  <strong>
                    <span className="accent">Professional</span> Driver
                  </strong>
                  <span>
                    Our drivers are skilled, well travelled and have years of
                    journey experiences.
                  </span>
                </div>
              </div>

              <div className="feature-item">
                {/* <div className="feat-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      stroke="#666"
                      stroke-width="1.7"
                    />
                    <path
                      d="M9 9l6 6M15 9l-6 6"
                      stroke="#666"
                      stroke-width="1.7"
                      stroke-linecap="round"
                    />
                  </svg>
                </div> */}
                <img src={FreeCancelImage} alt="" />
                <div className="feat-text">
                  <strong>
                    <span className="accent">Free</span> Cancellation
                  </strong>
                  <span>
                    Transfers can be cancelled free of charge up to 24 hours
                    prior to your transfer
                  </span>
                </div>
              </div>

              <div className="feature-item">
                {/* <div className="feat-icon"> */}
                  {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="5"
                      width="20"
                      height="14"
                      rx="2.5"
                      stroke="#666"
                      stroke-width="1.7"
                    />
                    <path d="M2 10h20" stroke="#666" stroke-width="1.7" />
                    <path
                      d="M6 15h4"
                      stroke="#666"
                      stroke-width="1.7"
                      stroke-linecap="round"
                    />
                  </svg> */}
                  <img src={PaymentImage} alt="" />
                {/* </div> */}
                <div className="feat-text">
                  <strong>
                    <span className="accent">Payment</span> Mode
                  </strong>
                  <span>
                    We provide three payment options. ( Pay cash to the driver,
                    Online payment or pay by card to the driver)
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="quote-sec-bottom">
            <p>*We can generally accept all bookings upto 12 hours before the time of your transfer. For late booking please contact <span className="clrBlue">+33 893 8444 234</span> </p>
          </div>
        </section>

       
        <section>
          <FAQSection/>
        </section>
        <section>
          <HourlyPackage />
        </section>


      
    </div>
  );
};

export default Booking;
