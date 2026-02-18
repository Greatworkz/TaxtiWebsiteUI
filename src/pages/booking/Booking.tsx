import "./Booking.css";
import BookingBanner from "../../assets/Banner.svg";
import HourlyPackage from "../../component/hourly-package/HourlyPackage";
import FAQSection from "../../component/faq/FAQSection";
import DriverImage from "../../assets/professional-driver.svg";
import PaymentImage from "../../assets/payment-mode.svg";
import FreeCancelImage from "../../assets/free-cancel.svg";
import { useState } from "react";
const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [extraTypeFrom, setExtraTypeFrom] = useState("");
  const [extraTypeTo, setExtraTypeTo] = useState("");

  const FromLocation = [
    {
      id: "From_1",
      label: "Charles de Gaulle Airport (CDG)",
      value: "Charles de Gaulle Airport (CDG)",
    },
    {
      id: "From_2",
      label: "Orly Airport (ORY)",
      value: "Orly Airport (ORY)",
    },
    {
      id: "From_3",
      label: "Beauvais Airport (BVA)",
      value: "Beauvais Airport (BVA)",
    },
    {
      id: "From_4",
      label: "Disneyland & Hotels",
      value: "Disneyland & Hotels",
      type: "DISNEY",
    },
    {
      id: "From_5",
      label: "Paris (Hotels, Apartments, Historic, Monuments)",
      value: "Paris (Hotels, Apartments, Historic, Monuments)",
      type: "ADDRESS",
    },
    {
      id: "From_6",
      label: "Paris Train Stations",
      value: "Paris Train Stations",
      type: "TRAIN",
    },
    {
      id: "From_7",
      label: "Airport Hotels",
      value: "Airport Hotels",
      type: "AIRPORT_HOTEL",
    },
    {
      id: "From_8",
      label: "Versailles",
      value: "Versailles",
    },
  ];

  const ToLocation = [
    {
      id: "To_1",
      label: "Charles de Gaulle Airport (CDG)",
      value: "Charles de Gaulle Airport (CDG)",
    },
    {
      id: "To_2",
      label: "Orly Airport (ORY)",
      value: "Orly Airport (ORY)",
    },
    {
      id: "To_3",
      label: "Beauvais Airport (BVA)",
      value: "Beauvais Airport (BVA)",
    },
    {
      id: "To_4",
      label: "Disneyland & Hotels",
      value: "Disneyland & Hotels",
      type: "DISNEY",
    },
    {
      id: "To_5",
      label: "Paris (Hotels, Apartments, Historic, Monuments)",
      value: "Paris (Hotels, Apartments, Historic, Monuments)",
      type: "ADDRESS",
    },
    {
      id: "To_6",
      label: "Paris Train Stations",
      value: "Paris Train Stations",
      type: "TRAIN",
    },
    {
      id: "To_7",
      label: "Airport Hotels",
      value: "Airport Hotels",
      type: "AIRPORT_HOTEL",
    },
    {
      id: "To_8",
      label: "Versailles",
      value: "Versailles",
    },
  ];

  const trainStations = [
    "Gare de Nord",
    "Gare de Lyon",
    "Gare de L'Est",
    "Gare St Lazare",
    "Gare de Bercy",
    "Gare Montparnasse",
  ];

  const airportHotels = [
    "CDG Airport Hotels",
    "Orly Airport Hotels",
    "Beauvais Airport Hotels",
  ];

  const disneyLocations = [
    "Disneyland Paris (Park)",
    "Disneyland Hotel",
    "Disney's Hotel Newport Bay Club",
    "Disney's Hotel Marvel New York",
    "Disney's Hotel Cheyenne",
    "Disney's Hotel Sequoia Lodge",
    "Disney's Hotel Santa Fe",
    "Hotel Explorers",
    "Grand Magic Hotel",
    "Hotel B&B Disney",
    "Campanille Val de France Disney",
    "Village Nature Center Parc",
    "Davy Crockett Ranch",
    "Adagio Val d'Europe",
    "Staycity Marne la Valée",
    "Marriott's Village",
    "Hotel Radisson Blu",
    "Ibis Val d'Europe",
    "Relais SPA",
    "Resid'home",
    "Hotel Moxy Val d'Europe",
    "Séjours Affaires Apparthotel",
    "Gare Marne la Vallée",
    "Airbnb around Disney",
    "Val d'Europe Shopping Center",
    "Vallée Village",
    "Others",
  ];

  const vehicleTypes = [
    "Sedan (1-3 passengers)",
    "SUV (1-4 passengers)",
    "Minivan (1-7 passengers)",
    "Business Class Van",
    "Luxury Sedan",
    "Luxury SUV",
    "Minibus (8-15 passengers)",
  ];

  // Form data state
  const [formData, setFormData] = useState({
    // Step 1 - Basic Trip Details (6 fields)
    tripType: "single",
    pickupLocation: "",
    dropLocation: "",
    passengers: "5",
    vehicleType: "",
    pickupDate: "",

    // Step 2 - Additional Details
    pickupTime: "",
    returnPickupDate: "",
    returnPickupTime: "",
    luggage: "",
    numberOfChildren: "0",
    trainNumber: "",
    flightNumber: "",

    // Extra location details for pickup
    pickupAddress: "",
    pickupTrainStation: "",
    pickupAirportHotel: "",
    pickupDisneyLocation: "",

    // Extra location details for drop
    dropAddress: "",
    dropTrainStation: "",
    dropAirportHotel: "",
    dropDisneyLocation: "",

    // Step 3 - Customer Information
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    paymentmethod: "",

    // Total
    totalFare: "10,234.00",
  });

  const handleFromChange = (e: any) => {
    const value = e.target.value;
    setSelectedFrom(value);

    const selectedItem = FromLocation.find((item) => item.value === value);
    setExtraTypeFrom(selectedItem?.type || "");

    setFormData((prev) => ({
      ...prev,
      pickupLocation: value,
      pickupAddress: "",
      pickupTrainStation: "",
      pickupAirportHotel: "",
      pickupDisneyLocation: "",
    }));
  };

  const handleToChange = (e: any) => {
    const value = e.target.value;
    setSelectedTo(value);

    const selectedItem = ToLocation.find((item) => item.value === value);
    setExtraTypeTo(selectedItem?.type || "");

    setFormData((prev) => ({
      ...prev,
      dropLocation: value,
      dropAddress: "",
      dropTrainStation: "",
      dropAirportHotel: "",
      dropDisneyLocation: "",
    }));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const sendBookingEmail = async () => {
    try {
      // Get the specific pickup location details
      let pickupDetails = formData.pickupLocation;
      if (formData.pickupAddress)
        pickupDetails += ` - ${formData.pickupAddress}`;
      if (formData.pickupTrainStation)
        pickupDetails += ` - ${formData.pickupTrainStation}`;
      if (formData.pickupAirportHotel)
        pickupDetails += ` - ${formData.pickupAirportHotel}`;
      if (formData.pickupDisneyLocation)
        pickupDetails += ` - ${formData.pickupDisneyLocation}`;

      // Get the specific drop location details
      let dropDetails = formData.dropLocation;
      if (formData.dropAddress) dropDetails += ` - ${formData.dropAddress}`;
      if (formData.dropTrainStation)
        dropDetails += ` - ${formData.dropTrainStation}`;
      if (formData.dropAirportHotel)
        dropDetails += ` - ${formData.dropAirportHotel}`;
      if (formData.dropDisneyLocation)
        dropDetails += ` - ${formData.dropDisneyLocation}`;

      const outputMessage = `
NEW DISNEYLAND TOUR BOOKING - PRAISE CABS
═══════════════════════════════════════════════════════════

BOOKING DETAILS
Trip Type: ${formData.tripType === "single" ? "Single Trip" : "Round Trip"}
Booking Date: ${new Date().toLocaleString()}

TRAVEL DETAILS
Number of Passengers: ${formData.passengers}
Vehicle Type: ${formData.vehicleType || "Not specified"}
Luggage: ${formData.luggage || "Not specified"}
Number of Children: ${formData.numberOfChildren}
Pickup Date: ${formData.pickupDate || "Not specified"}
Pickup Time: ${formData.pickupTime || "Not specified"}
${
  formData.tripType === "round" && formData.returnPickupDate
    ? `Return Pickup Date: ${formData.returnPickupDate}`
    : ""
}
${
  formData.tripType === "round" && formData.returnPickupTime
    ? `Return Pickup Time: ${formData.returnPickupTime}`
    : ""
}
${formData.trainNumber ? `Train Number: ${formData.trainNumber}` : ""}
${formData.flightNumber ? `Flight Number: ${formData.flightNumber}` : ""}

PICKUP INFORMATION
Location: ${pickupDetails || "Not specified"}

DESTINATION
Location: ${dropDetails || "Not specified"}

CUSTOMER INFORMATION
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phoneNumber}
Payment Method: ${formData.paymentmethod === "cash" ? "Cash" : "Online"}

PAYMENT INFORMATION
Total Fare: ${formData.totalFare} € (all taxes included)

═══════════════════════════════════════════════════════════
Thank you for choosing Praise Cabs!
For any queries, contact us at +33 374 479 185
═══════════════════════════════════════════════════════════
      `.trim();

      const emailFormData = new FormData();
      emailFormData.append(
        "access_key",
        "509e28d0-66bd-4f28-a6c7-9f5f33133889"
      );
      emailFormData.append(
        "subject",
        `Disneyland Tour Booking - ${formData.firstName} ${formData.lastName} - ${formData.pickupDate}`
      );
      emailFormData.append(
        "from_name",
        `${formData.firstName} ${formData.lastName}`
      );
      emailFormData.append("email", formData.email);
      emailFormData.append("message", outputMessage);
      emailFormData.append("to_email", "lingapandi026@gmail.com");
      emailFormData.append("reply_to", formData.email);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailFormData,
      });

      const data = await response.json();

      if (data.success) {
        console.log("Email sent successfully");
        return true;
      } else {
        console.error("Email sending failed:", data.message);
        return false;
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  const handleFinalSubmit = async () => {
    console.log("Booking submitted:", formData);

    // Send email
    const emailSent = await sendBookingEmail();

    if (!emailSent) {
      console.warn("Email sending failed, but booking is recorded");
    }

    // Clear all form data and states
    setFormData({
      tripType: "single",
      pickupLocation: "",
      dropLocation: "",
      passengers: "5",
      vehicleType: "",
      pickupDate: "",
      pickupTime: "",
      returnPickupDate: "",
      returnPickupTime: "",
      luggage: "",
      numberOfChildren: "0",
      trainNumber: "",
      flightNumber: "",
      pickupAddress: "",
      pickupTrainStation: "",
      pickupAirportHotel: "",
      pickupDisneyLocation: "",
      dropAddress: "",
      dropTrainStation: "",
      dropAirportHotel: "",
      dropDisneyLocation: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      paymentmethod: "",
      totalFare: "10,234.00",
    });

    // Reset all selection states
    setSelectedFrom("");
    setSelectedTo("");
    setExtraTypeFrom("");
    setExtraTypeTo("");
    setCurrentStep(1);

    alert("Booking confirmed! We'll contact you shortly.");
  };
  return (
    <div>
      <div className="home-container">
        <img className="BnrImg" src={BookingBanner} alt="" />
      </div>
      <section className="quote-section container">
        <div className="quote-grid">
          {/* LEFT – Booking Card */}
          <div className="quote-card">
            {/* Step Indicator */}
            <div
              style={{
                marginBottom: "20px",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Step {currentStep} of 3
            </div>

            {/* STEP 1: Basic Trip Details (6 fields) */}
            {currentStep === 1 && (
              <>
                <label>Trip Type</label>
                <select
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleInputChange}
                >
                  <option value="single">Single Trip</option>
                  <option value="round">Round Trip</option>
                </select>

                <label>Pickup From</label>
                <select
                  name="pickupLocation"
                  value={selectedFrom}
                  onChange={handleFromChange}
                >
                  <option value="">Pickup Location</option>
                  {FromLocation.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                {/* Show flight number for airports */}
                {(selectedFrom === "Charles de Gaulle Airport (CDG)" ||
                  selectedFrom === "Orly Airport (ORY)" ||
                  selectedFrom === "Beauvais Airport (BVA)") && (
                  <input
                    type="text"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleInputChange}
                    placeholder="Flight Number (optional)"
                    style={{ marginTop: "10px" }}
                  />
                )}

                {extraTypeFrom === "ADDRESS" && (
                  <input
                    type="text"
                    name="pickupAddress"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your pickup address"
                    style={{ marginTop: "10px" }}
                  />
                )}

                {extraTypeFrom === "TRAIN" && (
                  <>
                    <select
                      name="pickupTrainStation"
                      value={formData.pickupTrainStation}
                      onChange={handleInputChange}
                      style={{ marginTop: "10px" }}
                    >
                      <option value="">Select Train Station</option>
                      {trainStations.map((station, index) => (
                        <option key={index} value={station}>
                          {station}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="trainNumber"
                      value={formData.trainNumber}
                      onChange={handleInputChange}
                      placeholder="Train Number (optional)"
                      style={{ marginTop: "10px" }}
                    />
                  </>
                )}

                {extraTypeFrom === "AIRPORT_HOTEL" && (
                  <select
                    name="pickupAirportHotel"
                    value={formData.pickupAirportHotel}
                    onChange={handleInputChange}
                    style={{ marginTop: "10px" }}
                  >
                    <option value="">Select Airport Hotel Area</option>
                    {airportHotels.map((hotel, index) => (
                      <option key={index} value={hotel}>
                        {hotel}
                      </option>
                    ))}
                  </select>
                )}

                {extraTypeFrom === "DISNEY" && (
                  <select
                    name="pickupDisneyLocation"
                    value={formData.pickupDisneyLocation}
                    onChange={handleInputChange}
                    style={{ marginTop: "10px" }}
                  >
                    <option value="">Select Disney Location</option>
                    {disneyLocations.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}

                <label>Destination</label>
                <select
                  name="dropLocation"
                  value={selectedTo}
                  onChange={handleToChange}
                >
                  <option value="">Select Destination</option>
                  {ToLocation.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                {extraTypeTo === "ADDRESS" && (
                  <input
                    type="text"
                    name="dropAddress"
                    value={formData.dropAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your drop address"
                    style={{ marginTop: "10px" }}
                  />
                )}

                {extraTypeTo === "TRAIN" && (
                  <select
                    name="dropTrainStation"
                    value={formData.dropTrainStation}
                    onChange={handleInputChange}
                    style={{ marginTop: "10px" }}
                  >
                    <option value="">Select Train Station</option>
                    {trainStations.map((station, index) => (
                      <option key={index} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                )}

                {extraTypeTo === "AIRPORT_HOTEL" && (
                  <select
                    name="dropAirportHotel"
                    value={formData.dropAirportHotel}
                    onChange={handleInputChange}
                    style={{ marginTop: "10px" }}
                  >
                    <option value="">Select Airport Hotel Area</option>
                    {airportHotels.map((hotel, index) => (
                      <option key={index} value={hotel}>
                        {hotel}
                      </option>
                    ))}
                  </select>
                )}

                {extraTypeTo === "DISNEY" && (
                  <select
                    name="dropDisneyLocation"
                    value={formData.dropDisneyLocation}
                    onChange={handleInputChange}
                    style={{ marginTop: "10px" }}
                  >
                    <option value="">Select Disney Location</option>
                    {disneyLocations.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}

                <div className="row">
                  <div style={{ width: "50%" }}>
                    <label>Passengers</label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Vehicle Type</label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Vehicle</option>
                      {vehicleTypes.map((vehicle, index) => (
                        <option key={index} value={vehicle}>
                          {vehicle}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* STEP 2: Additional Details */}
            {currentStep === 2 && (
              <>
                <label>Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                />
                <label>Pickup Time</label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                />

                {/* Show return fields only for round trip */}
                {formData.tripType === "round" && (
                  <>
                    <label>Return Pickup Date</label>
                    <input
                      type="date"
                      name="returnPickupDate"
                      value={formData.returnPickupDate}
                      onChange={handleInputChange}
                    />

                    <label>Return Pickup Time</label>
                    <input
                      type="time"
                      name="returnPickupTime"
                      value={formData.returnPickupTime}
                      onChange={handleInputChange}
                    />
                  </>
                )}

                <label>Luggage</label>
                <select
                  name="luggage"
                  value={formData.luggage}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="0">No Luggage</option>
                  <option value="1">1 Bag</option>
                  <option value="2">2 Bags</option>
                  <option value="3">3 Bags</option>
                  <option value="4">4 Bags</option>
                  <option value="5+">5+ Bags</option>
                </select>

                <label>Number of Children</label>
                <select
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleInputChange}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </>
            )}

            {/* STEP 3: Customer Information */}
            {currentStep === 3 && (
              <>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />

                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />

                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                />

                <label>Payment Method</label>
                <select
                  name="paymentmethod"
                  value={formData.paymentmethod}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="cash">Cash</option>
                  <option value="online">Online</option>
                </select>
              </>
            )}

            <div className="fare-row">
              <span>
                Total Fare : <br />
                <strong>{formData.totalFare} €</strong>{" "}
              </span>

              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                {currentStep > 1 && (
                  <button
                    className="quote-btn"
                    onClick={handlePrevious}
                    style={{ flex: 1 }}
                  >
                    Previous
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    className="quote-btn"
                    onClick={handleNext}
                    style={{ flex: 1 }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="quote-btn"
                    onClick={handleFinalSubmit}
                    style={{ flex: 1 }}
                  >
                    Book Now
                  </button>
                )}
              </div>
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
          <p>
            *We can generally accept all bookings upto 12 hours before the time
            of your transfer. For late booking please contact{" "}
            <span className="clrBlue">+33 893 8444 234</span>{" "}
          </p>
        </div>
      </section>

      <section>
        <FAQSection />
      </section>
      <section>
        <HourlyPackage />
      </section>
    </div>
  );
};

export default Booking;
