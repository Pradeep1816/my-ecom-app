import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import ProductContainer from "./components/productContainer/ProductContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./components/checkout/Checkout";
import UserLogin from "./components/Auth/UserLogin";
import UserRegistration from "./components/Auth/UserRegistration";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserRegistration />} />
          <Route path="/product/:id" element={<ProductsPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
