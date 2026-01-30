import {
  cellphone,
  computers,
  smartwatch,
  camera,
  headphone,
  gaming,
} from "../../../assets/index";

const categories = [
  { id: 1, name: "Phones", icon: cellphone },
  { id: 2, name: "Computers", icon: computers },
  { id: 3, name: "SmartWatch", icon: smartwatch },
  { id: 4, name: "Camera", icon: camera, active: true },
  { id: 5, name: "HeadPhones", icon: headphone },
  { id: 6, name: "Gaming", icon: gaming },
];

const CategoryPanel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-12 sm:my-16 lg:my-20 px-4 overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-8 sm:mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-5 bg-red-500 rounded"></span>
            <span className="text-red-500 text-xs sm:text-sm font-semibold">
              Categories
            </span>
          </div>
          <h2 className="text-2xl sm:text-[28px] md:text-3xl lg:text-[32px] font-bold">
            Browse By Category
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 self-start sm:self-auto">
          <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gray-100 text-base sm:text-lg flex items-center justify-center hover:bg-gray-200 transition">
            ←
          </button>
          <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gray-100 text-base sm:text-lg flex items-center justify-center hover:bg-gray-200 transition">
            →
          </button>
        </div>
      </div>

      {/* Categories */}
      <div
        className="
          flex gap-3 sm:gap-5
          overflow-x-auto lg:overflow-visible
          lg:justify-center
          pb-2
          scrollbar-hide
        "
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`
              w-28 h-24 sm:w-36 sm:h-28 md:w-40 md:h-32 lg:w-44 lg:h-36
              shrink-0
              border rounded-xl
              flex flex-col items-center justify-center
              cursor-pointer transition-all
              ${
                cat.active
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-300 hover:shadow-md"
              }
            `}
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
            />
            <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-base font-medium">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPanel;
