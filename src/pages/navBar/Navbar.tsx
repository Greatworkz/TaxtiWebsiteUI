import "./Navbar.css";
// import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="navbar__menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/booking">Booking</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
