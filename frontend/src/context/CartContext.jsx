import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (!action.product || !action.product.id) {
        console.error(
          "Invalid product object in ADD_TO_CART action:",
          action.product
        );
        return state;
      }
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return { ...state, cartItems: updatedCartItems };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    }
    case "INCREASE_QUANTITY": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
      };
    }
    case "SET_CART_ITEMS": {
      return {
        ...state,
        cartItems: action.payload,
      };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      dispatch({
        type: "SET_CART_ITEMS",
        payload: JSON.parse(storedCartItems),
      });
    }
  }, []);

  // Save cart items to localStorage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
