
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
            <span className="section-bar-flt"></span>
            <h2>Our fleets</h2>
          </div>

          <div className="fleets-grid">
            
            {fleets.map((fleet, index) => (
              <div key={index} className="fleet-card">
                 <h4 className="fleet-name">{fleet.name}</h4>
                <div className="fleet-image-wrap">
                  <img 
                    src={fleet.image} 
                    alt={fleet.name} 
                    className="fleet-img"
                  />
                </div>
                
               
                
                <div className="fleet-specs">
                  <div className="spec-item">
                    <img src={ContactImage} alt="" />
                    <span>{fleet.passengers}</span>
                  </div>
                  
                  <div className="spec-item">
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
