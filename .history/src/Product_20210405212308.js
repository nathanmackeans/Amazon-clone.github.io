import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
      <div className="product_rating">
        <p>&#x2729</p>
      </div>
    </div>
  );
}

export default Product;
