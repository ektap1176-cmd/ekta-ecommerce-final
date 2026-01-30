import { phone, applelogo } from "../../../assets/index";

const Home = () => {
  return (
    <div className="flex w-full max-w-[1400px] mx-auto mt-5 px-4 sm:px-6 lg:px-8 flex-col md:flex-row gap-4">

      {/* LEFT CATEGORY MENU */}
      <div className="hidden md:block w-[230px] shrink-0 border-r border-gray-300">
        <ul className="list-none m-0 p-0">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, i) => (
            <li
              key={i}
              className="flex justify-between items-center px-4 py-3 cursor-pointer text-sm sm:text-[14px] lg:text-[15px] hover:bg-gray-100 transition"
            >
              {item}
              {(i === 0 || i === 1) && (
                <span className="text-lg sm:text-xl lg:text-[23px] font-light">›</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT BANNER */}
      <div className="flex-1 bg-black text-white p-5 sm:p-6 md:p-8 relative md:ml-0 lg:ml-6 overflow-hidden rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* TEXT */}
          <div className="max-w-full md:max-w-[50%] text-center md:text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 justify-center md:justify-start">
              <img src={applelogo} alt="Apple" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm">iPhone 14 Series</span>
            </div>

            <h1 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-3 sm:mb-4 leading-tight">
              Up to 10% <br /> off Voucher
            </h1>

            <button className="flex items-center gap-2 border-b border-white pb-0.5 mx-auto md:mx-0 text-sm sm:text-base md:text-lg hover:opacity-90 transition">
              Shop Now <span className="text-lg sm:text-xl">→</span>
            </button>
          </div>

          {/* IMAGE */}
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
            <img
              src={phone}
              alt="Phone"
              className="max-h-44 sm:max-h-56 md:max-h-72 lg:max-h-80 xl:max-h-96 pt-2 md:pt-5 object-contain transition-all"
            />
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                i === 2 ? "bg-red-500" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
