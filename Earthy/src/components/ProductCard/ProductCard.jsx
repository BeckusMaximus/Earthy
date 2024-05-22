import "../ProductCard/ProductCard.css";

const ProductCard = () => {
  return (
    <>
      <div id="card">
        <img src="./organicCoffe.avif" />
        <div className="productDetails">
          <p id="productName">Organic Coffee</p>
          <p id="price">$9</p>
          <div className="card-btn">
            <button>Read more</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
