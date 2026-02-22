import "./Service.css";
import BookingBanner from "../../assets/Banner.svg";
import ParisAirportTourImage from "../../assets/paris-airport-transport.svg";
import DisnyImage from "../../assets/disney-transport.svg";
import ParisTourImage from "../../assets/paris-city-tour.svg";
import FAQSection from "../../component/faq/FAQSection";
import LongDistance from "../../assets/paris-trip-2.svg";
import "aos/dist/aos.css";
const Service = () => {

  const services = [
    {
      id: 1,
      image: ParisAirportTourImage,
      title: "Paris Airport Transfer",
      description: "You can pe-order inexpensive private transfer to CDG Airport, Also we provide Orly airport private transfer, Bauvais airport private transfer. The transfer cost is fixed at the time of pre-order and never raises.",
      link: "/TaxtiWebsiteUI/airport/transfer"
    },
    {
      id: 2,
      image: DisnyImage,
      title: "Disneyland Paris Transfer",
      description: "Disneyland Paris private transfers from CDG Airport, Orly Airport, Bauvais Airport and Paris city. Our prices are fixed & 35% cheaper than Disneyland paris taxi. We provide also Disney movies in our vehicles.",
      link: "/TaxtiWebsiteUI/disney/tour"
    },
    {
      id: 3,
      image: ParisTourImage,
      title: "Paris City Tour",
      description: "Book a trusted transfer service to pick you up and introduce you to the Historica Places in Paris, Pre-order travel essentials, and get all your questions answered before or during the trip.",
      link: "/TaxtiWebsiteUI/pariscity/tour"
    },
    {
      id: 4,
      image: LongDistance,
      title: "Long Distance ",
      description: "Book now your Private Paris city tour to visit most  city in the world in one day. Comfortable Car for the family with children, Mercedes minivan for a group or a Luxury transfer.",
      link: "/TaxtiWebsiteUI/long/distance/tour"
    }
  ];

  return (
   
    <div>
       <section className="services-section">
      
      {/* Dark Banner Image */}
      <div className="services-banner">
        <img 
          src={BookingBanner} 
          alt="Paris Street Traffic" 
          className="banner-img"
        />
        <div className="banner-overlay"></div>
      </div>
  
      {/* Services Cards Container */}
      <div className="services-container">
        
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="service-card"
            style={{ animationDelay: `${index * 0.3}s` }}
            
          >
            
            {/* Left - Service Image */}
            <div className="service-image-wrap">
              <img 
                src={service.image} 
                alt={service.title}
                className="service-img"
              />
            </div>
  
            {/* Right - Service Content */}
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <a href={service.link} className="btn-see-more">
                View More
              </a>
            </div>
  
          </div>
        ))}
  
      </div>
  
    </section>

    <section>
        <FAQSection />
    </section>
    </div>

  
  );
};

export default Service;
