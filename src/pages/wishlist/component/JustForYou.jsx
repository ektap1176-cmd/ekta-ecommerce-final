import React from "react";
import { FaStar } from "react-icons/fa";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { lap, tv, gamepad, key } from "../../../assets/index";

const products = [
  {
    id: 1,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: lap,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    image: tv,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    image: gamepad,
    rating: 5,
    reviews: 65,
    tag: "new",
  },
  {
    id: 4,
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: key,
    rating: 5,
    reviews: 65,
  },
];

const JustForYou = () => {
  return (
    <div className="px-6 pt-2 pb-[140px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center gap-3 text-lg font-medium">
          <span className="w-3 h-6 bg-red-500 rounded-sm" />
          Just For You
        </h2>
        <button className="border px-7 py-4 font-bold text-sm rounded hover:bg-gray-100">
          See All
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white">
            <div className="relative bg-gray-100 h-48 flex items-center justify-center">
              {/* Discount / New Tag */}
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
              {product.tag === "new" && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="max-h-40 object-contain"
              />

              <button className="absolute top-3 right-3 text-gray-600 hover:text-black">
                <FiEye size={18} />
              </button>
            </div>

            {/* Add To Cart Button */}
            <button className="w-full bg-black text-white py-2 flex items-center justify-center gap-2 text-sm">
              <FiShoppingCart size={16} />
              Add To Cart
            </button>

            {/* Product Details */}
            <div className="pt-3">
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>

              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500 font-semibold text-sm">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-xs line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} className="text-yellow-400" />
                ))}
                <span className="text-gray-400 text-xs ml-1">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
