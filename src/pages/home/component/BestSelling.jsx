import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";
import {
  pinkcoat,
  guccibag,
  speaker,
  studytable,
} from "../../../assets/index";

/* ================= PRODUCT CARD ================= */

const ProductCard = ({
  name,
  image,
  currentPrice,
  originalPrice,
  rating,
  reviews,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const safeRating = rating || 0;

  return (
    <div className="bg-gray-100 rounded-xl p-4 sm:p-5 md:p-6 relative group hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="bg-white rounded-lg mb-4 flex items-center justify-center relative h-40 sm:h-44 md:h-48 lg:h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-2"
        />

        {/* Action Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart
              size={18}
              className={
                isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
              }
            />
          </button>

          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
            <Eye size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-gray-900 font-medium mb-2 text-sm sm:text-base md:text-lg">
        {name}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-red-500 font-semibold text-base sm:text-lg md:text-xl">
          ${currentPrice}
        </span>
        {originalPrice && (
          <span className="text-gray-400 line-through text-xs sm:text-sm md:text-base">
            ${originalPrice}
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 md:w-5 md:h-5 ${
              i < Math.floor(safeRating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 fill-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <span className="text-gray-500 text-xs sm:text-sm md:text-base ml-1">
          ({reviews})
        </span>
      </div>
    </div>
  );
};

/* ================= BEST SELLING PRODUCTS ================= */

const BestSellingProducts = () => {
  const products = [
    {
      name: "The North Coat",
      image: pinkcoat,
      currentPrice: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
    },
    {
      name: "Gucci Duffle Bag",
      image: guccibag,
      currentPrice: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviews: 65,
    },
    {
      name: "RGB Liquid CPU Cooler",
      image: speaker,
      currentPrice: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
    },
    {
      name: "Small Bookshelf",
      image: studytable,
      currentPrice: 360,
      originalPrice: null,
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-8 sm:h-10 bg-red-500 rounded"></div>
            <span className="text-red-500 font-semibold text-sm sm:text-base">
              This Month
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Best Selling Products
          </h2>
        </div>

        <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded transition-colors font-medium w-full sm:w-auto text-sm sm:text-base">
          View All
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
