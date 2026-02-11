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
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);

  // Form data state
  const [formData, setFormData] = useState({
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
    totalFare: "10,234.00",
  });

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
    }else{
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

  const handleFinalSubmit = () => {
    // Handle final booking submission
    console.log("Booking submitted:", formData);
    closeModal();
    alert("Booking confirmed! We'll contact you shortly.");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="home-container">
        <img className="Banner" src={banner} alt="Banner" />
        <div className="BnrTxt">
          <h1>
            <span>Praise</span>
            <span>Cabs</span>
          </h1>
        </div>

        {/* Quick Booking Card */}
        <div className="TpBkCrd">
          <div className="TpBkCrd__item">
            <label>Trip Type</label>
            <select>
              <option value="1">Single Trip</option>
              <option value="2">Round Trip</option>
            </select>
          </div>

          <div className="TpBkCrd__item">
            <label>Pickup From</label>
            <input type="text" placeholder="Pickup Location" />
          </div>

          <div className="TpBkCrd__item">
            <label>Destination</label>
            <input type="text" placeholder="Drop Location" />
          </div>

          <div className="TpBkCrd__item_pass">
            <label>Passengers</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="TpBkCrd__item TleFreBy">
            <p>
              Total Fare: <span className="TleAmt">10,234.00 €</span>
            </p>
            <button onClick={openModal}>Book Now</button>
          </div>
        </div>
      </section>

      {/* Container for other sections */}
      <section className="container">
        {/* Our Tour Packages */}
        <div className="TrPckBy">
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
              <button className="btn1">Enquire Now</button>
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
              <button className="cntWhtap-btn">Connect Whatsapp</button>
            </div>

            <div className="image-side">
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
                      <select
                        name="arrivalFlightNumber"
                        value={formData.arrivalFlightNumber}
                        onChange={handleInputChange}
                      >
                        <option value="">Select flight</option>
                        <option value="AF123">AF123</option>
                        <option value="BA456">BA456</option>
                        <option value="LH789">LH789</option>
                      </select>
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
                        <option value="0">Cash</option>
                        <option value="1">Online</option>
                      </select>
                      </div>
                    </div>

                    <div className="summary-row">
                      <span className="TotalFare">Total Fare  :</span>
                      <span >
                        <span className="total-amount">{formData.totalFare} €{" "}</span> (all taxes included)
                      </span>
                    </div>

                  <div className="form-info-box">
                    <p> *We can generally accept all bookings up to 12 hours before the time of your transfer. For late booking please contact our customer service +33 624 891 938
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
                <button className="btn-modal modal-btn-next" onClick={handleNext}>
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
