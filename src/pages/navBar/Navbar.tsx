import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <div>
      <button 
        className={`navbar__hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/booking" onClick={closeMenu}>Booking</NavLink>
        </li>
        <li>
          <NavLink to="/service" onClick={closeMenu}>Service</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
      </ul>

      {/* Overlay for mobile */}
      {/* {isMenuOpen && <div className="navbar__overlay" onClick={closeMenu}></div>} */}
    </nav>
  );
};

export default Navbar;