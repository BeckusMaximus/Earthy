import { Link } from "react-router-dom";
import useCart from "/src/hooks/useCart"; // Importerar en custom hook för att hantera kundvagnen
import PropTypes from "prop-types";
import "../cartDropDown/cartDropdown.css";
import { VscClose } from "react-icons/vsc";

const CartDropdown = ({ onClose }) => {
  // Hämtar state och dispatch funktion från useCart hook
  const { state, dispatch } = useCart();
  // Beräknar det totala beloppet för varor i kundvagnen
  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Hanterar borttagning av en vara från kundvagnen
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };
  // Hanterar ökning av kvantiteten för en vara i kundvagnen
  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };
  // Hanterar minskning av kvantiteten för en vara i kundvagnen
  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", id });
  };

  return (
    <div className="cart-dropdown">
      {state.cartItems.length === 0 ? (
        <p>Kundvagnen är tom</p>
      ) : (
        <ul>
          {state.cartItems.map((item) => (
            <li key={item.id}>
              <div className="cart-item">
                <div className="listImg">
                  <img src={item.image_link} alt={item.name} />
                </div>
                <p>{item.name}</p>
                <p className="cartPrice">${item.price}</p>
                <div className="add">
                  <button
                    className="addBtn"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                  <p className="quantityCart">{item.quantity}</p>
                  <button
                    className="decreaseBtn"
                    onClick={() => handleDecrease(item.id)}
                  >
                    -
                  </button>
                </div>
                <button
                  className="removeBtn"
                  onClick={() => handleRemove(item.id)}
                >
                  <VscClose />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h4>Total: ${totalAmount.toFixed(2)}</h4>
      </div>
      <Link to="/checkout" onClick={onClose}>
        Checkout
      </Link>
    </div>
  );
};
// Typkontroll för props
CartDropdown.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartDropdown;
