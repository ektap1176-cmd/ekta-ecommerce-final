import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  gamepad1,
  gamepad2,
  gamepad3,
  gamepad4,
  gamepadbg,
  gamepad,
  keyboard,
  tv,
  speaker,
} from "../../assets/index";

// Sample product data (you might want to move this to a separate file or context)
const productData = {
  "havic-hv-g92-gamepad": {
    id: 1,
    name: "Havic HV G-92 Gamepad",
    price: 192.0,
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    rating: 5,
    reviews: 150,
    inStock: true,
    colors: [
      { name: "Blue", code: "#A0BCE0" },
      { name: "Red", code: "#E07575" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [gamepadbg, gamepad1, gamepad2, gamepad3],
    thumbnails: [gamepad1, gamepad2, gamepad3, gamepad4],
    category: "gaming"
  }
};

// Related products data
const relatedProducts = [
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
    image: keyboard,
    slug: "ak-900-wired-keyboard"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 4.8,
    reviews: 99,
    image: tv,
    slug: "ips-lcd-gaming-monitor"
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4.9,
    reviews: 120,
    image: speaker,
    slug: "s-series-comfort-chair"
  },
  {
    id: 5,
    name: "Gaming Controller Pro",
    price: 150,
    originalPrice: 200,
    rating: 4.7,
    reviews: 75,
    image: gamepad,
    slug: "gaming-controller-pro"
  }
];

const Product = () => {
  const { productSlug } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#A0BCE0");

  // Get product data based on slug
  const product = productData[productSlug] || productData["havic-hv-g92-gamepad"];

  // Handle quantity changes
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  // Handle buy now
  const handleBuyNow = () => {
    const orderData = {
      productId: product.id,
      productName: product.name,
      quantity,
      selectedSize,
      selectedColor,
      price: product.price,
      total: product.price * quantity
    };
    console.log("Order placed:", orderData);
    // Here you would typically:
    // 1. Add to cart
    // 2. Navigate to checkout
    // 3. Show confirmation
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb with Links */}
      <div className="max-w-[1270px] mx-auto text-sm text-gray-500 mb-10 mt-10 px-4 lg:px-0">
        <Link 
          to="/account" 
          className="hover:text-black transition-colors duration-200 hover:underline"
        >
          Account
        </Link>
        {" / "}
        <Link 
          to="/category/gaming" 
          className="hover:text-black transition-colors duration-200 hover:underline"
        >
          Gaming
        </Link>
        {" / "}
        <span className="text-black font-medium">{product.name}</span>
      </div>

      {/* ================= MAIN PRODUCT PANEL ================= */}
      <div
        className="
          max-w-[1270px] mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[740px_1fr]
          gap-10
          lg:gap-20
          px-4
          lg:px-0
        "
      >
        {/* LEFT – IMAGE SECTION */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-6
            sm:gap-8
            items-start
          "
        >
          {/* Thumbnails */}
          <div
            className="
              flex
              flex-row
              sm:flex-col
              gap-3
              sm:gap-4
              order-2
              sm:order-1
            "
          >
            {product.thumbnails.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`
                  w-20 h-20 sm:w-[170px] sm:h-[138px]
                  bg-[#F5F5F5] flex items-center justify-center cursor-pointer
                  border-2 transition-all duration-200
                  ${activeImage === index 
                    ? "border-black scale-[1.02]" 
                    : "border-transparent hover:border-gray-300"
                  }
                `}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-[90%] h-[90%] object-contain"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div
            className="
              w-full
              h-80
              sm:h-[480px]
              lg:h-[600px]
              bg-[#F5F5F5]
              flex
              items-center
              justify-center
              rounded-lg
              overflow-hidden
              order-1
              sm:order-2
            "
          >
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-[95%] h-[88%] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT – PRODUCT DETAILS */}
        <div className="pr-0 lg:pr-12">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 text-sm mb-4 flex-wrap">
            <div className="text-[#FFAD33] flex items-center">
              {"★".repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && "☆"}
              {"☆".repeat(5 - Math.ceil(product.rating))}
            </div>
            <span className="text-gray-500">({product.reviews} Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className={`font-medium ${product.inStock ? 'text-[#00FF66]' : 'text-red-500'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>

          <p className="text-sm leading-relaxed pb-6 mb-6 border-b text-gray-600">
            {product.description}
          </p>

          {/* Colors */}
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            <span className="text-lg font-medium">Colors:</span>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color.code)}
                  className={`
                    w-8 h-8 rounded-full ring-2 ring-offset-2 transition-all duration-200
                    ${selectedColor === color.code 
                      ? 'ring-black scale-110' 
                      : 'ring-transparent hover:scale-105'
                    }
                  `}
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            <span className="text-lg font-medium">Size:</span>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    w-10 h-10 flex items-center justify-center border rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${selectedSize === size 
                      ? 'bg-[#DB4444] text-white border-[#DB4444]' 
                      : 'border-gray-300 hover:border-[#DB4444] hover:text-[#DB4444]'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Actions */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-10 h-11 flex items-center justify-center border-r bg-gray-50 hover:bg-gray-100 transition-colors"
                disabled={quantity <= 1}
              >
                −
              </button>
              <div className="w-14 h-11 flex items-center justify-center font-medium">
                {quantity}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-11 flex items-center justify-center border-l bg-gray-50 hover:bg-gray-100 transition-colors"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="
                bg-[#DB4444] text-white px-8 md:px-12 h-11 rounded-lg
                font-medium hover:bg-[#c23333] transition-colors duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {product.inStock ? 'Buy Now' : 'Out of Stock'}
            </button>

            <button
              className="
                w-11 h-11 border rounded-lg flex items-center justify-center text-xl
                hover:bg-red-50 hover:border-[#DB4444] hover:text-[#DB4444]
                transition-all duration-200
              "
              aria-label="Add to wishlist"
            >
              ♡
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border rounded-lg divide-y">
            <div className="p-4">
              <div className="font-medium mb-1">🛒 Free Delivery</div>
              <div className="text-sm text-gray-600">
                <button className="underline hover:text-black transition-colors">
                  Enter your postal code for Delivery Availability
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="font-medium mb-1">🔄 Return Delivery</div>
              <div className="text-sm text-gray-600">
                Free 30 Days Delivery Returns.{" "}
                <button className="underline hover:text-black transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RELATED ITEMS ================= */}
      <div className="max-w-[1170px] mx-auto mt-20 mb-30 px-4 lg:px-0">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-5 h-10 bg-[#DB4444] rounded" />
          <h2 className="text-[#DB4444] font-semibold text-xl">Related Items</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Link 
              key={item.id}
              to={`/product/${item.slug}`}
              className="
                block p-4 rounded-lg hover:shadow-lg transition-all duration-300
                border border-transparent hover:border-gray-200
              "
            >
              <div className="bg-[#F5F5F5] h-[250px] flex items-center justify-center mb-4 rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-[80%] object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="font-medium text-lg mb-2 hover:text-[#DB4444] transition-colors">
                {item.name}
              </h3>
              <div className="flex gap-2 text-sm mb-2">
                <span className="text-[#DB4444] font-bold">${item.price}</span>
                <span className="line-through text-gray-400">${item.originalPrice}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#FFAD33]">
                  {"★".repeat(Math.floor(item.rating))}
                  {item.rating % 1 !== 0 && "☆"}
                  {"☆".repeat(5 - Math.ceil(item.rating))}
                </span>
                <span className="text-gray-400 text-sm">({item.reviews})</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;