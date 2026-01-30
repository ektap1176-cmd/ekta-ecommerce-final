import React from 'react';
import { Truck, Headphones, ShieldCheck, ArrowUp } from 'lucide-react';
import { ps5, women, blackspeaker, perfume } from "../../../assets/index";

export default function NewArrivalPanel() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-8 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-5 h-10 sm:h-12 bg-red-500 rounded"></div>
            <span className="text-red-500 font-semibold text-sm sm:text-base">Featured</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            New Arrival
          </h1>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-24">

          {/* PlayStation 5 */}
          <div className="relative bg-black rounded overflow-hidden min-h-[260px] sm:min-h-[380px] lg:min-h-[520px] flex items-end">
            <img
              src={ps5}
              alt="PlayStation 5"
              className="absolute inset-0 w-full h-full object-contain bg-black/40"
            />
            <div className="relative z-10 p-5 sm:p-8 text-white text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                PlayStation 5
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-xs mx-auto lg:mx-0">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-white font-medium underline underline-offset-4">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-4 sm:gap-6">

            {/* Women's Collections */}
            <div className="relative bg-black rounded overflow-hidden min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] flex items-end">
              <img
                src={women}
                alt="Women's Collection"
                className="absolute inset-0 w-full h-full object-cover bg-black/40"
              />
              <div className="relative z-10 p-5 sm:p-8 text-white text-center lg:text-left">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                  Women's Collections
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-3 max-w-xs mx-auto lg:mx-0">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="text-white font-medium underline underline-offset-4">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

              {/* Speakers */}
              <div className="relative bg-black rounded overflow-hidden min-h-[200px] sm:min-h-[260px] flex items-end">
                <img
                  src={blackspeaker}
                  alt="Speakers"
                  className="absolute inset-0 w-full h-full object-contain bg-black/40"
                />
                <div className="relative z-10 p-4 sm:p-6 text-white text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold mb-2">
                    Speakers
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3">
                    Amazon wireless speakers
                  </p>
                  <button className="text-white text-sm font-medium underline underline-offset-4">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative bg-black rounded overflow-hidden min-h-[200px] sm:min-h-[260px] flex items-end">
                <img
                  src={perfume}
                  alt="Perfume"
                  className="absolute inset-0 w-full h-full object-contain bg-black/40"
                />
                <div className="relative z-10 p-4 sm:p-6 text-white text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold mb-2">
                    Perfume
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="text-white text-sm font-medium underline underline-offset-4">
                    Shop Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">

          {[ 
            { icon: Truck, title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
            { icon: Headphones, title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
            { icon: ShieldCheck, title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center sm:text-center lg:text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300 flex items-center justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black flex items-center justify-center">
                  <item.icon className="text-white" size={26} />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-center sm:justify-end mt-4">
          <button
            onClick={scrollToTop}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center shadow-md transition"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
