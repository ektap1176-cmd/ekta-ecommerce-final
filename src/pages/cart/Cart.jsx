import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tv, gamepad } from "../../assets";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: tv,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: gamepad,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  /* ---------- COUPONS ---------- */
  const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    FLAT50: 50,
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (!coupons[code]) {
      setCouponError("Invalid coupon code");
      setDiscount(0);
      return;
    }

    setCouponError("");
    setDiscount(coupons[code]);
  };

  /* ---------- CART LOGIC ---------- */
  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCartItems((items) =>
      items.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((i) => i.id !== id));
  };

  const subtotal = (item) => item.price * item.quantity;
  const total = cartItems.reduce((sum, i) => sum + subtotal(i), 0);

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm mb-8 text-gray-600 flex gap-1 flex-wrap">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Cart</span>
        </div>

        {/* Cart Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-6 py-4 font-medium border-b">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-3">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 px-6 py-6 items-center border-b last:border-b-0 gap-4 md:gap-0"
            >
              <div className="md:col-span-5 flex items-center gap-4">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-xl"
                >
                  ×
                </button>

                <div className="w-20 h-20 border rounded flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="font-medium">{item.name}</span>
              </div>

              <div className="md:col-span-2">${item.price}</div>

              <div className="md:col-span-3">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-20 border rounded px-3 py-2 text-center"
                />
              </div>

              <div className="md:col-span-2 md:text-right font-medium">
                ${subtotal(item)}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <Link
            to="/"
            className="px-8 py-3 border rounded font-medium text-center"
          >
            Return To Shop
          </Link>

          <button className="px-8 py-3 border rounded font-medium">
            Update Cart
          </button>
        </div>

        {/* Coupon + Total */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

          {/* Coupon */}
          <div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 border px-4 py-3 rounded"
              />
              <button
                onClick={applyCoupon}
                className="px-8 py-3 bg-red-500 text-white rounded"
              >
                Apply Coupon
              </button>
            </div>

            {couponError && (
              <p className="text-red-500 text-sm mt-2">{couponError}</p>
            )}
          </div>

          {/* Cart Total */}
          <div className="border border-black rounded-lg p-8 w-full max-w-lg ml-auto">
            <h3 className="text-lg font-semibold mb-6">Cart Total</h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-3">
                <span>Subtotal:</span>
                <span className="font-medium">${total}</span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Shipping:</span>
                <span className="font-medium">Free</span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${total}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block mt-6 w-full bg-red-500 text-white py-3 rounded text-center hover:bg-red-600 transition"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
