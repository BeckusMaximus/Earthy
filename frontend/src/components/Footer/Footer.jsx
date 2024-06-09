import "../Footer/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerLinks">
          <Link to="/">Home</Link>
          <Link to="/categoryPage/Kitchen">Kitchen</Link>
          <Link to="/categoryPage/Bathroom">Bathroom</Link>
          <Link to="/categoryPage/Selfcare">Selfcare</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <p className="crName">© Earthy 2024 </p>
        <div className="findInfo">
          <p>
            <span>Email:</span> support@earthy.com
          </p>
          <p>
            <span>Phone:</span> +4612 34 567 89
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
