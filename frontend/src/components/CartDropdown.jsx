/* import React from 'react'; */
import { Link } from "react-router-dom";
import useCart from "/src/hooks/useCart";
import PropTypes from "prop-types";
import "./cartDropdown.css";
import { VscClose } from "react-icons/vsc";

const CartDropdown = ({ onClose }) => {
  const { state, dispatch } = useCart();
  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", id });
  };

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
CartDropdown.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CartDropdown;
