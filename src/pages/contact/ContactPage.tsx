import "./ContactPage.css";
import BannerImage from "../../assets/contactBanner.png";
import CustomerCareImage from "../../assets/customercare.svg";
import FAQSection from "../../component/faq/FAQSection";
import { useState } from "react";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsappClick = (e: any) => {
    e.preventDefault(); // Prevent form submission

    const phoneNumber = "+919003206411"; // your number with country code (removed spaces)

    // Create message with form data
    const message = `Hello! I want to book a cab.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Message:*
${formData.message}`;

    const whatsappLink = `https://wa.me/${phoneNumber.replace(
      /[^\d]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank"); // open in new tab

    // Clear form after sending
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <div className="contact-hero">
        <img src={BannerImage} alt="contact" className="hero-banner-img" />
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left - Image */}
            <div className="contact-image-col">
              <img
                src={CustomerCareImage}
                alt="Customer support"
                className="contact-woman-img"
              />
            </div>

            {/* Right - Form */}
            <div className="contact-form-col">
            <div className="form-header">
              <span className="form-bar"></span>
              <h2>Send us a message</h2>
            </div>
            <p className="form-subtitle">
              your Satisfaction is our top priority, and we are committed to providing exceptional service and support
            </p>

            <form className="contact-form" onSubmit={handleWhatsappClick}>
              <div className="form-group">
                <label htmlFor="name">Your Name*</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="info-cards-section">
        <div className="contact-container">
          <div className="info-cards-grid">
            {/* Address Card */}
            <div className="info-card">
              <div className="info-icon info-icon-orange">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h4>Address</h4>
              <p>No. 59 Rue Saint-Andre des Arts, 75006 France.</p>
            </div>

            {/* Contact Card */}
            <div className="info-card">
              <div className="info-icon info-icon-blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Contact</h4>
              <p>01 46 33 29 64 , 01 46 33 29 64</p>
            </div>

            {/* Email Card */}
            <div className="info-card">
              <div className="info-icon info-icon-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7l9 6 9-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4>Email</h4>
              <p>No. 59 Rue Saint-Andre des Arts, 75006 France.</p>
            </div>

            {/* Google Map Card */}
            <div className="info-card">
              <div className="info-icon info-icon-red">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <h4>Google Map</h4>
              <p>
                Discover our prime location.
                <br /> <span style={{ color: "#418DFF" }}> View more</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <FAQSection />
      </section>
    </div>
  );
};

export default ContactPage;
