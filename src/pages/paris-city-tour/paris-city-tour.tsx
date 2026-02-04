import './paris-city-tour.css';
import BannerImage from '../../assets/paris-city-tour-view.png';
import DriverImage from '../../assets/professional-driver.svg';
import PaymentImage from '../../assets/payment-mode.svg';
import FreeCancelImage from '../../assets/free-cancel.svg';
import FleetsPage from '../../component/ourFleets/FleetsPage';
const ParisCityTour = () => {
  return (
    <div>
        <div className='BnrImg'>
            <img src={BannerImage} alt="" />
        </div>
      <div className="page">
        
        <div className="page-title-wrap">
          <h1>
            <span className="title-bar"></span> Paris City Tour
          </h1>
          <p>
            Book now your Private Paris city tour to visit most city in the
            world in one day. Comfortable Car for the family with children,
            Mercedes minivan for a group or a Luxury transfer.
          </p>
        </div>

        <div className="quote-grid">
          <div className="card">
            <div className="card-heading">1/2 Quick Quote</div>

            <div className="notes-block">
              <div className="note">
                <span className="note-label">Note:</span>
                <span className="note-text">
                  {" "}
                  The booking must be done minimum before 3 hours through online
                  booking
                </span>
              </div>
              <div className="note">
                <span className="note-text">
                  Night time charge is 10€{" "}
                  <span className="note-black">between 10pm to 6pm</span>
                </span>
              </div>
            </div>

            <label className="field-label">Select a Tour Package</label>
            <div className="select-wrap">
              <select>
                <option>Single Trip</option>
                <option>Round Trip</option>
                <option>Group Tour</option>
              </select>
            </div>

            <div className="checkbox-row">
              <div className="checkbox-box"></div>
              <div className="checkbox-text">
                <span className="cb-label">
                  Add your Preferred place to the tour
                </span>
                <span className="cb-sub">
                  No extra charges. The places must be in Paris
                </span>
              </div>
            </div>

            <div className="textarea-wrap">
              <textarea placeholder="Describe your plan"></textarea>
            </div>

            <div className="price-per-hour">€50 EUR Per Hour</div>

            <label className="field-label">Pickup From</label>
            <div className="input-icon-wrap">
              <input type="text" placeholder="Pickup Location" />
              <svg
                className="pin-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  stroke="#666"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12"
                  cy="9"
                  r="2.5"
                  stroke="#666"
                  stroke-width="1.8"
                />
              </svg>
            </div>
            <div className="field-warning">
              Additional Charge will be added if your pick up location is
              outside the paris
            </div>

            <label className="field-label">Destination</label>
            <div className="select-wrap">
              <select>
                <option>Select Destination</option>
                <option>Eiffel Tower</option>
                <option>Louvre Museum</option>
                <option>Notre Dame</option>
                <option>Arc de Triomphe</option>
              </select>
            </div>
            <div className="field-warning">
              Additional Charge will be added if your pick up location is
              outside the paris
            </div>

            <div className="fare-btn-row">
              <div className="fare-left">
                <span className="fare-label">Total Fare :</span>
                <span className="fare-amount">10,234.00 €</span>
              </div>
              <button className="btn-book">Book Now</button>
            </div>

            <div className="card-note">
              *We can generally accept all bookings upto 12 hours before the
              time of your transfer. For late booking please contact{" "}
              <a href="tel:+33893844234">+33 893 8444 234</a>
            </div>
          </div>

          <div className="info-panel">
            <h2>
              <span className="title-bar"></span> Instant Quote and Book
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
        
      </div>
      <FleetsPage />
    </div>
  );
};

export default ParisCityTour;
