import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import "../pages/style/categoryPage.css";
const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/categoryPage/${categoryName}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <>
      <h1 id="categoryTitle">{categoryName}</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image_link={product.image_link}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
