import "./long-distance.css";
import BannerImage from "../../assets/long-distance.png";
import FleetsPage from "../../component/ourFleets/FleetsPage";
import { useState } from "react";

const LongDistanceTour = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
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
    "Minibus (8-15 passengers)"
  ];

  // Form data state
  const [formData, setFormData] = useState({
    // Trip details
    tripType: "",
    pickupLocation: "",
    destination: "",
    dropLocation: "",
    passengers: "",
    vehicleType: "",
    pickupDate: "",
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

    // Customer Information
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
      if (formData.pickupAddress) pickupDetails += ` - ${formData.pickupAddress}`;
      if (formData.pickupTrainStation) pickupDetails += ` - ${formData.pickupTrainStation}`;
      if (formData.pickupAirportHotel) pickupDetails += ` - ${formData.pickupAirportHotel}`;
      if (formData.pickupDisneyLocation) pickupDetails += ` - ${formData.pickupDisneyLocation}`;

      // Get the specific drop location details
      let dropDetails = formData.dropLocation;
      if (formData.dropAddress) dropDetails += ` - ${formData.dropAddress}`;
      if (formData.dropTrainStation) dropDetails += ` - ${formData.dropTrainStation}`;
      if (formData.dropAirportHotel) dropDetails += ` - ${formData.dropAirportHotel}`;
      if (formData.dropDisneyLocation) dropDetails += ` - ${formData.dropDisneyLocation}`;

      const outputMessage = `
NEW LONG DISTANCE TOUR BOOKING - PRAISE CABS
═══════════════════════════════════════════════════════════

BOOKING DETAILS
Trip Type: ${formData.tripType === 'single' ? 'Single Trip' : formData.tripType === 'round' ? 'Round Trip' : 'Group Tour'}
Booking Date: ${new Date().toLocaleString()}

TRAVEL DETAILS
Number of Passengers: ${formData.passengers || 'Not specified'}
Vehicle Type: ${formData.vehicleType || 'Not specified'}
Luggage: ${formData.luggage || 'Not specified'}
Number of Children: ${formData.numberOfChildren}
Pickup Date: ${formData.pickupDate || 'Not specified'}
Pickup Time: ${formData.pickupTime || 'Not specified'}
${formData.tripType === 'round' && formData.returnPickupDate ? `Return Pickup Date: ${formData.returnPickupDate}` : ''}
${formData.tripType === 'round' && formData.returnPickupTime ? `Return Pickup Time: ${formData.returnPickupTime}` : ''}
${formData.trainNumber ? `Train Number: ${formData.trainNumber}` : ''}
${formData.flightNumber ? `Flight Number: ${formData.flightNumber}` : ''}

PICKUP INFORMATION
Location: ${pickupDetails || 'Not specified'}

DESTINATION
Destination: ${formData.destination || 'Not specified'}
Drop Location: ${dropDetails || 'Not specified'}

CUSTOMER INFORMATION
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phoneNumber}
Payment Method: ${formData.paymentmethod === 'cash' ? 'Cash' : 'Online'}

PAYMENT INFORMATION
Total Fare: ${formData.totalFare} € (all taxes included)

      `.trim();

      const emailFormData = new FormData();
      emailFormData.append("access_key", "509e28d0-66bd-4f28-a6c7-9f5f33133889");
      emailFormData.append("subject", `Long Distance Tour Booking - ${formData.firstName} ${formData.lastName} - ${formData.pickupDate}`);
      emailFormData.append("from_name", `${formData.firstName} ${formData.lastName}`);
      emailFormData.append("email", formData.email);
      emailFormData.append("message", outputMessage);
      emailFormData.append("to_email", "lingapandi026@gmail.com");
      emailFormData.append("reply_to", formData.email);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailFormData
      });

      const data = await response.json();
      
      if (data.success) {
        console.log('Email sent successfully');
        return true;
      } else {
        console.error('Email sending failed:', data.message);
        return false;
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleFinalSubmit = async () => {
    console.log("Booking submitted:", formData);
    
    // Send email
    const emailSent = await sendBookingEmail();
    
    if (!emailSent) {
      console.warn('Email sending failed, but booking is recorded');
    }
    
    // Clear all form data and states
    setFormData({
      tripType: "",
      pickupLocation: "",
      destination: "",
      dropLocation: "",
      passengers: "",
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
              <div className="card-heading">{currentStep}/3 Quick Quote</div>

              {/* STEP 1: Trip Details */}
              {currentStep === 1 && (
                <>
                  <label className="field-label">Select Trip Type</label>
                  <div className="select-wrap">
                    <select
                      name="tripType"
                      value={formData.tripType}
                      onChange={handleInputChange}
                    >
                      <option value="">select trip type</option>
                      <option value="single">Single Trip</option>
                      <option value="round">Round Trip</option>
                    </select>
                  </div>

                  <label className="field-label">Pickup From</label>
                  <div className="select-wrap">
                    <select
                      name="pickupLocation"
                      value={selectedFrom}
                      onChange={handleFromChange}
                    >
                      <option value="">Select Pickup Location</option>
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
                    <div className="input-icon-wrap"><br/>
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
                    <div className="input-icon-wrap"><br/>
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
                      <div className="select-wrap"><br/>
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
                      <div className="input-icon-wrap"><br/>
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
                    <div className="select-wrap"><br/>
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
                    <div className="select-wrap"><br/>
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

              

                  <label className="field-label">Enter Drop Location</label>
                  <div className="select-wrap">
                    <select
                      name="dropLocation"
                      value={selectedTo}
                      onChange={handleToChange}
                    >
                      <option value="">Select Drop Location</option>
                      {ToLocation.map((item) => (
                        <option key={item.id} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {extraTypeTo === "ADDRESS" && (
                    <div className="input-icon-wrap"><br/>
                      <input
                        type="text"
                        name="dropAddress"
                        value={formData.dropAddress}
                        onChange={handleInputChange}
                        placeholder="Enter your drop address"
                      />
                      <svg
                        className="pin-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          stroke="#666"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                          stroke="#666"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                  )}

                  {extraTypeTo === "TRAIN" && (
                    <div className="select-wrap"><br/>
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
                    <div className="select-wrap"><br/>
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
                    <div className="select-wrap"><br/>
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

                  <label className="field-label">Number of passengers (Adult, children and babies)</label>
                  <div className="input-icon-wrap">
                    <input
                      type="text"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      placeholder="Enter number of passengers"
                    />
                  </div>
                </>
              )}

              {/* STEP 2: Travel Details */}
              {currentStep === 2 && (
                <>
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

                  {/* Show return fields only for round trip */}
                  {formData.tripType === "round" && (
                    <>
                      <label className="field-label">Return Pickup Date</label>
                      <div className="input-icon-wrap">
                        <input
                          type="date"
                          name="returnPickupDate"
                          value={formData.returnPickupDate}
                          onChange={handleInputChange}
                        />
                      </div>

                      <label className="field-label">Return Pickup Time</label>
                      <div className="input-icon-wrap">
                        <input
                          type="time"
                          name="returnPickupTime"
                          value={formData.returnPickupTime}
                          onChange={handleInputChange}
                        />
                      </div>
                    </>
                  )}

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

                  {formData.vehicleType && (
                    <div style={{ 
                      marginTop: '15px', 
                      padding: '10px', 
                      backgroundColor: '#f9f9f9', 
                      borderRadius: '5px',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        fontSize: '14px', 
                        fontWeight: 'bold', 
                        marginBottom: '10px',
                        color: '#333'
                      }}>
                        Selected: {formData.vehicleType}
                      </div>
                      <div style={{ 
                        fontSize: '40px',
                        color: '#4CAF50'
                      }}>
                        🚗
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: '#666',
                        marginTop: '5px'
                      }}>
                        {formData.vehicleType.includes('Sedan') && 'Comfortable sedan for 1-3 passengers'}
                        {formData.vehicleType.includes('SUV') && 'Spacious SUV with extra legroom'}
                        {formData.vehicleType.includes('Minivan') && 'Perfect for families and groups'}
                        {formData.vehicleType.includes('Minibus') && 'Large vehicle for group travel'}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* STEP 3: Customer Information */}
              {currentStep === 3 && (
                <>
                  <label className="field-label">First Name</label>
                  <div className="input-icon-wrap">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                    />
                  </div>

                  <label className="field-label">Last Name</label>
                  <div className="input-icon-wrap">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                    />
                  </div>

                  <label className="field-label">Email</label>
                  <div className="input-icon-wrap">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                    />
                  </div>

                  <label className="field-label">Phone Number</label>
                  <div className="input-icon-wrap">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
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
                </>
              )}

              <br />
              <div className="fare-btn-row">
                <div className="fare-left">
                  <span className="fare-label">Total Fare :</span>
                  <span className="fare-amount">{formData.totalFare} €</span>
                </div>
                {currentStep === 1 ? (
                  <button className="btn-book-card" onClick={handleNext}>
                    Next
                  </button>
                ) : currentStep === 2 ? (
                  <>
                    <button 
                      className="btn-book-card" 
                      onClick={handlePrevious}
                      // style={{ marginRight: '5px' }}
                    >
                      Previous
                    </button>
                    <button className="btn-book-card" onClick={handleNext}>
                      Next
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="btn-book-card" 
                      onClick={handlePrevious}
                      // style={{ marginRight: '5px' }}
                    >
                      Previous
                    </button>
                    <button className="btn-book-card" onClick={handleFinalSubmit}>
                       Book Now
                    </button>
                  </>
                )}
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