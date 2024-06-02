import "../pages/style/confirmation.css";

import Confetti from "react-confetti";
const confirmation = () => {
  /* const { width, height } = useWindowSize(); */
  /* const windowSize = 100% */
  return (
    <>
      <Confetti />
      <div id="confirmWrapper">
        <h1>Your order has been confirmed!</h1>
        <p>
          Thank you for contributing to a greener earth! You will soon get an
          order cornfirmation in your mail!
        </p>
      </div>
    </>
  );
};
export default confirmation;
