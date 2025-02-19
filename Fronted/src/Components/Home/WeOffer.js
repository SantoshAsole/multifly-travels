import React from 'react';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPassport, FaTaxi, FaBus } from 'react-icons/fa';

const activities = [
  { name: 'FLIGHTS', icon: <FaPlane className="text-7xl" /> },
  { name: 'HOTELS', icon: <FaHotel className="text-5xl" /> },
  { name: 'HOLIDAYS', icon: <FaUmbrellaBeach className="text-7xl" /> },
  { name: 'VISA', icon: <FaPassport className="text-5xl" /> },
  { name: 'CABS', icon: <FaTaxi className="text-7xl" /> },
  { name: 'BUS', icon: <FaBus className="text-5xl" /> },
];

const ImageSection = () => {
  return (
    <div className="text-center py-16 bg-white">
      <h2 className="text-lg text-red-500 font-semibold">Select Your Activity</h2>
      <h1 className="text-4xl font-bold text-gray-800 mt-2">What We Offer</h1>
      <p className="mt-4 text-gray-600 px-4 max-w-2xl mx-auto">
        MultiFly Travel arranges your entire trip, from finding the best package to flying back home, to make your vacation seamless and enjoyable.
      </p>
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {activities.map((activity, index) => (
          <div key={index} className="text-center">
            <div
              className="text-6xl bg-blue-300 p-4 rounded-xl inline-block shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl"
            >
              {activity.icon}
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-700">{activity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
