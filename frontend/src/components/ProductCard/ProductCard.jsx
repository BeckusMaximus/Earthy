import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../ProductCard/ProductCard.css";
import useCart from "/src/hooks/useCart"; // Importerar en custom hook för att hantera kundvagnen

const ProductCard = ({ id, image_link, name, price }) => {
  const navigate = useNavigate(); // Använder useNavigate hook för att navigera mellan sidor

  // Hanterar klick på "More" knappen och navigerar till produktens detaljsida
  const handleReadMoreClick = () => {
    navigate(`/productPage/${id}`);
  };
  // Hämtar dispatch funktionen från useCart hook
  const { dispatch } = useCart();

  // Hanterar klick på "Add to Cart" knappen och lägger till produkten i kundvagnen
  const handleAddToCart = () => {
    const product = { id, image_link, name, price };
    // Dispatchar en action för att lägga till produkten i kundvagnen
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="card">
      <div id="imgContainer">
        <img src={image_link} alt={name} />
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

// Typkontroll för props
ProductCard.propTypes = {
  id: PropTypes.number,
  image_link: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
