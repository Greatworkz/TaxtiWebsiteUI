import "./AboutPage.css";
import AboutBanner from '../../assets/about-banner.png';
import AboutPerson from '../../assets/about-person.svg';
import DrawParisImage from '../../assets/tower-draw.svg';
import FleetsPage from "../../component/ourFleets/FleetsPage";
const AboutPage = () => {
 

  return (
    <div className="about-page">

      {/* Hero Section with About Card */}
      <section className="hero-about-section">
        <div className="hero-bg">
          <img 
            src={AboutBanner}
            alt="Paris Transport Service" 
            className="hero-bg-img"
          />
        </div>
        
        <div className="hero-content">
          <div className="about-card">
            <h1 className="about-title">
              Paris <span className="title-orange">Bigger</span> Transport
            </h1>
            <p className="about-tagline">"Making every Paris journey magical"</p>
            
            <p className="about-text">
              PDAT – now better than ever we have a solution and many people is our key to success. We do the hard work of making 
              your services and luxury travel cars designed to make your journey it our utmost duty, seamless, comfortable, and memorable. With professional drivers, modern vehicles, and competitive rates, we are committed to 
              making every trip higher standards of safety, reliability, and service. From 2022 to 2025, we've continuously improved to deliver excellence. Whether it's a trip to Disneyland, a trip to Disneyland, or a 
              private tour, we've got you covered with unforgettable and worry-free.
            </p>
            <img src={AboutPerson} alt="" />
          </div>
        </div>
      </section>

      {/* My Paris Section */}
      <section className="my-paris-section">
        <div className="my-paris-container">
          <div className="my-paris-grid">
            
            {/* Left - Eiffel Tower Image */}
            <div className="paris-image-col">
              <img 
                src={DrawParisImage} 
                alt="Eiffel Tower" 
                className="eiffel-watercolor-img"
              />
            </div>

            {/* Right - Content */}
            <div className="paris-content-col">
              <div className="section-header">
                <span className="section-bar"></span>
                <h2>My Paris</h2>
              </div>

              <p className="paris-text">
                Paris is not just a city—it's an open-air writer, in lights, cobblestone streets, and the timeless beauty of the Seine. Every corner tells a story, every café invites you to linger, and every moment feels like a chapter of history unfolding. We've spent years of Paris daily life. Better, every corner of Paris with a city. And what better way to experience its beauty than with a journey that is as memorable as the destination itself? That's why we're passionate about making your trips memorable and seamless. Whether you experience the city's magic with our trusted taxi service—where every ride becomes part of your Parisian tale.
              </p>

              <button className="btn-see-more">See More</button>
            </div>

          </div>
        </div>
      </section>

      {/* Our Fleets Section */}
     <section>
      <FleetsPage />
     </section>

    </div>
  );
};

export default AboutPage;