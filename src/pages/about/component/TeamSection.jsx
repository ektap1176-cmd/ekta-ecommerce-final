import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { tom, emma, will } from "../../../assets/index";

const team = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: tom,
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image: emma,
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image: will,
  },
];

const TeamSection = () => {
  return (
    <div className="w-full bg-white pt-[140px] pb-20">
      
      {/* CENTERED WRAPPER */}
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cards */}
        <div className="
          flex
          flex-wrap
          justify-center
          gap-10
        ">
          {team.map((member) => (
            <div
              key={member.id}
              className="w-[260px] text-left"
            >
              {/* Image */}
              <div className="w-full h-80 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-semibold">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-gray-500 text-sm mt-1">
                {member.role}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 text-gray-600">
                <Twitter size={18} className="cursor-pointer hover:text-black" />
                <Instagram size={18} className="cursor-pointer hover:text-black" />
                <Linkedin size={18} className="cursor-pointer hover:text-black" />
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-12">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        </div>

      </div>
    </div>
  );
};

export default TeamSection;
