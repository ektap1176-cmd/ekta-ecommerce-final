import React, { useState } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  dogfood,
  camerab,
  laptop,
  creams,
  car,
  shoes,
  gameremote,
  greenjacket,
} from "../../../assets/index";

export default function ProductsPanel() {
  const [favorites, setFavorites] = useState({});

  const products = [
    { id: 1, name: 'Breed Dry Dog Food', price: 100, rating: 3, reviews: 35, image: dogfood },
    { id: 2, name: 'CANON EOS DSLR Camera', price: 360, rating: 4, reviews: 95, image: camerab, hasCart: true },
    { id: 3, name: 'ASUS FHD Gaming Laptop', price: 700, rating: 5, reviews: 325, image: laptop },
    { id: 4, name: 'Curology Product Set', price: 500, rating: 4, reviews: 145, image: creams },
    { id: 5, name: 'Kids Electric Car', price: 960, rating: 5, reviews: 65, image: car, colors: ['red', 'white'], badge: 'NEW' },
    { id: 6, name: 'Jr. Zoom Soccer Cleats', price: 1160, rating: 5, reviews: 35, image: shoes, colors: ['yellow', 'red'] },
    { id: 7, name: 'GP11 Shooter USB Gamepad', price: 660, rating: 4.5, reviews: 55, image: gameremote, colors: ['black', 'red'], badge: 'NEW' },
    { id: 8, name: 'Quilted Satin Jacket', price: 660, rating: 4.5, reviews: 55, image: greenjacket, colors: ['green', 'red'] }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
    ));

  const colorMap = {
    red: 'bg-red-500',
    white: 'bg-white border-2 border-gray-300',
    yellow: 'bg-yellow-400',
    black: 'bg-black',
    green: 'bg-green-800'
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-12 py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
            <span className="text-red-500 font-semibold text-sm sm:text-base">
              Our Products
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Explore Our Products
            </h1>

            <div className="flex gap-2 mt-2 sm:mt-0">
              <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                <ChevronLeft size={18} />
              </button>
              <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4 aspect-square">
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded z-10">
                    {product.badge}
                  </div>
                )}

                <div className="w-full h-full flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-red-50 flex items-center justify-center transition shadow-sm"
                  >
                    <Heart
                      size={16}
                      className={favorites[product.id] ? 'fill-red-500 text-red-500' : 'text-gray-700'}
                    />
                  </button>
                  <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition shadow-sm">
                    <Eye size={16} className="text-gray-700" />
                  </button>
                </div>

                {product.hasCart && (
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-800 transition">
                    Add To Cart
                  </button>
                )}
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base md:text-lg">
                  {product.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base md:text-lg">${product.price}</span>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-500 text-xs sm:text-sm md:text-base">
                    ({product.reviews})
                  </span>
                </div>

                {product.colors && (
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full ${colorMap[color]} ${
                          idx === 0 ? 'ring-2 ring-gray-900 ring-offset-1' : ''
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 sm:px-12 py-3 sm:py-4 rounded text-sm sm:text-base transition">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
