import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/*     <div className="wrap"> */}
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          className="hamburgerMenu"
        />
        <div className="logo">
          <img id="logo" src="./monstera-logo.png" alt="Logo" />
          <h3>EARTHY</h3>
        </div>
        {/*  </div> */}
        <div className="nav-links">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/kitchen" onClick={() => setIsOpen(false)}>
            Kitchen
          </Link>
          <Link to="/bathroom" onClick={() => setIsOpen(false)}>
            Bathroom
          </Link>
          <Link to="/selfcare" onClick={() => setIsOpen(false)}>
            Selfcare
          </Link>
        </div>
        <div className="wishCartWrap">
          <p>
            Wishlist <span>&#10084;</span>
          </p>

          <p>Cart</p>
        </div>
      </nav>
      <div className={`side-menu ${isOpen ? "open" : ""}`}></div>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        {/* <Hamburger
          color="#463d35"
          toggled={isOpen}
          toggle={setIsOpen}
          className="hamburgerMenu secondHam"
        /> */}
        <Link className="linkDisplay" to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          className="linkDisplay"
          to="/kitchen"
          onClick={() => setIsOpen(false)}
        >
          Kitchen
        </Link>
        <Link
          className="linkDisplay"
          to="/bathroom"
          onClick={() => setIsOpen(false)}
        >
          Bathroom
        </Link>
        <Link
          className="linkDisplay"
          to="/selfcare"
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
