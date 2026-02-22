import { useEffect, useState } from "react";
import "./paris-city-tour.css";
import BannerImage from "../../assets/paris-city-tour-view.png";
import DriverImage from "../../assets/professional-driver.svg";
import PaymentImage from "../../assets/payment-mode.svg";
import FreeCancelImage from "../../assets/free-cancel.svg";
import FleetsPage from "../../component/ourFleets/FleetsPage";
import calculatePrice from "../../component/priceCalculation/priceCalculator";

const ParisCityTour = () => {
  const [openFaq, setOpenFaq] = useState(null);
  // const [showSecond, setShowSecond] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [showPackageList, setShowPackageList] = useState(false);
  const [showPreferredPlace, setShowPreferredPlace] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [extraTypeFrom, setExtraTypeFrom] = useState("");
  const [extraTypeTo, setExtraTypeTo] = useState("");

  const toggleFaq = (index: any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
    "Luxury Sedan",
    "Luxury SUV",
    "Minibus (8-15 passengers)",
  ];

  const tourPackages = [
    {
      value: "Paris day tour (4 Hours)",
      label: "Paris day tour (4 Hours)",
      points: [
        "Eiffel Tower",
        "The Louvre",
        " Notre Dame de Paris",
        "Arc de triomph",
        "Montmartre",
        "Avenue des champs elysée",
        "Musée d'orsay",
        "Sainte-chapelle",
      ],
    },
    {
      value: "Paris day tour (8 Hours)",
      label: "Paris day tour (8 Hours)",
      points: [
        "Eiffel Tower",
        "The Louvre",
        " Notre Dame de Paris",
        "Arc de triomph",
        "Montmartre",
        "Avenue des champs elysée",
        "Musée d'orsay",
        "Sainte-chapelle",
      ],
    },
    {
      value: "Paris night tour (4 Hours)",
      label: "Paris night tour (4 Hours)",
      points: [
        "Eiffel Tower",
        "The Louvre",
        " Notre Dame de Paris",
        "Arc de triomph",
        "Montmartre",
        "Avenue des champs elysée",
        "Musée d'orsay",
        "Sainte-chapelle",
      ],
    },
  ];
  // Form data state
  const [formData, setFormData] = useState({
    // Trip details
    tourPackage: "",
    pickupLocation: "",
    dropLocation: "",
    preferredPlace: "",
    passengers: "1",
    luggage: "",
    numberOfChildren: "0",
    vehicleType: "",
    pickupDate: "",
    pickupTime: "",
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

    // Step 2
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    paymentmethod: "",

    // Total
    totalFare: "0.00",
    tripType: ''
  });

  useEffect(() => {
    const price = calculatePrice(
      formData.pickupLocation,
      formData.dropLocation,
      formData.vehicleType,
      formData.tripType
    );
    setFormData((prev) => ({ ...prev, totalFare: price }));
  }, [formData.pickupLocation, formData.dropLocation, formData.vehicleType, formData.tripType]);

  const handlePackageChange = (e: any) => {
    const value = e.target.value;
    setSelectedPackage(value);
    setShowPackageList(!!value);
    setFormData((prev) => ({
      ...prev,
      tourPackage: value,
      tripType : value == "Paris day tour (8 Hours)" ? 'round' :  'single' 
    }));
  };

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

  const handleCheckboxChange = (e: any) => {
    setShowPreferredPlace(e.target.checked);
    if (!e.target.checked) {
      setFormData((prev) => ({
        ...prev,
        preferredPlace: "",
      }));
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
NEW PARIS CITY TOUR BOOKING - PRAISE CABS
═══════════════════════════════════════════════════════════

TOUR PACKAGE
Tour Type: ${
        tourPackages.find((p) => p.value === formData.tourPackage)?.label ||
        "Not specified"
      }
Booking Date: ${new Date().toLocaleString()}

BOOKING DETAILS
Number of Passengers: ${formData.passengers}
Luggage: ${formData.luggage || "Not specified"}
Number of Children: ${formData.numberOfChildren}
Vehicle Type: ${formData.vehicleType || "Not specified"}
Pickup Date: ${formData.pickupDate || "Not specified"}
Pickup Time: ${formData.pickupTime || "Not specified"}
${formData.trainNumber ? `Train Number: ${formData.trainNumber}` : ""}
${formData.flightNumber ? `Flight Number: ${formData.flightNumber}` : ""}

PICKUP INFORMATION
Location: ${pickupDetails || "Not specified"}

DESTINATION
Location: ${dropDetails || "Not specified"}

${
  formData.preferredPlace
    ? `PREFERRED PLACES\n${formData.preferredPlace}\n`
    : ""
}

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
        `Paris City Tour Booking - ${formData.firstName} ${formData.lastName}`
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

    if (!formData.firstName || formData.firstName.trim() === "") {
      alert("Enter Your Name");
      return;
    }
    if (!formData.email || formData.email.trim() === "") {
      alert("Enter Your email");
      return;
    }
    if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
      alert("Enter Your phoneNumber");
      return;
    }
    // Send email
    const emailSent = await sendBookingEmail();

    if (!emailSent) {
      console.warn("Email sending failed, but booking is recorded");
    }

    // Clear all form data and states
    setFormData({
      tourPackage: "",
      pickupLocation: "",
      dropLocation: "",
      preferredPlace: "",
      passengers: "1",
      luggage: "",
      numberOfChildren: "0",
      vehicleType: "",
      pickupDate: "",
      pickupTime: "",
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
      totalFare: "0.00",
      tripType:''
    });

    // Reset all selection states
    setSelectedPackage("");
    setShowPackageList(false);
    setShowPreferredPlace(false);
    setSelectedFrom("");
    setSelectedTo("");
    setExtraTypeFrom("");
    setExtraTypeTo("");
    // setShowSecond(false);
    setCurrentStep(1);

    alert("Booking confirmed! We'll contact you shortly.");
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
        "Don't worry, we've got you covered.When booking, simply provide your flight details and our driver will track your flight in real time. Even if your flight is delayed, your driver will be waiting for you and your group in the airport arrivals hall.Would you like me to make this in a short reassuring version for quick website highlights?",
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

  const selectedPackageData = tourPackages.find(
    (p) => p.value === selectedPackage
  );

  return (
    <div className="home-container">
      <img className="BnrImg" src={BannerImage} alt="" />
      <div className="background-img">
        <section className="page">
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

          {currentStep === 1 && (
            <div className="quote-grid">
              <div className="card">
                <div className="card-heading">1/3 Quick Quote</div>

                <div className="notes-block">
                  <div className="note">
                    <span className="note-label">Note:</span>
                    <span className="note-text">
                      {" "}
                      The booking must be done minimum before 3 hours through
                      online booking
                    </span>
                  </div>
                  <div className="note">
                    <span className="note-text">
                      Night time charge is 10€ between 10pm to 6pm
                    </span>
                  </div>
                </div>

                <label className="field-label">Select Tour Package</label>
                <div className="select-wrap">
                  <select
                    name="tourPackage"
                    value={formData.tourPackage}
                    onChange={handlePackageChange}
                  >
                    <option value="">Select Package</option>
                    {tourPackages.map((pkg) => (
                      <option key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </option>
                    ))}
                  </select>
                </div>

                {showPackageList && selectedPackageData && (
                  <ul
                    style={{
                      listStyle: "disc",
                      paddingLeft: "20px",
                      marginTop: "10px",
                      marginBottom: "15px",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {selectedPackageData.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}

                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    className="checkbox-box"
                    checked={showPreferredPlace}
                    onChange={handleCheckboxChange}
                  />
                  <div className="checkbox-text">
                    <span className="cb-label">
                      Add your Preferred place to the tour
                    </span>
                    <span className="cb-sub">
                      No extra charges. The places must be in Paris
                    </span>
                  </div>
                </div>

                {showPreferredPlace && (
                  <div className="textarea-wrap">
                    <textarea
                      name="preferredPlace"
                      value={formData.preferredPlace}
                      onChange={handleInputChange}
                      placeholder="Describe your plan"
                    ></textarea>
                  </div>
                )}

                <div className="price-per-hour">€50 EUR Per Hour</div>

                <label className="field-label">Number of Passengers</label>
                <div className="select-wrap">
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

                <label className="field-label">Pickup From</label>
                <div className="select-wrap">
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
                </div>

                {/* Show flight number for airports */}
                {(selectedFrom === "Charles de Gaulle Airport (CDG)" ||
                  selectedFrom === "Orly Airport (ORY)" ||
                  selectedFrom === "Beauvais Airport (BVA)") && (
                  <div
                    className="input-icon-wrap"
                    style={{ marginTop: "10px" }}
                  >
                    <input
                      type="text"
                      name="flightNumber"
                      value={formData.flightNumber}
                      onChange={handleInputChange}
                      placeholder="Flight Number (optional)"
                    />
                  </div>
                )}

                {extraTypeFrom === "ADDRESS" && (
                  <div
                    className="input-icon-wrap"
                    style={{ marginTop: "10px" }}
                  >
                    <input
                      type="text"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your pickup address"
                    />
                  </div>
                )}

                {extraTypeFrom === "TRAIN" && (
                  <>
                    <div className="select-wrap" style={{ marginTop: "10px" }}>
                      <select
                        name="pickupTrainStation"
                        value={formData.pickupTrainStation}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Train Station</option>
                        {trainStations.map((station, index) => (
                          <option key={index} value={station}>
                            {station}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className="input-icon-wrap"
                      style={{ marginTop: "10px" }}
                    >
                      <input
                        type="text"
                        name="trainNumber"
                        value={formData.trainNumber}
                        onChange={handleInputChange}
                        placeholder="Train Number (optional)"
                      />
                    </div>
                  </>
                )}

                {extraTypeFrom === "AIRPORT_HOTEL" && (
                  <div className="select-wrap" style={{ marginTop: "10px" }}>
                    <select
                      name="pickupAirportHotel"
                      value={formData.pickupAirportHotel}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Airport Hotel Area</option>
                      {airportHotels.map((hotel, index) => (
                        <option key={index} value={hotel}>
                          {hotel}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {extraTypeFrom === "DISNEY" && (
                  <div className="select-wrap" style={{ marginTop: "10px" }}>
                    <select
                      name="pickupDisneyLocation"
                      value={formData.pickupDisneyLocation}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Disney Location</option>
                      {disneyLocations.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="field-warning">
                  Additional Charge will be added if your pick up location is
                  outside the paris
                </div>

                <label className="field-label">Destination</label>
                <div className="select-wrap">
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
                </div>

                {extraTypeTo === "ADDRESS" && (
                  <div
                    className="input-icon-wrap"
                    style={{ marginTop: "10px" }}
                  >
                    <input
                      type="text"
                      name="dropAddress"
                      value={formData.dropAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your drop address"
                    />
                  </div>
                )}

                {extraTypeTo === "TRAIN" && (
                  <div className="select-wrap" style={{ marginTop: "10px" }}>
                    <select
                      name="dropTrainStation"
                      value={formData.dropTrainStation}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Train Station</option>
                      {trainStations.map((station, index) => (
                        <option key={index} value={station}>
                          {station}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {extraTypeTo === "AIRPORT_HOTEL" && (
                  <div className="select-wrap" style={{ marginTop: "10px" }}>
                    <select
                      name="dropAirportHotel"
                      value={formData.dropAirportHotel}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Airport Hotel Area</option>
                      {airportHotels.map((hotel, index) => (
                        <option key={index} value={hotel}>
                          {hotel}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {extraTypeTo === "DISNEY" && (
                  <div className="select-wrap" style={{ marginTop: "10px" }}>
                    <select
                      name="dropDisneyLocation"
                      value={formData.dropDisneyLocation}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Disney Location</option>
                      {disneyLocations.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="field-warning">
                  Additional Charge will be added if your pick up location is
                  outside the paris
                </div>

                <div className="divider"></div>
                <div className="fare-btn-row">
                  <div className="fare-left">
                    <span className="fare-label">Total Fare :</span>
                    <span className="fare-amount">{formData.totalFare} €</span>
                  </div>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="btn-book-card"
                  >
                    Next
                  </button>
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
                  destination relaxed and on time. Pre-book affordable taxi
                  services to the city center, Disneyland, or the airport.
                  Choose from comfortable family cars, economy minivans for
                  groups, or luxury vehicles for a premium experience.
                </p>

                <div className="feature-list">
                  <div className="feature-item">
                    <img src={DriverImage} alt="" />
                    <div className="feat-text">
                      <strong>
                        <span className="accent">Professional</span> Driver
                      </strong>
                      <span>
                        Our drivers are skilled, well travelled and have years
                        of journey experiences.
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
                    <img src={PaymentImage} alt="" />

                    <div className="feat-text">
                      <strong>
                        <span className="accent">Payment</span> Mode
                      </strong>
                      <span>
                        We provide three payment options. ( Pay cash to the
                        driver, Online payment or pay by card to the driver)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="quote-grid">
              <div className="card">
                <div className="card-heading">2/3 Travel Details</div>

                <label className="field-label">Number of Passengers</label>
                <div className="select-wrap">
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

                <label className="field-label">Luggage</label>
                <div className="select-wrap">
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
                </div>

                <label className="field-label">Number of Children</label>
                <div className="select-wrap">
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
                </div>

                <label className="field-label">Select Vehicle</label>
                <div className="select-wrap">
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Vehicle Type</option>
                    {vehicleTypes.map((vehicle, index) => (
                      <option key={index} value={vehicle}>
                        {vehicle}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="field-label">Pickup Date</label>
                <div className="input-icon-wrap">
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                  />
                </div>

                <label className="field-label">Pickup Time</label>
                <div className="input-icon-wrap">
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="divider"></div>
                <div className="fare-btn-row">
                  <div className="fare-left">
                    <span className="fare-label">Total Fare :</span>
                    <span className="fare-amount">{formData.totalFare} €</span>
                  </div>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="btn-book-card"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="btn-book-card"
                  >
                    Next
                  </button>
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
                  destination relaxed and on time. Pre-book affordable taxi
                  services to the city center, Disneyland, or the airport.
                  Choose from comfortable family cars, economy minivans for
                  groups, or luxury vehicles for a premium experience.
                </p>

                <div className="feature-list">
                  <div className="feature-item">
                    <img src={DriverImage} alt="" />
                    <div className="feat-text">
                      <strong>
                        <span className="accent">Professional</span> Driver
                      </strong>
                      <span>
                        Our drivers are skilled, well travelled and have years
                        of journey experiences.
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
                    <img src={PaymentImage} alt="" />

                    <div className="feat-text">
                      <strong>
                        <span className="accent">Payment</span> Mode
                      </strong>
                      <span>
                        We provide three payment options. ( Pay cash to the
                        driver, Online payment or pay by card to the driver)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="quote-grid">
              <div className="card">
                <div className="card-heading">3/3 Customer Details</div>
                <div className="form-row">
                  <div className="input-icon-wrap">
                    <label className="field-label">First Name<span style={{ color : 'red'}}>*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First"
                    />
                  </div>

                  <div className="input-icon-wrap">
                    <label className="field-label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last"
                    />
                  </div>
                </div>
                <br />
                <label className="field-label">Email<span style={{ color : 'red'}}>*</span></label>
                <div className="input-icon-wrap">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                </div>

                <label className="field-label">Phone Number<span style={{ color : 'red'}}>*</span></label>
                <div className="input-icon-wrap">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                  />
                </div>

                <label className="field-label">Payment Method</label>
                <div className="select-wrap">
                  <select
                    name="paymentmethod"
                    value={formData.paymentmethod}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                  </select>
                </div>
                <br />
                <div className="fare-btn-row">
                  <div className="fare-left">
                    <span className="fare-label">Total Fare :</span>
                    <span className="fare-amount">{formData.totalFare} €</span>
                  </div>
                  <button
                    className="btn-book-card"
                    onClick={() => setCurrentStep(2)}
                  >
                    Previous
                  </button>
                  <button className="btn-book-card" onClick={handleFinalSubmit}>
                    Book Now
                  </button>
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
          )}
        </section>
      </div>
      <FleetsPage />
    </div>
  );
};

export default ParisCityTour;
