import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../ProductCard/ProductCard.css";
import useCart from "/src/hooks/useCart";

const ProductCard = ({ id, imgLink, name, price }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate(`/productPage/${id}`);
  };
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const product = { id, imgLink, name, price };
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="card">
      <div id="imgContainer">
        <img src={imgLink} alt={name} />
      </div>
      <div className="productDetails">
        <p id="productName">{name}</p>
        <p id="price">${price.toFixed(2)}</p>
        <div className="card-btn">
          <button id="moreBtn" onClick={handleReadMoreClick}>
            More
          </button>
          <button id="cartBtn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  imgLink: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
