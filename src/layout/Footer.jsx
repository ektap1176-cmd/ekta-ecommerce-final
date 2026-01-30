import React from "react";
import {
  arrow,
  barcode,
  logo1,
  facebook,
  twitter,
  insta,
  linkedin,
  group,
} from "../assets/index";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center lg:text-left">
          {/* Subscribe */}
          <div className="lg:col-span-1">
            <img src={logo1} alt="Exclusive" className="mx-auto lg:mx-0 w-32 mb-6" />
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <p className="text-sm text-gray-300 mb-4">Get 10% off your first order</p>
            <div className="relative max-w-xs mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-500 rounded-md py-3 px-4 pr-12 text-sm"
              />
              <img
                src={arrow}
                alt="send"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Support</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </p>
            <p className="text-sm text-gray-300 mt-3">exclusive@gmail.com</p>
            <p className="text-sm text-gray-300 mt-3">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Account</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">My Account</li>
              <li className="hover:text-white cursor-pointer">Login / Register</li>
              <li className="hover:text-white cursor-pointer">Cart</li>
              <li className="hover:text-white cursor-pointer">Wishlist</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Quick Link</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms Of Use</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Download App</h2>
            <p className="text-xs text-gray-300 mb-4">
              Save $3 with App New User Only
            </p>
            <div className="flex flex-col items-center lg:items-start gap-4">
              <img src={barcode} alt="QR Code" className="w-24" />
              <div className="flex gap-4">
                <img src={facebook} alt="fb" className="w-3 h-4.5" />
                <img src={twitter} alt="tw" className="w-6 h-6" />
                <img src={insta} alt="ig" className="w-6 h-6" />
                <img src={linkedin} alt="in" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-sm">
          <img src={group} alt="copyright" className="w-4 h-4" />
          <p>Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;