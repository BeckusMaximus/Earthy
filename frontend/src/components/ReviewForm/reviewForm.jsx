import { useState } from "react";
import PropTypes from "prop-types";
import "../ReviewForm/reviewForm.css";
const ReviewForm = ({ productId, onReviewSubmitted }) => {
  // Skapar state-variabler för att lagra namn och recensionstext
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  // Hanterar formulärets submit-händelse
  const handleSubmit = async (event) => {
    // Hindrar standardbeteende för formulärets submit-händelse
    event.preventDefault();
    try {
      // Kopplar produktens ID till recensionen
      const newReview = {
        product_id: productId,
        name: name,
        review_text: reviewText,
      };
      // Skickar en POST-begäran till servern med den nya recensionen
      await fetch(`http://localhost:3000/productPage/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
      // Återställer fältens värden efter att recensionen har skickats
      setName("");
      setReviewText("");
      onReviewSubmitted();
    } catch (error) {
      // Loggar eventuella fel som uppstår
      console.error("Error submitting review", error);
    }
  };

  return (
    <form id="reviewForm" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        id="inputName"
        type="text"
        placeholder="Ex. Anna"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Your opinion</label>
      <textarea
        id="textarea"
        placeholder="Write something here!"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <input id="submitBtn" type="submit" value="Submit" />
    </form>
  );
};
// Typkontroll för props
ReviewForm.propTypes = {
  productId: PropTypes.string,
  onReviewSubmitted: PropTypes.func,
};
export default ReviewForm;
