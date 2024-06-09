import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/style/ProductPage.css";
import ReviewForm from "../components/ReviewForm/reviewForm";
import useCart from "../hooks/useCart";
const ProductPage = () => {
  // Hämtar produkt-ID från URLen
  const { productId } = useParams();
  // Skapar en state-variabel för att lagra produktinformationen
  const [product, setProduct] = useState({});
  // Skapar en state-variabel för att lagra recensioner
  const [reviews, setReviews] = useState([]);
  // Hämtar dispatch funktion från useCart hook
  const { dispatch } = useCart();

  // useEffect hook för att hämta produkt och recensioner när produkt-ID ändras
  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        // Hämtar produkt och recensioner från servern
        const response = await fetch(
          `http://localhost:3000/productPage/${productId}`
        );
        const data = await response.json();
        setProduct(data.product);
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching product and reviews", error);
      }
    };

    fetchProductAndReviews(); // Anropar funktionen för att hämta produkt och recensioner
  }, [productId]); // Kör om när produkt-ID ändras

  // Hanterar lägg till i kundvagnen
  const handleAddToCart = () => {
    // Dispatchar en action för att lägga till produkten i kundvagnen
    dispatch({ type: "ADD_TO_CART", product });
  };

  // Hanterar när en recension skickas in
  const handleReviewSubmitted = () => {
    const fetchReviews = async () => {
      try {
        // Hämtar recensionerna från servern
        const response = await fetch(
          `http://localhost:3000/productPage/${productId}`
        );
        const data = await response.json();
        setReviews(data.reviews); // Uppdaterar recensionerna i state
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };
    // Anropar funktionen för att hämta recensioner
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
