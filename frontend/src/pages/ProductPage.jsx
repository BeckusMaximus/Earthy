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
            <button>Add to wishlist</button>
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

/* import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../pages/style/ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const fetchProduct = () => {
      fetch(`http://localhost:3000/productPage/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        });
    };

    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/productPage/${productId}`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setReviews([]); // Hantera felaktiga data genom att sätta reviews till en tom array
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
    fetchProduct();
  }, [productId]);

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
    } catch (error) {
      console.error("Error submitting review:", error);
    }
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
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </div>
        </div>
        <div id="reviews">
          <h3>Customer reviews</h3>
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
    </>
  );
};

export default ProductPage;
 */
