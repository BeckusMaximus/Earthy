import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import "../pages/style/categoryPage.css";
const CategoryPage = () => {
  const { categoryName } = useParams(); // Hämtar kategorinamnet från URLen
  const [products, setProducts] = useState([]); // Skapar en state-variabel för att lagra produkter

  // useEffect hook för att hämta produkter när kategorinamnet ändras
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Hämtar produkter från servern baserat på kategorinamnet
        const response = await fetch(
          `http://localhost:3000/categoryPage/${categoryName}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts(); // Anropar funktionen för att hämta produkter
  }, [categoryName]); // Kör om när kategorinamnet ändras

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
