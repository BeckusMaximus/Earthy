/* import PropTypes from "prop-types";
import useCart from "../hooks/useCart"; // Uppdaterad import
import "../pages/style/CartOverlay.css";

const CartOverlay = ({ onClose }) => {
  const { state, dispatch } = useCart();
  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <div className="cart-overlay">
      <div className="cart-overlay-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h3>Shopping Cart</h3>
        <ul>
          {state.cartItems.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price}
                </span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <h4>Total: ${totalAmount.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

CartOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartOverlay;
 */
