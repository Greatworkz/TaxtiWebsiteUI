import "./Package.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Package = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/disney/tour");
  };
  const transfers = [
    {
      title: "CDG Airport to Disneyland Transfer",
      prices: [
        { passengers: "1-3 Passengers", price: "70 €" },
        { passengers: "4 Passengers", price: "90 €" },
        { passengers: "5 Passengers", price: "90 €" },
        { passengers: "6 Passengers", price: "90 €" },
        { passengers: "7 Passengers", price: "120 €" },
        { passengers: "8 Passengers", price: "120 €" },
        { passengers: "9 Passengers", price: "140 €" },
      ],
    },
    {
      title: "Orly Airport to Disneyland Transfer",
      prices: [
        { passengers: "1-3 Passengers", price: "60 €" },
        { passengers: "4 Passengers", price: "80 €" },
        { passengers: "5 Passengers", price: "80 €" },
        { passengers: "6 Passengers", price: "80 €" },
        { passengers: "7 Passengers", price: "100 €" },
        { passengers: "8 Passengers", price: "100 €" },
        { passengers: "9 Passengers", price: "120 €" },
      ],
    },
    {
      title: "Belleville Airport to Disneyland Transfer",
      prices: [
        { passengers: "1-3 Passengers", price: "70 €" },
        { passengers: "4 Passengers", price: "90 €" },
        { passengers: "5 Passengers", price: "90 €" },
        { passengers: "6 Passengers", price: "90 €" },
        { passengers: "7 Passengers", price: "120 €" },
        { passengers: "8 Passengers", price: "120 €" },
        { passengers: "9 Passengers", price: "140 €" },
      ],
    },
  ];

  return (
    <section className="disney-transfers-section">
      <div className="disney-container">
        {/* Header */}
        <div className="disney-header">
          <h2 className="disney-title">
            Paris <span className="title-disney">Disney</span> Transfers
          </h2>
          <p className="disney-subtitle">
            Over <b>5+</b> customers choose us: Paris to Disneyland Transfers
            that never stops. With us, you'll never face returned journey even
            if your flight is running late.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        {/* <div className="pricing-cards-grid">
          {transfers.map((transfer, index) => (
            <div key={index} className="pricing-card">
              <h3 className="card-title">{transfer.title}</h3>
              
              <div className="price-list">
                {transfer.prices.map((item, idx) => (
                  <div key={idx} className="price-row">
                    <span className="passengers">{item.passengers}</span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
              </div>

              <button className="btn-book-now">Book Now</button>
            </div>
          ))}
        </div> */}

        <div className="pricing-cards-grid">
          {transfers.map((transfer, index) => (
            <div
              key={index}
              className="pricing-card"
              data-aos="fade-left"
              data-aos-delay={index * 150}
            >
              <h3 className="card-title">{transfer.title}</h3>

              <div className="price-list">
                {transfer.prices.map((item, idx) => (
                  <div key={idx} className="price-row">
                    <span className="passengers">{item.passengers}</span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
              </div>

              <button className="btn-book-now" onClick={handleBookNow}>Book Now</button>
            </div>
          ))}
        </div>

        {/* Footer Discount Text */}
        <p className="discount-text">*Above prices for economy class</p>
      </div>
    </section>
  );
};

export default Package;
