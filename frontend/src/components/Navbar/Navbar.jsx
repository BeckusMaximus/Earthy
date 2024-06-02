import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../Navbar/Navbar.css";
import useCart from "/src/hooks/useCart";
import CartDropdown from "../CartDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleOutsideClick = (e) => {
    if (
      !e.target.closest(".cart-dropdown") &&
      !e.target.closest(".cart-button")
    ) {
      setIsCartOpen(false);
    }
  };

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
          <img id="logo" src="./monstera-logo.png" alt="Logo" />
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
          Cart ({state.cartItems.length})
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

/* import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "../Navbar/Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <>
      <nav className="navbar">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          className="hamburgerMenu"
        />
        <div className="logo">
   
          <img id="logo" src="./monstera-logo.png" alt="Logo" />
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
        <button>Cart</button>
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
 */
