import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar({ setToken }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <section className="brandName">
        <h1>BrandName</h1>
      </section>
      <section className="menus">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">ContactUs</Link>
      </section>
      <section className="icons">
        <Link>
          <i class="bi bi-bag-check-fill"></i>
        </Link>
        <button
          onClick={() => {
            navigate("/");
            setToken(null);
          }}
        >
          Logout
        </button>
      </section>
    </div>
  );
}

export default Navbar;
