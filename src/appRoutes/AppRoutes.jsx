import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SignUp";
import AboutPage from "../pages/about/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage"
import AccountPage from "../pages/account/AccountPage"
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import Wish from "../pages/wishlist/Wish"
import Product from "../pages/productdetail/Product"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Default route */}
        <Route index element={<HomePage />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="Wish" element={<Wish />} />
        <Route path="product" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
