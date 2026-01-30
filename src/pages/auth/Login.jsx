import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/Login";
import phonecart from "../../assets/phone-cart-bag.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left Image - Hidden on mobile */}
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
            Log in to Exclusive
          </h1>
          <p className="text-gray-500 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-12 py-3 rounded-md font-medium transition"
              >
                Log In
              </button>
              <a
                href="/forgot-password"
                className="text-red-500 text-sm font-medium hover:underline text-center sm:text-left"
              >
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;