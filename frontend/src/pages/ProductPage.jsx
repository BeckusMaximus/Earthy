import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/style/ProductPage.css";
import ReviewForm from "../components/ReviewForm/reviewForm";
import useCart from "../hooks/useCart";
const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/productPage/${productId}`
        );
        const data = await response.json();
        setProduct(data.product);
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching product and reviews:", error);
      }
    };

    fetchProductAndReviews();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const handleReviewSubmitted = () => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/productPage/${productId}`
        );
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  };

  return (
    <>
      <div id="productView">
        <h3 id="productLabel">{product.name}</h3>
        <div id="productWrapper">
          <div id="imageContainer">
            <img src={product.image_link} alt={product.name} />
          </div>
          <div id="descriptionContainer">
            <h4>Description</h4>
            <p>{product.description}</p>
            <p>
              <span>Price: ${product.price}</span>
            </p>
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
        <div id="reviewWrap">
          <h3>Customer reviews</h3>
          <div id="reviews">
            <ReviewForm
              productId={productId}
              onReviewSubmitted={handleReviewSubmitted}
            />
            <div id="reviewsContainer">
              {reviews.map((review) => (
                <div className="reviewBox" key={review.id}>
                  <h4>{review.name}</h4>
                  <p>{review.review_text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
