import { woofer } from "../../../assets/index";

const MusicPromoPanel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
      <div className="relative bg-black rounded-lg overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 text-white z-10 text-center lg:text-left">
          <span className="text-green-400 text-sm sm:text-base font-semibold">
            Categories
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Enhance Your <br /> Music Experience
          </h1>

          {/* TIMER */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              { value: "23", label: "Hours" },
              { value: "05", label: "Days" },
              { value: "59", label: "Minutes" },
              { value: "35", label: "Seconds" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex flex-col items-center justify-center"
              >
                <span className="font-bold text-sm sm:text-base md:text-lg">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-6 sm:mt-8 bg-green-400 hover:bg-green-500 text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg rounded transition">
            Buy Now!
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-6">
          <img
            src={woofer}
            alt="Music Speaker"
            className="max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.6)] transition-all"
          />
        </div>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-black via-black/80 to-transparent"></div>
      </div>
    </div>
  );
};

export default MusicPromoPanel;
