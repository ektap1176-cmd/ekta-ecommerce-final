import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema from "../schema/SignUp";
import phonecart from "../../assets/phone-cart-bag.png";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left Image */}
      <div className="hidden lg:flex items-center justify-center bg-gray-50">
        <img
          src={phonecart}
          alt="Shopping illustration"
          className="max-w-full h-auto object-contain p-10"
        />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center px-6 py-12 lg:py-0">
        <div className="w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Create an account
          </h1>
          <p className="text-gray-500 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register("name")}
                placeholder="Name"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("emailOrPhone")}
                placeholder="Email or Phone Number"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />
              {errors.emailOrPhone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.emailOrPhone.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition"
            >
              Create Account
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="font-medium">Sign up with Google</span>
            </button>

            <p className="text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-black underline font-medium">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;