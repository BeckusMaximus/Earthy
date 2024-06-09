import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

// Skapar en Context för kundvagnen
const CartContext = createContext();

// Reducer funktion för att hantera kundvagnens state
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
      // Kontrollera om produkten redan finns i kundvagnen
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.product.id
      );
      // Om produkten redan finns, öka kvantiteten
      if (existingProductIndex >= 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return { ...state, cartItems: updatedCartItems };
      }
      // Om produkten inte finns, lägg till den i kundvagnen
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      // Ta bort produkten från kundvagnen
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.id),
      };
    }
    case "INCREASE_QUANTITY": {
      // Öka kvantiteten för en specifik produkt
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
      // Minska kvantiteten för en specifik produkt, om kvantiteten är större än 1
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
      // Rensa kundvagnen
      return {
        ...state,
        cartItems: [],
      };
    }
    case "SET_CART_ITEMS": {
      // Sätt kundvagnens objekt från lokal lagring

      return {
        ...state,
        cartItems: action.payload,
      };
    }
    default:
      return state;
  }
};

// Provider komponent för att hantera kundvagnens state och ge det till andra komponenter
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Spara kundvagnens objekt till lokal lagring när state ändras
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
