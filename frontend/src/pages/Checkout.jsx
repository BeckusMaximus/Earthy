import "../pages/style/payment.css";
import { useNavigate, Link } from "react-router-dom";
import useCart from "/src/hooks/useCart";
import { VscClose } from "react-icons/vsc";
const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: state.cartItems }),
      });
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
    <div className="cartItems">
      <h2>Checkout</h2>
      <h3>Cart overview</h3>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            <div>
              {/*  <div className="listImg">
                <img src={item.imgLink} />
              </div> */}

              <p>{item.name}</p>
              <p>{item.quantity}x</p>
              <p>
                {/*  {item.quantity} */} ${item.price}
              </p>
              <button onClick={() => handleRemove(item.id)}>
                <VscClose />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <button onClick={handleCheckout}>Betala</button>
      <Link to="/confirmation">Checkout</Link>
    </div>
  );
};

export default Checkout;
