import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Package,
  Star,
  LogOut,
  XCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { logo, wish, cart, search } from "../assets";
import { navLinks } from "./navlink";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  
  const profileRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation for dropdown
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [profileOpen]);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    // Example: clear auth token, redirect, etc.
    // localStorage.removeItem("token");
    // navigate("/login");
  };

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setProfileOpen(!profileOpen);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" aria-label="Home" className="shrink-0">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex gap-8">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* SEARCH (desktop only) */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              className="w-60 py-2 px-4 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all duration-200"
            />
            <img
              src={search}
              alt="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
          </div>

          {/* WISHLIST */}
          <Link
            to="/Wish"
            aria-label="Wishlist"
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <img src={wish} alt="Wishlist" className="w-6 h-6" />
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 "
          >
            <img src={cart} alt="Cart" className="w-6 h-6" />
            {/* Optional: Add cart item count badge */}
            {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span> */}
          </Link>

          {/* PROFILE DROPDOWN */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={handleProfileClick}
              onKeyDown={handleKeyDown}
              aria-expanded={profileOpen}
              aria-label="Profile menu"
              aria-haspopup="true"
              className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <User size={18} />
            </button>

            {/* DROPDOWN MENU */}
            {profileOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                role="menu"
                aria-orientation="vertical"
              >
                {/* Menu Items */}
                <Link
                  to="/account"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                >
                  <User size={16} className="text-gray-500" />
                  <span>My Account</span>
                </Link>

                <Link
                  to="/orders"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                >
                  <Package size={16} className="text-gray-500" />
                  <span>My Orders</span>
                </Link>

                <Link
                  to="/cancellations"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                >
                  <XCircle size={16} className="text-gray-500" />
                  <span>My Cancellations</span>
                </Link>

                <Link
                  to="/reviews"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                  role="menuitem"
                  onClick={() => setProfileOpen(false)}
                >
                  <Star size={16} className="text-gray-500" />
                  <span>My Reviews</span>
                </Link>

                {/* Divider */}
                <div className="border-t border-gray-100 my-1" />

                {/* Logout Button */}
                <button
                  onClick={() => {
                    handleLogout();
                    setProfileOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 transition-colors duration-150"
                  role="menuitem"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <div className="px-4 py-3">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                aria-label="Search products"
                className="w-full py-2 px-4 pr-10 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <img
                src={search}
                alt="Search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
              />
            </div>

            {/* Mobile Navigation Links */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenu(false)}
                      className="block px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;