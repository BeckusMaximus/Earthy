import { useState } from "react";
import PropTypes from "prop-types";
import "../ReviewForm/reviewForm.css";
const ReviewForm = ({ productId, onReviewSubmitted }) => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newReview = {
        product_id: productId,
        name: name,
        review_text: reviewText,
      };
      await fetch(`http://localhost:3000/productPage/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
      setName("");
      setReviewText("");
      onReviewSubmitted();
    } catch (error) {
      console.error("Error submitting review:", error);
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
ReviewForm.propTypes = {
  productId: PropTypes.string,
  onReviewSubmitted: PropTypes.func,
};
export default ReviewForm;
