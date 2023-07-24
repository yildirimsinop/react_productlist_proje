import React, { useState } from "react";
import "../../src/index.css";

const ProductCard = ({ id, title, price, description, category, image }) => {
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div className="cards text-align-center">
      {showTitle && <h2>{title}</h2>}
      <div className="image-container">
        <img
          src={image}
          alt=""
          height="350px"
          onClick={() => setShowTitle(!showTitle)} // Resime tıklanıldığında showTitle durumunu değiştirir
        />
        <div className="price-tag">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
