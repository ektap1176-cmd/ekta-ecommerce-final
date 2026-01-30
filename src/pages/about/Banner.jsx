import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { female } from "../../assets/index";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden">

      {/* Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-10 mt-16">
          <Link to="/" className="hover:text-red-500 transition-colors">Home</Link> /{" "}
          <Link to="/about" className="text-black hover:text-red-500 transition-colors">About</Link>
        </p>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">

          {/* LEFT TEXT */}
          <div className="max-w-[525px] text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-semibold mb-6">
              Our Story
            </h2>

            <p className="text-base text-gray-600 leading-6 mb-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by a
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3 million
              customers across the region.
            </p>

            <p className="text-base text-gray-600 leading-6">
              Exclusive has more than 1 million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="
        relative
        lg:absolute
        lg:right-0
        lg:top-1/2
        lg:-translate-y-1/2
        mt-12
        lg:mt-0
        flex
        justify-center
      ">
        <img
          src={female}
          alt="shopping"
          className="
            w-full
            max-w-[580px]
            h-auto
            lg:h-[550px]
            object-cover
            mt-10
            sm:mt-20
            lg:mt-52
          "
        />
      </div>

    </div>
  );
};

export default AboutPage;
