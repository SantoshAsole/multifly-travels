import React from "react";
import multiflyLogo from "../Assets/logo.png";

const RegistrationForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-80 md:w-96 lg:w-[450px] bg-white shadow-lg rounded-2xl p-6">
        
        {/* Logo */}
        <div className="text-center mb-6">
          <img src={multiflyLogo} alt="logo" className="w-32 mx-auto" />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Create Your Account
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 text-sm mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

        

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
            />
            <label htmlFor="terms" className="text-gray-700 ml-2">
              I accept the{" "}
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-700 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;




