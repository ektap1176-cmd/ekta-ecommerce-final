import React from "react";
import { Trash2, ShoppingCart } from "lucide-react";
import { bag, cooler, bremote, jacket } from "../../../assets/index";

export default function Wishlist() {
  const wishlist = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      image: bag,
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 1960,
      image: cooler,
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      image: bremote,
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      image: jacket,
    },
  ];
  return (
    <div className="px-6 pt-2 pb-[90px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center gap-3 text-lg font-medium">
          <span className="w-3 h-6 bg-red-500 rounded-sm" />
          Wishlist ({wishlist.length})
        </h2>
        <button className="border px-8 py-5 text-sm rounded font-bold hover:bg-gray-100">
          Move All To Bag
        </button>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white">
            <div className="relative bg-gray-100 h-48 flex items-center justify-center">
              {/* Discount */}
              {item.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              {/* Delete */}
              <button className="absolute top-3 right-3 text-gray-600 hover:text-black">
                <Trash2 size={18} />
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="max-h-40 object-contain"
              />
            </div>
            {/* Add To Cart Button */}
            <button className="w-full bg-black text-white py-2 flex items-center justify-center gap-2 text-sm">
              <ShoppingCart size={16} />
              Add To Cart
            </button>
            {/* Product Details */}
            <div className="pt-3">
              <h3 className="text-sm font-medium mb-1">{item.name}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500 font-semibold text-sm">
                  ${item.price}
                </span>
                {item.oldPrice && (
                  <span className="text-gray-400 text-xs line-through">
                    ${item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}