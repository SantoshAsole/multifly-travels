import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${user.email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-50">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-10 rounded-lg shadow-lg w-[350px]"
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-700">Login</h2>
        
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        <div className="mb-4 text-right">
          <a href="#" className="text-black hover:no-underline text-sm">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Login
          
        </button>
        <p class="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <a href="javascript:void(0);" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</a></p>
      </form>
    </div>
  );
};

export default Login;
