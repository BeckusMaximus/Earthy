import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../Navbar/Navbar.css";
import useCart from "/src/hooks/useCart";
import CartDropdown from "../cartDropDown/CartDropdown";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  // Skapar en state-variabel för att hantera om sidomenyn är öppen eller stängd
  const [isOpen, setIsOpen] = useState(false);
  // Hämtar state från useCart hook
  const { state } = useCart();
  // Skapar en state-variabel för att hantera om kundvagnens dropdown är öppen eller stängd
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Funktion för att hantera klick på kundvagnsknappen
  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  // Funktion för att hantera klick utanför kundvagnens dropdown
  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".cart-dropdown") &&
      !e.target.closest(".cart-button")
    ) {
      setIsCartOpen(false);
    }
  };
  // useEffect hook för att lyssna på klick utanför kundvagnens dropdown
  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isCartOpen]);

  return (
    <>
      <nav className="navbar">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          className="hamburgerMenu"
        />
        <div className="logo">
          <img
            id="logo"
            src="/src/assets/monstera-logo.png"
            alt="Monstera logo"
          />
          <h3>EARTHY</h3>
        </div>
        <div className="nav-links">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/categoryPage/Kitchen" onClick={() => setIsOpen(false)}>
            Kitchen
          </Link>
          <Link to="/categoryPage/Bathroom" onClick={() => setIsOpen(false)}>
            Bathroom
          </Link>
          <Link to="/categoryPage/Selfcare" onClick={() => setIsOpen(false)}>
            Selfcare
          </Link>
        </div>
        <button className="cart-button" onClick={handleCartButtonClick}>
          <FaCartShopping /> {state.cartItems.length}
        </button>
        {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
      </nav>
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <Link className="linkDisplay" to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          className="linkDisplay"
          to="/categoryPage/Kitchen"
          onClick={() => setIsOpen(false)}
        >
          Kitchen
        </Link>
        <Link
          className="linkDisplay"
          to="/categoryPage/Bathroom"
          onClick={() => setIsOpen(false)}
        >
          Bathroom
        </Link>
        <Link
          className="linkDisplay"
          to="/categoryPage/Selfcare"
          onClick={() => setIsOpen(false)}
        >
          Selfcare
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
