import "../pages/style/checkout.css";
import { useNavigate, Link } from "react-router-dom";
import useCart from "/src/hooks/useCart";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import { SiKlarna } from "react-icons/si";

const Checkout = () => {
  // Skapar state-variabler för att lagra användarinmatningar
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState("");

  const { state, dispatch } = useCart(); // Hämtar state och dispatch funktion från useCart hook
  const navigate = useNavigate();
  // Beräknar det totala beloppet för varor i kundvagnen
  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // Hanterar borttagning av en vara från kundvagnen
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };
  // Hanterar checkout-processen
  const handleCheckout = async () => {
    try {
      const placeOrder = {
        name: name,
        phone: number,
        email: email,
        sum: total,
      };
        // Skickar en POST-begäran till servern med orderinformationen
      const response = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(placeOrder),
      });
      setName("");
      setNumber("");
      setEmail("");
      setTotal("");
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        dispatch({ type: "CLEAR_CART" });
        navigate.push("/confirmation");
      } else {
        console.error("Checkout failed:", data.error);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div id="checkoutWrapper">
      <h2>Checkout</h2>
      <div id="checkoutContainer">
        <div className="cartItems">
          <h3>Cart overview</h3>

          <ul>
            {state.cartItems.map((item) => (
              <li key={item.id}>
                <div className="listDiv">
                  <img src={item.image_link} />
                  <p>{item.quantity}x</p>
                  <p>{item.name}</p>

                  <p>${item.price}</p>
                  <button onClick={() => handleRemove(item.id)}>
                    <VscClose />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ${totalAmount.toFixed(2)}</h4>
        </div>
        <div id="billingInfo">
          <h3>Billing information</h3>
          <form>
            <label>Name:</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Adress:</label>
            <input
              type="street-adress"
              autoComplete="street-address"
              required
            />
            <label>City:</label>
            <input type="city" required></input>
            <label>Zip code:</label>
            <input type="zip" required></input>

            <div id="paymentMethod">
              <div id="radio">
                <label>
                  <input type="radio" value="klarna" name="payment"></input>
                  <SiKlarna />
                </label>
                <label>
                  <input type="radio" value="visa" name="payment"></input>

                  <img src="/src/assets/visa.png" />
                </label>
                <label>
                  <input type="radio" value="mastercard" name="payment"></input>
                  <img src="/src/assets/mastercard.webp" />
                </label>
              </div>
              <label>Card number:</label>
              <input type="card" />
              <label>Cardholder:</label>
              <input type="name" required />
              <label>Expiry date:</label>

              <div id="expiry">
                <input type="text" maxLength="2" required />
                <p>/</p>
                <input type="text" maxLength="2" required />
              </div>
              <label>CVC:</label>
              <input id="cvc" type="cvc" maxLength="3" required></input>
            </div>
            <h4>Total: ${totalAmount.toFixed(2)}</h4>
            <Link to="/confirmation">
              <input
                type="submit"
                value="Place order"
                onClick={handleCheckout}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
