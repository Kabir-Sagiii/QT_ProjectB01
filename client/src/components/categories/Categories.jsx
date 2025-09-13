import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";
function Categories() {
  return (
    <div className="categories">
      <div>
        <Link to="all">All</Link>
      </div>
      <div>
        <Link to="electronics">Electronics</Link>
      </div>
      <div>
        <Link to="jewelery">Jewelery</Link>
      </div>
      <div>
        <Link to="mens">Men's</Link>
      </div>
      <div>
        <Link to="womens">Women's</Link>
      </div>
    </div>
  );
}

export default Categories;
