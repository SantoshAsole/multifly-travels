import React from 'react'

export const Subscribe = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-black py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
    >
      
      <h3 className="text-red-500 text-lg font-semibold">Subscribe Now</h3>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">Get the latest News</h1>

      
      <div className="mt-6 flex items-center w-3/4 md:w-1/2 bg-white rounded-lg overflow-hidden shadow-lg">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
        />
        <button className="bg-black text-white px-6 py-3 font-semibold">Subscribe</button>
      </div>
      <br/>
    </div>

  )
}
