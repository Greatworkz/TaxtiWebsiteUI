import "./AboutPage.css";
import AboutBanner from "../../assets/about-banner.png";
import AboutPerson from "../../assets/about-person.svg";
import DrawParisImage from "../../assets/tower-draw.svg";
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
            <div className="cnt-section">
              <h1 className="about-title">
                Paris <span className="title-orange">Disney</span> Transport
              </h1>
              <p className="about-tagline">
                “Making every Paris journey magical”
              </p>

              <p className="about-text">
                At PDT – Paris Disney Transport, we specialize in providing
                reliable taxi services and luxury rental cars designed to make
                your journeys in and around Paris seamless, comfortable, and
                memorable. With government approval and only certified, highly
                experienced drivers, we are committed to maintaining the highest
                standards of safety and service. Since 2022, we have proudly
                earned the trust of thousands of travelers, ensuring every ride
                is smooth, secure, and stress-free. Whether it’s a city
                transfer, a trip to Disneyland, or a private tour, our goal is
                to make your travel experience both enjoyable and worry-free.
              </p>
            </div>
            <div className="about-person-img">
              <img src={AboutPerson} alt="" />
            </div>
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
                Paris is not just a city—it is a poem written in lights,
                cobblestone streets, and timeless charm. From the gentle glow of
                the Eiffel Tower to the whispers of history along the Seine,
                every corner of Paris tells a story. And what better way to
                embrace its beauty than with a journey that is as comfortable as
                it is memorable? As proud citizens of Paris, we invite you to
                experience the city’s magic with our trusted taxi service—where
                every ride becomes part of your Parisian tale.
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
