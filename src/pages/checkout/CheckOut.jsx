import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tv, gamepad, visa, mastercard, bkash, nagad } from "../../assets";

export default function CheckoutPanel() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [coupon, setCoupon] = useState("");

  const cartItems = [
    { id: 1, name: "LCD Monitor", price: 650, image: tv },
    { id: 2, name: "H1 Gamepad", price: 1100, image: gamepad },
  ];

  const subtotal = 1750;

  return (
    <div className="bg-white min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mt-7 mb-10 flex flex-wrap gap-1">
          <Link to="/account" className="hover:text-red-500">Account</Link>
          <span>/</span>

          <Link to="/my-account" className="hover:text-red-500">My Account</Link>
          <span>/</span>

          <Link to="/product" className="hover:text-red-500">Product</Link>
          <span>/</span>

          <Link to="/cart" className="hover:text-red-500">View Cart</Link>
          <span>/</span>

          <span className="text-black font-medium">Checkout</span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: Billing Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>

            <div className="space-y-6">
              {[
                "First Name*",
                "Company Name",
                "Street Address*",
                "Apartment, floor, etc. (optional)",
                "Town/City*",
                "Phone Number*",
                "Email Address*",
              ].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm text-gray-600 mb-2">
                    {label.replace("*", "")}
                    {label.includes("*") && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 px-4 py-3 rounded focus:outline-none"
                  />
                </div>
              ))}

              <label className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" className="accent-red-500" />
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">

              {/* Products */}
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <span className="font-medium">${item.price}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t mt-6 pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-base">
                  <span>Total:</span>
                  <span>${subtotal}</span>
                </div>
              </div>

              {/* Payment */}
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                      className="accent-red-500"
                    />
                    Bank
                  </label>

                  <div className="flex gap-2">
                    <img src={visa} className="h-6" />
                    <img src={mastercard} className="h-6" />
                    <img src={bkash} className="h-6" />
                    <img src={nagad} className="h-6" />
                  </div>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="accent-red-500"
                  />
                  Cash on delivery
                </label>
              </div>

              {/* Coupon */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <input
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon Code"
                  className="flex-1 border px-4 py-3 rounded focus:outline-none"
                />
                <button className="bg-red-500 text-white px-6 py-3 rounded">
                  Apply Coupon
                </button>
              </div>

              {/* Place Order */}
              <button className="bg-red-500 text-white w-full sm:w-auto px-11 py-3 rounded mt-6 font-medium">
                Place Order
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
