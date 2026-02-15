// src/services/emailService.js
const emailjs = (await import('@emailjs/browser')).default;
// 🔹 Build Location Details
const buildLocationDetails = (baseLocation:any, formData:any, type:any) => {
    let details = baseLocation || '';
  
    if (type === 'pickup') {
      if (formData.pickupAddress) details += ` - ${formData.pickupAddress}`;
      if (formData.pickupTrainStation) details += ` - ${formData.pickupTrainStation}`;
      if (formData.pickupAirportHotel) details += ` - ${formData.pickupAirportHotel}`;
      if (formData.pickupDisneyLocation) details += ` - ${formData.pickupDisneyLocation}`;
    }
  
    if (type === 'drop') {
      if (formData.dropAddress) details += ` - ${formData.dropAddress}`;
      if (formData.dropTrainStation) details += ` - ${formData.dropTrainStation}`;
      if (formData.dropAirportHotel) details += ` - ${formData.dropAirportHotel}`;
      if (formData.dropDisneyLocation) details += ` - ${formData.dropDisneyLocation}`;
    }
  
    return details;
  };
  
  
  // 🔹 Build Plain Text Email
  const buildEmailMessage = (formData:any, pickupDetails:any, dropDetails:any) => {
    return `
  🚖 PRAISE CABS - NEW BOOKING CONFIRMATION
  ==================================================
  
  📅 BOOKING DETAILS
  --------------------------------------------------
  Trip Type: ${formData.tripType === 'single' ? 'Single Trip' : 'Round Trip'}
  Booking Date: ${new Date().toLocaleString()}
  
  📍 PICKUP INFORMATION
  --------------------------------------------------
  Location: ${pickupDetails}
  Pickup Date: ${formData.pickupDate || 'Not specified'}
  Pickup Time: ${formData.pickupTime || 'Not specified'}
  
  📌 DROP INFORMATION
  --------------------------------------------------
  Location: ${dropDetails}
  
  🧳 TRAVEL DETAILS
  --------------------------------------------------
  Passengers: ${formData.passengers}
  Luggage: ${formData.luggage || 'Not specified'}
  Children: ${formData.numberOfChildren || '0'}
  ${formData.arrivalFlightNumber ? `✈ Flight Number: ${formData.arrivalFlightNumber}` : ''}
  
  👤 CUSTOMER INFORMATION
  --------------------------------------------------
  Name: ${formData.firstName} ${formData.lastName}
  Email: ${formData.email}
  Phone: ${formData.phoneNumber}
  Payment Method: ${formData.paymentmethod === 'cash' ? 'Cash' : 'Online'}
  
  💶 TOTAL FARE
  ==================================================
  ${formData.totalFare} € (All taxes included)
  
  🙏 Thank you for choosing Praise Cabs!
  📞 For any queries: +33 374 479 185
  
  ==================================================
  `;
  };
  
  
  // 🔹 Main Send Function
const sendBookingEmail = async (formData:any) => {
    try {
      const pickupDetails = buildLocationDetails(
        formData.pickupLocation,
        formData,
        'pickup'
      );
  
      const dropDetails = buildLocationDetails(
        formData.dropLocation,
        formData,
        'drop'
      );
  
      const message = buildEmailMessage(formData, pickupDetails, dropDetails);
  
      const emailFormData = new FormData();
      emailFormData.append("access_key", "509e28d0-66bd-4f28-a6c7-9f5f33133889");
      emailFormData.append("subject", `New Booking - ${formData.firstName} ${formData.lastName}`);
      emailFormData.append("from_name", `${formData.firstName} ${formData.lastName}`);
      emailFormData.append("email", formData.email);
      emailFormData.append("message", message);
      emailFormData.append("to_email", formData.email);
      emailFormData.append("reply_to", formData.email);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: emailFormData
      });
  
      const data = await response.json();
      return data.success;
  
    } catch (error) {
      console.error("Email error:", error);
      return false;
    }
  };

  export default sendBookingEmail;
  