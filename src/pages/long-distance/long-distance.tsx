import "./long-distance.css";
import BannerImage from "../../assets/long-distance.png";
import FleetsPage from "../../component/ourFleets/FleetsPage";
import { useState } from "react";
const LongDistanceTour = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index: any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the cancellation Policy?",
      answer:
        "Transfers can be cancelled free of charge up to 24 hours prior to your transfer. Cancellations within 24 hours may be subject to a cancellation fee.",
    },
    {
      question: "What if my flight is delayed?",
      answer:
        "Don’t worry, we’ve got you covered.When booking, simply provide your flight details and our driver will track your flight in real time. Even if your flight is delayed, your driver will be waiting for you and your group in the airport arrivals hall.Would you like me to make this in a short reassuring version for quick website highlights?",
    },
    {
      question: "How much will all of my cost?",
      answer:
        "The cost depends on your destination, vehicle type, and number of passengers. Use our instant quote calculator on the booking page to get an accurate price. All prices include taxes and tolls - no hidden fees.",
    },
    {
      question: "What is provide transfer?",
      answer:
        "A private transfer means you'll have a dedicated vehicle and professional driver just for your group. Unlike shared shuttles, you won't wait for other passengers and can travel directly to your destination in comfort.",
    },
    {
      question: "How can I pay for my booking?",
      answer:
        "We offer three payment options: pay cash directly to the driver upon arrival, complete online payment at the time of booking, or pay by card to the driver. All methods are secure and convenient.",
    },
    {
      question: "When will I meet my driver?",
      answer:
        "For airport pickups, your driver will meet you in the arrivals hall holding a sign with your name. For hotel pickups, the driver will arrive at your hotel lobby at the scheduled time. You'll receive full driver details and contact information 24 hours before your transfer.",
    },
  ];
  return (
    <div className="home-container">
      <img className="BnrImg" src={BannerImage} alt="" />
      <div className="page">
        <section className="background-img">
          <div className="page-title-wrap">
            <h1>
              <span className="title-bar"></span> Long Distance 
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
                <label className="field-label">Select Trip Type</label>
                <div className="select-wrap">
                  <select>
                    <option>Single Trip</option>
                    <option>Round Trip</option>
                    <option>Group Tour</option>
                  </select>
                </div>

                <label className="field-label">Pickup From</label>
                <div className="input-icon-wrap">
                  <input type="text" placeholder="Pickup" />
                </div>

                <label className="field-label">Destination</label>
                <div className="input-icon-wrap">
                  <input type="text" placeholder="Destination" />
                </div>

                <label className="field-label">Enter Drop Location</label>
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

                <label className="field-label">Number of passengers (Adult, children and babies)</label>
                <div className="input-icon-wrap">
                  <input type="text" placeholder="Pickup" />
                </div>

                <br />
                <div className="fare-btn-row">
                  <div className="fare-left">
                    <span className="fare-label">Total Fare :</span>
                    <span className="fare-amount">10,234.00 €</span>
                  </div>
                  <button className="btn-book-card">Confirm Book Now</button>
                </div>

                <div className="card-note">
                  *We can generally accept all bookings upto 12 hours before the
                  time of your transfer. For late booking please contact{" "}
                  <a href="tel:+33893844234">+33 893 8444 234</a>
                </div>
              </div>

              <div className="faq-accordion">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${openFaq === index ? "active" : ""}`}
                  >
                    <button
                      className={`faq-question ${
                        openFaq === index ? "active" : ""
                      }`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className="faq-chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
        </section>

        
      </div>
      <FleetsPage />
    </div>
  );
};

export default LongDistanceTour;
