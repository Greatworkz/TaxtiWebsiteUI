import "./Service.css";
import BookingBanner from "../../assets/Banner.svg";
import FAQSection from "../../component/faq/FAQSection";
import ParisAirportTourImage from "../../assets/paris-airport-transport.svg";
import DisnyImage from "../../assets/disney-transport.svg";
import ParisTourImage from "../../assets/paris-city-tour.svg";
const Service = () => {

  const services = [
    {
      id: 1,
      image: ParisAirportTourImage,
      title: "Paris Airport Transfer",
      description: "You can pre-book affordable private transfer to CDG Airport. We also provide Orly Airport private transfer, Beauvais Airport private transfer. The booked rate is fixed at the time of your order and it will not change.",
      link: "/services/airport-transfer"
    },
    {
      id: 2,
      image: DisnyImage,
      title: "Disneyland Paris Transfer",
      description: "Disneyland Paris private transfer from CDG Airport, Orly Airport, Beauvais Airport and Paris city. Our rates are fixed and up to 35% cheaper than standard Disneyland Paris taxis. We provide disney movies in our vehicles.",
      link: "/services/disneyland-transfer"
    },
    {
      id: 3,
      image: ParisTourImage,
      title: "Paris City Tour",
      description: "Book a trusted transfer service to pick you up and introduce you to the religious Revival in Paris, Pre-order travel essentials, and get all your questions in at door questions or during journey.",
      link: "/services/city-tour"
    }
  ];

  return (
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
          style={{ animationDelay: `${index * 0.1}s` }}
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
              See More
            </a>
          </div>

        </div>
      ))}

    </div>

  </section>
  );
};

export default Service;
