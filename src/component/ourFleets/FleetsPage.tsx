
// import "./FleetsPage.css";

// // Replace these with your actual imports
// // import SedanImage from "../assets/sedan.jpg";
// // import ComfortSedanImage from "../assets/comfort-sedan.jpg";
// // import EconomyVanImage from "../assets/economy-van.jpg";
// // import BussinessVanImage from "../assets/business-van.jpg";
// // import ContactImage from "../assets/contact-icon.png";
// // import LuggageImage from "../assets/luggage-icon.png";
// // import WifiImage from "../assets/wifi-icon.png";
// // import WaterBottleImage from "../assets/water-icon.png";
// // import PowerImage from "../assets/power-icon.png";
// // import MusicImage from "../assets/music-icon.png";

// import SedanImage from "../../assets/sedan.svg";
// import ComfortSedanImage from "../../assets/confort-sedan.svg";
// import EconomyVanImage from "../../assets/economy-van.svg";
// import BussinessVanImage from "../../assets/bussiness-van.svg";
// import ContactImage from "../../assets/contact.svg";
// import LuggageImage from "../../assets/luggage.svg";
// import WifiImage from "../../assets/wifi.svg";
// import WaterBottleImage from "../../assets/waterBootle.svg";
// import MusicImage from "../../assets/music.svg";
// import PowerImage from "../../assets/power.svg";

// const fleets = [
//   { name: "Sedan Class", image: SedanImage },
//   { name: "Comfort Sedan", image: ComfortSedanImage },
//   { name: "Economy Van", image: EconomyVanImage },
//   { name: "Business Van", image: BussinessVanImage },
// ];

// const FleetsPage = () => {
//   return (
//     <section className="ourfltsBy">
//       <div className="container">
//         <div className="flets-sectionBy">
//           <div className="titleBy">
//             <span className="Title-line"></span>
//             <p className="title">Our Fleets</p>
//           </div>

//           <div className="fleets-grid">
//             {fleets.map((fleet, index) => (
//               <div key={index} className="fleet-card">
//                 <h3 className="fleet-name">{fleet.name}</h3>
//                 <img src={fleet.image} alt={fleet.name} className="fleet-img" />

//                 <div className="fleet-footer">
//                   <div className="fleet-icons">
//                     <span>
//                       <img src={ContactImage} alt="Seats" /> 4
//                     </span>
//                     <span>
//                       <img src={LuggageImage} alt="Luggage" /> 2
//                     </span>
//                   </div>
//                   <button className="book-btn">Book Now</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="BtmTxt">
//             <p>*On selected vehicles</p>
//             <span>
//               <img src={WifiImage} alt="WiFi" />
//               <img src={WaterBottleImage} alt="Water Bottle" />
//               <img src={PowerImage} alt="Power Outlet" />
//               <img src={MusicImage} alt="Music System" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FleetsPage;



import "./FleetsPage.css";
import SedanImage from "../../assets/sedan.svg";
import ComfortSedanImage from "../../assets/confort-sedan.svg";
import EconomyVanImage from "../../assets/economy-van.svg";
import BussinessVanImage from "../../assets/bussiness-van.svg";
import ContactImage from "../../assets/contact.svg";
import LuggageImage from "../../assets/luggage.svg";
import WifiImage from "../../assets/wifi.svg";
import WaterBottleImage from "../../assets/waterBootle.svg";
import MusicImage from "../../assets/music.svg";
import PowerImage from "../../assets/power.svg";
const FleetsPage = () => {
  const fleets = [
    {
      name: "Sedan",
      image: SedanImage,
      passengers: 4,
      luggage: 2
    },
    {
      name: "Comfort Sedan",
      image: ComfortSedanImage,
      passengers: 4,
      luggage: 3
    },
    {
      name: "Economy Class Van",
      image: EconomyVanImage,
      passengers: 8,
      luggage: 8
    },
    {
      name: "Business Class Van",
      image: BussinessVanImage,
      passengers: 8,
      luggage: 8
    }
  ];

  return (
    <div>

      <section className="fleets-section">
        <div className="fleets-container">
          
          <div className="section-header">
            <span className="section-bar"></span>
            <h2>Our fleets</h2>
          </div>

          <div className="fleets-grid">
            {fleets.map((fleet, index) => (
              <div key={index} className="fleet-card">
                <div className="fleet-image-wrap">
                  <img 
                    src={fleet.image} 
                    alt={fleet.name} 
                    className="fleet-img"
                  />
                </div>
                
                <h4 className="fleet-name">{fleet.name}</h4>
                
                <div className="fleet-specs">
                  <div className="spec-item">
                    {/* <svg className="spec-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
                      <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg> */}
                    <img src={ContactImage} alt="" />
                    <span>{fleet.passengers}</span>
                  </div>
                  
                  <div className="spec-item">
                    {/* <svg className="spec-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8"/>
                      <rect x="10" y="6" width="4" height="4" fill="currentColor"/>
                    </svg> */}
                    <img src={LuggageImage} alt="" />
                    <span>{fleet.luggage}</span>
                  </div>
                  <a href="#book" className="fleet-book-link">Book now</a>
                </div>

                
              </div>
            ))}
          </div>

          <div className="BtmTxt">
            <p>*On selected vehicles</p>
            <span>
              <img src={WifiImage} alt="WiFi" />
              <img src={WaterBottleImage} alt="Water Bottle" />
              <img src={PowerImage} alt="Power Outlet" />
              <img src={MusicImage} alt="Music System" />
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};

export default FleetsPage;
