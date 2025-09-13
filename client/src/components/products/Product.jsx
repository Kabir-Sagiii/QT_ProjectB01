import React from "react";
import "./Products.css";
function Product({ category }) {
  return <div className="products">{category}</div>;
}

export default Product;
