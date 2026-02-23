import { useState } from "react";
import banner from "../../assets/headerBanner.svg";
import "./Home.css";
import PackageOne from "../../assets/Tour-packages1.svg";
import PackageTwo from "../../assets/Tour-packages2.svg";
import PackageThree from "../../assets/Tour-packages3.png";
import AboutUsImage from "../../assets/about.svg";
import HourlyPackage from "../../component/hourly-package/HourlyPackage";
import FleetsPage from "../../component/ourFleets/FleetsPage";
import PackagePage from "../../component/Package/Package";
import sefaImage from "../../assets/safe-secure.png";
import sendBookingEmail from "../../utils/emailService";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import calculatePrice from "../../component/priceCalculation/priceCalculator";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation happens only once
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
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
    "Luxury Sedan",
    "Luxury SUV",
    "Minibus (8-15 passengers)",
  ];

  // Form data state
  const [formData, setFormData] = useState({
    // Trip details
    tripType: "",
    pickupLocation: "",
    dropLocation: "",
    passengers: "",

    // Extra location details for pickup
    pickupAddress: "",
    pickupTrainStation: "",
    pickupAirportHotel: "",
    pickupDisneyLocation: "",
    vehicleType: "",

    // Extra location details for drop
    dropAddress: "",
    dropTrainStation: "",
    dropAirportHotel: "",
    dropDisneyLocation: "",

    // Step 1
    pickupDate: "",
    pickupTime: "",
    arrivalFlightNumber: "",
    luggage: "",
    numberOfChildren: "",

    // Step 2
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    paymentmethod: "",

    // Step 3 (confirmation)
    totalFare: "0.00",
  });

  useEffect(() => {
    const price = calculatePrice(
      formData.pickupLocation,
      formData.dropLocation,
      formData.vehicleType,
      formData.tripType
    );
    setFormData((prev) => ({ ...prev, totalFare: price }));
  }, [
    formData.pickupLocation,
    formData.dropLocation,
    formData.vehicleType,
    formData.tripType,
  ]);

  const handleFromChange = (e: any) => {
    const value = e.target.value;
    setSelectedFrom(value);

    const selectedItem = FromLocation.find((item) => item.value === value);
    setExtraTypeFrom(selectedItem?.type || "");

    // Update formData
    setFormData((prev) => ({
      ...prev,
      pickupLocation: value,
      // Reset extra fields when location changes
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

    // Update formData
    setFormData((prev) => ({
      ...prev,
      dropLocation: value,
      dropAddress: "",
      dropTrainStation: "",
      dropAirportHotel: "",
      dropDisneyLocation: "",
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentStep(2);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(2);
    // Reset form if needed
  };

  const handleNext = () => {
    if (currentStep <= 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep == 3) {
      setCurrentStep(currentStep - 1);
    } else {
      closeModal();
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFinalSubmit = async () => {
    // Handle final booking submission
    console.log("Booking submitted:", formData);

    const emailSent = await sendBookingEmail(formData);

    if (!emailSent) {
      console.warn("Email sending failed, but booking is recorded");
    }

    // Clear all form data
    setFormData({
      // Trip details
      tripType: "single",
      pickupLocation: "",
      dropLocation: "",
      passengers: "1",

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

      // Step 1
      pickupDate: "",
      pickupTime: "",
      arrivalFlightNumber: "",
      luggage: "",
      numberOfChildren: "",
      vehicleType: "",

      // Step 2
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      paymentmethod: "",

      // Step 3 (confirmation)
      totalFare: "0.00",
    });

    // Reset selection states
    setSelectedFrom("");
    setSelectedTo("");
    setExtraTypeFrom("");
    setExtraTypeTo("");

    // Reset to first step
    setCurrentStep(2);

    // Close modal
    closeModal();

    alert("Booking confirmed! We'll contact you shortly.");
  };

  const handleWhatsappClick = () => {
    const phoneNumber = "+9190032 06411"; // your number with country code
    const message = "Hello! I want to book a cab."; // optional pre-filled message
    const whatsappLink = `https://wa.me/${phoneNumber.replace(
      /[^\d]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank"); // open in new tab
  };

  const NavigateBookingPage = () => {
    navigate("/booking");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="home-container">
        <img className="Banner" src={banner} alt="Banner" />
        <div className="BnrTxt">
          <h1 className="animate__animated animate__backInDown">
            <span>Praise</span>
            <span>Cabs</span>
          </h1>
        </div>

        {/* Quick Booking Card */}
        <div className="TpBkCrd">
          <div className="TpBkCrd__item">
            <label>Trip Type</label>
            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="1">Single Trip</option>
              <option value="2">Round Trip</option>
            </select>
          </div>

          <div className="TpBkCrd__item">
            <label>Pickup Location</label>
            <select value={selectedFrom} onChange={handleFromChange}>
              <option value="">Pickup Location</option>
              {FromLocation.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* PARIS CITY → Show Address Input */}
          {extraTypeFrom === "ADDRESS" && (
            <div className="TpBkCrd__item">
              <label>Pickup Address</label>
              <input
                type="text"
                placeholder="Enter full pickup address"
                name="pickupAddress"
                value={formData.pickupAddress}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* TRAIN STATION → Show Station Dropdown */}
          {extraTypeFrom === "TRAIN" && (
            <div className="TpBkCrd__item">
              <label>Select Train Station</label>
              <select
                name="pickupTrainStation"
                value={formData.pickupTrainStation}
                onChange={handleInputChange}
              >
                <option value="">Select Station</option>
                {trainStations.map((station, index) => (
                  <option key={index} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* AIRPORT HOTELS → Show Airport Hotel Dropdown */}
          {extraTypeFrom === "AIRPORT_HOTEL" && (
            <div className="TpBkCrd__item">
              <label>Select Airport Hotel Area</label>
              <select
                name="pickupAirportHotel"
                value={formData.pickupAirportHotel}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {airportHotels.map((hotel, index) => (
                  <option key={index} value={hotel}>
                    {hotel}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* DISNEY → Show Searchable Dropdown */}
          {extraTypeFrom === "DISNEY" && (
            <div className="TpBkCrd__item">
              <label>Disney Location</label>
              <input
                list="disney-options"
                placeholder="Type or select location"
                name="pickupDisneyLocation"
                value={formData.pickupDisneyLocation}
                onChange={handleInputChange}
              />
              <datalist id="disney-options">
                {disneyLocations.map((item, index) => (
                  <option key={index} value={item} />
                ))}
              </datalist>
            </div>
          )}

          <div className="TpBkCrd__item">
            <label>Destination</label>
            <select
              name="dropLocation"
              value={selectedTo}
              onChange={handleToChange}
            >
              <option value="">Drop Location</option>
              {ToLocation.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* PARIS CITY → Show Address Input */}
          {extraTypeTo === "ADDRESS" && (
            <div className="TpBkCrd__item">
              <label>Pickup Address</label>
              <input
                type="text"
                placeholder="Enter full pickup address"
                name="dropAddress"
                value={formData.dropAddress}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* TRAIN STATION → Show Station Dropdown */}
          {extraTypeTo === "TRAIN" && (
            <div className="TpBkCrd__item">
              <label>Select Train Station</label>
              <select
                name="dropTrainStation"
                value={formData.dropTrainStation}
                onChange={handleInputChange}
              >
                <option value="">Select Station</option>
                {trainStations.map((station, index) => (
                  <option key={index} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* AIRPORT HOTELS → Show Airport Hotel Dropdown */}
          {extraTypeTo === "AIRPORT_HOTEL" && (
            <div className="TpBkCrd__item">
              <label>Select Airport Hotel Area</label>
              <select
                name="dropAirportHotel"
                value={formData.dropAirportHotel}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                {airportHotels.map((hotel, index) => (
                  <option key={index} value={hotel}>
                    {hotel}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* DISNEY → Show Searchable Dropdown */}
          {extraTypeTo === "DISNEY" && (
            <div className="TpBkCrd__item">
              <label>Disney Location</label>
              <input
                list="disney-options"
                placeholder="Type or select location"
                name="dropDisneyLocation"
                value={formData.dropDisneyLocation}
                onChange={handleInputChange}
              />
              <datalist id="disney-options">
                {disneyLocations.map((item, index) => (
                  <option key={index} value={item} />
                ))}
              </datalist>
            </div>
          )}

          <div className="TpBkCrd__item">
            <label>Passengers</label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
            >
              {/* <option value="">Select Passengers</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          <div className="TpBkCrd__item_btn TleFreBy">
            <p>
              Total Fare: <span className="TleAmt">{formData.totalFare} €</span>
            </p>
            <button onClick={openModal}>Book Now</button>
          </div>
        </div>
      </section>

      {/* Container for other sections */}
      <section className="container">
        {/* Our Tour Packages */}
        <div className="TrPckBy" data-aos="fade-up" data-aos-delay="100">
          <div className="titleBy">
            <span className="Title-line"></span>
            <h1 className="title">Our Tour Package</h1>
          </div>

          <div className="PakageimgRow">
            <div className="PakageimgCard">
              <img src={PackageOne} alt="Airport Transfer" />
              <div className="PakageimgOverlay">
                <p className="PakageimgOverlayContent">
                  You can pre-book affordable private transfers to CDG Airport.
                  We also provide private transfer services to Orly Airport and
                  Beauvais Airport. The price is fixed at the time of booking
                  and will not increase.
                </p>
              </div>
            </div>

            <div className="PakageimgCard">
              <img src={PackageTwo} alt="Disneyland Transfer" />
              <div className="PakageimgOverlay">
                <p className="PakageimgOverlayContent">
                  We offer private transfers to Disneyland Paris from CDG
                  Airport, Orly Airport, Beauvais Airport, and Paris city. Our
                  rates are fixed and up to 35% cheaper than standard Disneyland
                  Paris taxis. To make your journey even more enjoyable, we also
                  provide Disney movies in our vehicles.
                </p>
              </div>
            </div>

            <div className="PakageimgCard">
              <img src={PackageThree} alt="City Tour" />
              <div className="PakageimgOverlay">
                <p className="PakageimgOverlayContent">
                  Book a reliable transfer service that not only picks you up
                  but also introduces you to the historic landmarks of Paris.
                  Pre-order your travel essentials and have all your questions
                  answered before or during your journey.
                </p>
              </div>
            </div>
          </div>

          <div className="TurPckBtm">
            <p>
              For customised Packages and Corporate Tours call:{" "}
              <span className="orangeTxt">+33 374 479 185</span> or Enquire for
              free Through Mail
            </p>
            <div className="btn-grp">
              <button className="btn1" onClick={NavigateBookingPage}>Enquire Now</button>
              <button className="btn2">Call Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="AbtBy">
        {/* About Us */}
        <div className="AbtBy-Sub">
          <div className="titleBy">
            <span className="Title-line"></span>
            <p className="title">About Us</p>
          </div>

          <div className="abt-content-wrapper">
            <div className="text-side">
              <p>
                At Paris Disney Taxi (PDT), we are a fully government-licensed
                taxi company with over 10 years of trusted service. We provide
                tourist packages and corporate travel solutions across Paris.
                Our fleet includes sedans, SUVs, minivans, and luxury vehicles
                to suit every need. With fixed pricing, there are no hidden fees
                or extra charges ever.
              </p>
              <p>
                From airport transfers to Disneyland Paris and city tours, we
                ensure comfort, safety, and top-class service.
              </p>
              <button className="cntWhtap-btn" onClick={handleWhatsappClick}>
                Connect Whatsapp
              </button>
            </div>

            <div
              className="image-side "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={AboutUsImage} alt="About Paris Disney Taxi" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <FleetsPage />
      </section>

      <section>
        <HourlyPackage />
      </section>
      <section>
        <PackagePage />
      </section>

      <section className="safe-section">
        <img src={sefaImage} alt="" className="safe-image" />
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h3 className="modal-title">Booking Form {currentStep}/3</h3>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Step 1: Booking Details */}
              {currentStep === 2 && (
                <div className="modal-step">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Pickup Date</label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Pickup Time</label>
                      <input
                        type="time"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Arrival Flight number</label>
                      <input
                        type="text"
                        name="arrivalFlightNumber"
                        value={formData.arrivalFlightNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row form-row-two">
                    <div className="form-group">
                      <label>Luggage</label>
                      <select
                        name="luggage"
                        value={formData.luggage}
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="1">1 Bag</option>
                        <option value="2">2 Bags</option>
                        <option value="3">3 Bags</option>
                        <option value="4">4+ Bags</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Number of children</label>
                      <select
                        name="numberOfChildren"
                        value={formData.numberOfChildren}
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Select Vehicle</label>
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
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 3 && (
                <div className="modal-step">
                  <div className="form-row form-row-two">
                    <div className="form-group">
                      <label>First name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="+33"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Payment Method</label>
                      <select
                        name="paymentmethod"
                        value={formData.paymentmethod}
                        onChange={handleInputChange}
                      >
                        <option value="0">Select</option>
                        <option value="0">Pay cash to driver</option>
                        <option value="1">
                          Pay by credit card to driver (+5€ way)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="summary-row">
                    <span className="TotalFare">Total Fare :</span>
                    <span>
                      <span className="total-amount">
                        {formData.totalFare} €{" "}
                      </span>{" "}
                      (all taxes included)
                    </span>
                  </div>

                  <div className="form-info-box">
                    <p>
                      {" "}
                      *We can generally accept all bookings up to 12 hours
                      before the time of your transfer. For late booking please
                      contact our customer service +33 624 891 938
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {/* {currentStep === 3 && (
                <div className="modal-step">
                  <div className="confirmation-box">
                    <h4>Booking Summary</h4>

                    <div className="summary-row">
                      <span>Pickup:</span>
                      <strong>
                        {formData.pickupLocation || "Not specified"}
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>Drop:</span>
                      <strong>
                        {formData.dropLocation || "Not specified"}
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>Date & Time:</span>
                      <strong>
                        {formData.pickupDate || "Not specified"} at{" "}
                        {formData.pickupTime || "Not specified"}
                      </strong>
                    </div>

                    <div className="summary-row">
                      <span>Passenger:</span>
                      <strong>
                        {formData.firstName} {formData.lastName}
                      </strong>
                    </div>

                    <div className="summary-row summary-total">
                      <span>Total Fare:</span>
                      <strong className="total-amount">
                        {formData.totalFare} €{" "}
                        <span className="tax-note">(all taxes included)</span>
                      </strong>
                    </div>
                  </div>

                  <div className="form-info-box">
                    <p>
                      By clicking "Book Now", you agree to our Terms &
                      Conditions and Privacy Policy.
                    </p>
                  </div>
                </div>
              )} */}
            </div>

            {/* Modal Footer with Buttons */}
            <div className="modal-footer">
              {currentStep >= 1 && (
                <button
                  className="btn-modal modal-btn-previous"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}

              {currentStep == 2 ? (
                <button
                  className="btn-modal modal-btn-next"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button
                  className="btn-modal modal-btn-book"
                  onClick={handleFinalSubmit}
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
