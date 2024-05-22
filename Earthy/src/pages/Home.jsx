import "../pages/style/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <header id="heroWrapper">
        <img src="./bg2.jpg" />
        <div id="heroOverlay">
          <h1>Desiring to live a more eco-friendly life?</h1>
          <h2>Here you can find 100% Eco-friendly products for your home</h2>
        </div>
      </header>
      <div id="indexMain">
        <div id="indexLinks">
          <div className="linksWrapper">
            <Link to="/kitchen">
              <img src="./linkImg1.jpg" />
              <span>Kitchen</span>
            </Link>
          </div>
          <div className="linksWrapper">
            <Link to="/bathroom">
              <img src="./linkImg2.avif" />
              <span>Bathroom</span>
            </Link>
          </div>
          <div className="linksWrapper">
            <Link to="/Selfcare">
              <img src="./linkImg3.avif" />
              <span>Selfcare</span>
            </Link>
          </div>
        </div>

        <p id="mainPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed nisi
          ipsum. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam vel scelerisque lorem. Sed laoreet viverra
          scelerisque. Integer consectetur dui pharetra, rutrum arcu et,
          elementum dolor. Quisque auctor finibus nibh eu dignissim. Morbi id
          ullamcorper libero. Donec volutpat diam eget augue imperdiet, at
          vulputate dolor aliquet. Nulla rhoncus justo eu blandit ullamcorper.
          Praesent id dolor nibh. Mauris tristique eget magna sit amet pretium.
          <br />
          In ut dui efficitur, varius lectus ac, fringilla nibh. Maecenas eu
          purus ultricies metus convallis posuere. Praesent diam orci, feugiat
          in arcu a, maximus feugiat ipsum. Integer lectus magna, finibus sit
          amet purus at, interdum maximus mauris. Proin eu enim sit amet orci
          posuere aliquet. Phasellus ante odio, tincidunt quis felis a, volutpat
          porttitor enim. Fusce lacinia velit at nisi placerat, vitae gravida
          dui malesuada.
        </p>
        <div id="indexContributeImg">
          <img src="./indexImg.jpg" alt="Plant in hands" />
          <div id="contributeText">
            <h3>CONTRIBUTE TO A MORE SUBSTAINABLE FUTURE</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e8eaed"
            >
              <path d="m368-592 89-147-59-98q-12-20-34.5-20T329-837l-98 163 137 82Zm387 272-89-148 139-80 64 107q11 17 12 38t-9 39q-10 20-29.5 32T800-320h-45ZM640-40 480-200l160-160v80h190l-58 116q-11 20-30 32t-42 12h-60v80Zm-387-80q-20 0-36.5-10.5T192-158q-8-16-7.5-33.5T194-224l34-56h172v160H253Zm-99-114L89-364q-9-18-8.5-38.5T92-441l16-27-68-41 219-55 55 220-69-42-91 152Zm540-342-219-55 69-41-125-208h141q21 0 39.5 10.5T629-841l52 87 68-42-55 220Z" />
            </svg>
          </div>
        </div>
        <h3 id="reviewTitle">See what other think!</h3>
        <div id="indexReviews">
          <div className="reviewBox">
            <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <p>The best affordable eco-friendly products on the market! </p>
            <p className="reviewName">- Alice</p>
          </div>
          <div className="reviewBox">
            <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <p>The best affordable eco-friendly products on the market! </p>
            <p className="reviewName">- Bob</p>
          </div>
          <div className="reviewBox">
            <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            <p>The best affordable eco-friendly products on the market! </p>
            <p className="reviewName">- Cesar</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
