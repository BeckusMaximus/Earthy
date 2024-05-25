import { useParams } from "react-router-dom";
import "../pages/style/ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  return (
    <>
      <div id="productView">
        <h3 id="productLabel">Organic Coffee</h3>
        <div id="productWrapper">
          <div id="imageContainer">
            <img src="./organicCoffe.avif" />
          </div>
          <div id="descriptionContainer">
            <h4>Description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              nisi ipsum. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Nam vel scelerisque lorem. Sed
              laoreet viverra scelerisque. Integer consectetur dui pharetra,
              rutrum arcu et, elementum dolor. Quisque auctor finibus nibh eu
              dignissim.
            </p>
            <p>
              <span>Price: $9</span>
            </p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
          </div>
        </div>
        <h3>Customer reviews</h3>
        <form id="reviewForm">
          <label>Name</label>
          <input id="inputName" type="text" placeholder="Ex. Anna"></input>
          <label>Your opinion</label>
          <textarea
            id="textarea"
            placeholder="Write something here!"
          ></textarea>
          <input id="submitBtn" type="submit" value="Submit" />
        </form>
        <div id="reviewsContainer"></div>
      </div>
    </>
  );
};
export default ProductPage;
