import React from 'react';
import login from "../Assets/Login.webp";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="font-[sans-serif] max-sm:px-4">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <form>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don't have an account? 
                  <Link to="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link>
                </p>
              </div>

              <div>
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                </div>
              </div>

              <div className="mt-8">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="javascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>

              <div className="my-4 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-800 text-center">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <div className="space-x-6 flex justify-center">
                {/* Social login buttons */}
                <button type="button" className="border-none outline-none">
                  {/* SVG icon for Google */}
                </button>
                <button type="button" className="border-none outline-none">
                  {/* SVG icon for Facebook */}
                </button>
                <button type="button" className="border-none outline-none">
                  {/* SVG icon for Twitter */}
                </button>
              </div>
            </form>
          </div>

          <div className="">
            <img src={login} className="w-full aspect-[12/12] object-contain fill-none" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
