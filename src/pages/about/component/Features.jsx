import React from "react";
import { Truck, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Truck size={22} />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <Headphones size={22} />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <ShieldCheck size={22} />,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const ServiceSection = () => {
  return (
    // OUTER CONTAINER (unchanged)
    <div className="w-full bg-white pt-[50px] pb-[140px] flex justify-center px-4">
      
      {/* FIXED SIZE + RESPONSIVE */}
      <div
        className="
          w-full
          max-w-[943px]
          h-auto
          flex
          flex-wrap
          items-center
          justify-center
          gap-[88px]
          text-center
        "
      >
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold tracking-wide">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
