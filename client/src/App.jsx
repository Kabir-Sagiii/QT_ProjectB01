import { useEffect, useState } from "react";
import Signin from "./pages/sign-in/Signin";
import Signup from "./pages/sign-up/Signup";
import Home from "./pages/home/Home";
import Navbar from "./components/nav-bar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Shop from "./pages/shop/Shop";
import Electronics from "./components/products/Electronics";
import Jewelery from "./components/products/Jewelery";
import Mens from "./components/products/Mens";
import Womens from "./components/products/Womens";
import All from "./components/products/All";
function App() {
  let [token, setToken] = useState(null);
  useEffect(() => {
    token = localStorage.getItem("token");
  }, []);

  return (
    <div>
      <Toaster />
      {token ? <Navbar setToken={setToken} /> : null}
      <Routes>
        <Route path={"/"} element={<Signin setToken={setToken} />} />
        <Route
          path={"/home"}
          element={token ? <Home /> : <Navigate to="/" />}
        />
        <Route path={"/shop"} element={token ? <Shop /> : <Navigate to="/" />}>
          <Route path="" element={<Navigate to="all" />} />
          <Route path="all" element={token ? <All /> : <Navigate to="/" />} />
          <Route
            path="electronics"
            element={token ? <Electronics /> : <Navigate to="/" />}
          />
          <Route
            path="jewelery"
            element={token ? <Jewelery /> : <Navigate to="/" />}
          />
          <Route path="mens" element={token ? <Mens /> : <Navigate to="/" />} />
          <Route
            path="womens"
            element={token ? <Womens /> : <Navigate to="/" />}
          />
        </Route>
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
