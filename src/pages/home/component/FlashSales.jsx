import React, { useState, useEffect } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { remote, keyboard, tv, chair } from "../../../assets/index";

const FlashSalesPanel = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', currentPrice: 120, originalPrice: 160, discount: 40, rating: 5, reviews: 88, image: remote },
    { id: 2, name: 'AK-900 Wired Keyboard', currentPrice: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, image: keyboard },
    { id: 3, name: 'IPS LCD Gaming Monitor', currentPrice: 370, originalPrice: 400, discount: 30, rating: 5, reviews: 99, image: tv },
    { id: 4, name: 'S-Series Comfort Chair', currentPrice: 375, originalPrice: 400, discount: 25, rating: 4.5, reviews: 99, image: chair }
  ];

  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm sm:text-base md:text-lg">
            {i < Math.floor(rating) ? '★' : '☆'}
          </span>
        ))}
      </div>
      <span className="text-gray-500 text-xs sm:text-sm md:text-base">({reviews})</span>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 mt-16 overflow-x-hidden">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
          <span className="text-red-500 font-semibold text-sm sm:text-base">Today's</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 flex-wrap">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Flash Sales</h2>

            {/* Timer */}
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center">
                    <span className="text-xs sm:text-sm font-medium">{label}</span>
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      {String(Object.values(timeLeft)[i]).padStart(2, '0')}
                    </span>
                  </div>
                  {i < 3 && (
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 self-end pb-1">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-2 self-start lg:self-end">
            <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
        {products.map(product => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative bg-gray-100 rounded-xl p-4 sm:p-6 mb-4 aspect-4/3 flex items-center justify-center overflow-hidden">
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                -{product.discount}%
              </div>

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-red-500 hover:text-white transition">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />

              <button className={`absolute bottom-0 left-0 right-0 bg-black text-white py-2 sm:py-3 text-sm sm:text-base font-medium transition
                opacity-0 group-hover:opacity-100`}>
                Add To Cart
              </button>
            </div>

            <h3 className="font-medium mb-2 text-sm sm:text-base md:text-lg">{product.name}</h3>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-red-500 font-semibold text-sm sm:text-base md:text-lg">${product.currentPrice}</span>
              <span className="text-gray-400 line-through text-xs sm:text-sm md:text-base">${product.originalPrice}</span>
            </div>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-sm sm:text-base md:text-lg font-medium transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSalesPanel;
