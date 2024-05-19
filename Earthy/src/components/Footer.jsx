import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <h3>Crafting a greener future, one step at a time.</h3>
        <div className="footerLinks">
          <Link to="/">Home</Link>
          <Link to="/kitchen">Kitchen</Link>
          <Link to="/bathroom">Bathroom</Link>
          <Link to="/Selfcare">Selfcare</Link>
          <Link to="/About">About</Link>
        </div>
        <p className="crName">© Earthy 2024 </p>
        <div className="findInfo">
          <p>
            <span>Adress:</span> Earthy <br />
            45 Bloom Street, FL 12345 USA
          </p>
          <p>
            <span>Email:</span> earthy@greener.com
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
