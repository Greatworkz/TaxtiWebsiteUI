import "./disney-land-tour.css";
import BookingBanner from "../../assets/disney-tour-banner.png";
import DriverImage from '../../assets/professional-driver.svg';
import PaymentImage from '../../assets/payment-mode.svg';
import FreeCancelImage from '../../assets/free-cancel.svg';
import FleetsPage from "../../component/ourFleets/FleetsPage";
import Package from "../../component/Package/Package";
const DisneyLandTour = () => {
  return (
    <div>
      <div className="home-container">
        <img className="BnrImg" src={BookingBanner} alt="" />
        </div>
        <section className="quote-section container">
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
                <span>Total Fare : </span>
                <strong>10,234.00 €</strong>

              <button className="quote-btn">Request for Booking</button>
              </div>

            </div>

            {/* RIGHT – Info */}
            <div className="info-panel">
            <h2>
              <span className="Title-line"></span>
              <span className="title"></span> Instant Quote and Book
            </h2>
            <p className="sub-line">
              Enjoy door-to-door private transfers that get you to your
              destination relaxed and on time. Pre-book affordable taxi services
              to the city center, Disneyland, or the airport. Choose from
              comfortable family cars, economy minivans for groups, or luxury
              vehicles for a premium experience.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                  <img src={DriverImage} alt="" />
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
            <FleetsPage />
        </section>

        <section>
            <Package />
        </section>
    </div>
  );
};

export default DisneyLandTour;
