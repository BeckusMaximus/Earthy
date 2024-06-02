import AppRouter from "./router/router";
import "./App.css";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
