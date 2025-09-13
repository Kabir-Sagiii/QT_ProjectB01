import React from "react";
import Categories from "../../components/categories/Categories";
import Product from "../../components/products/Product";
import { Outlet } from "react-router-dom";
import "./Shop.css";
function Shop() {
  return (
    <div className="shop">
      <div className="categories">
        <Categories />
      </div>
      <div className="products">
        <Outlet />
        {/* <Product /> */}
      </div>
    </div>
  );
}

export default Shop;
