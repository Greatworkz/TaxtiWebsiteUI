import PariseTripOne from "../../assets/paris-trip-1.svg";
import PariseTripTwo from "../../assets/paris-trip-2.svg";
import PariseTripThree from "../../assets/paris-trip-3.svg";
import './HourlyPackage.css'

const items = [
  {
    img: PariseTripOne,
    title: "Sedan Class",
    hours: 4,
    price: "225 €",
    description:
      "Eiffel Tower, Louvre Museum, Notre Dame Cathedral, Arc de Triomphe, Montmartre, Champs-Élysées Avenue, Musée d’Orsay, and Sainte-Chapelle.",
  },
  {
    img: PariseTripTwo,
    title: "Sedan Class",
    hours: 4,
    price: "225 €",
    description:
      "Eiffel Tower, Louvre Museum, Notre Dame Cathedral, Arc de Triomphe, Montmartre, Champs-Élysées Avenue, Musée d’Orsay, and Sainte-Chapelle.",
  },
  {
    img: PariseTripThree,
    title: "Sedan Class",
    hours: 4,
    price: "225 €",
    description:
      "Eiffel Tower, Louvre Museum, Notre Dame Cathedral, Arc de Triomphe, Montmartre, Champs-Élysées Avenue, Musée d’Orsay, and Sainte-Chapelle.",
  },
];

const HourlyPackage = () => {
  return (
    <section className="HrPakBy">
      <div className="HrCntBy">
        <p className="HrTle">Hourly Hire Package</p>
        <p className="HrCnt">
          Are you looking to hire a Paris Disney Transfer car for a day out
          with a driver, or <br /> perhaps just a few hours? Choose your perfect
          plan
        </p>
      </div>

      <div className="HrPakcontainer">
        <div className="HrPak-grid">
          {items.map((item, index) => (
            <div className="HrPak-card" key={index}>
              <div className="HrPak-ImgBy">
                <img src={item.img} alt={item.title} className="HrPak-img" />
              </div>
              <div className="HrCrd-Cnt">
                <h3 className="HrPak-name">{item.title}</h3>
                <p>
                  {item.hours} Hours <span className="HrTrpAmt">{item.price}</span>
                </p>
                <p>{item.description}</p>
                <div className="HrPak-footer">
                  <button className="HrPak-book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HourlyPackage;
