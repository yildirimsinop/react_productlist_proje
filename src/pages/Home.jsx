import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  let filteredProducts;

  if (activeCategory) {
    // Eğer bir kategori seçilmişse, sadece o kategoriye ait ürünleri filtrele
    filteredProducts = products.filter(
      (product) => product.category === activeCategory
    );
  } else {
    // Eğer bir kategori seçilmemişse, tüm ürünleri kullan
    filteredProducts = products;
  }

  return (
    <div>
      <Header categories={categories} onCategoryClick={handleCategoryClick} />
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
