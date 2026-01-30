import React from "react";
import { Store, DollarSign, Users, Wallet } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "10.5k",
    label: "Sellers active our site",
    icon: <Store size={24} />,
    active: false,
  },
  {
    id: 2,
    value: "33k",
    label: "Monthly Product Sale",
    icon: <DollarSign size={24} />,
    active: true,
  },
  {
    id: 3,
    value: "45.5k",
    label: "Customer active in our site",
    icon: <Users size={24} />,
    active: false,
  },
  {
    id: 4,
    value: "25k",
    label: "Annual gross sale in our site",
    icon: <Wallet size={24} />,
    active: false,
  },
];

const StatCards = () => {
  return (
    <div className="
      flex
      flex-wrap
      justify-center
      gap-6
      pt-20
      sm:pt-24
      lg:pt-[140px]
    ">
      {stats.map((item) => (
        <div
          key={item.id}
          className={`w-full sm:w-[210px] h-40 border rounded-sm
            p-6 flex flex-col items-center justify-center text-center transition
            ${
              item.active
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-black border-gray-200"
            }`}
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full mb-4
              ${
                item.active
                  ? "bg-white text-red-500"
                  : "bg-gray-200 text-black"
              }`}
          >
            {item.icon}
          </div>

          {/* Value */}
          <h2 className="text-2xl font-bold">{item.value}</h2>

          {/* Label */}
          <p
            className={`text-sm mt-2 ${
              item.active ? "text-white/90" : "text-gray-500"
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
