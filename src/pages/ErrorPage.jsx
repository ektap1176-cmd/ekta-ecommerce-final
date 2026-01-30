import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="box-container">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-14">
          <Link to="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/about" className="text-black hover:text-red-500 transition-colors">
            About
          </Link>
        </p>

        {/* Error Text */}
        <div className="text flex flex-col justify-center items-center">
          <p className="text-[110px] font-semibold mt-[241px]">404 Not Found</p>
          <p className="text-base mt-10">
            Your visited page not found. You may go home page.
          </p>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-20 pb-[140px]">
          <Link to="/">
            <button className="w-[254px] h-14 bg-[#DB4444] text-white text-base rounded">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
