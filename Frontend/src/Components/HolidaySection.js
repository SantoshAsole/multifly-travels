import React from 'react';
// import holidayPlan from "../../Assets/holidy-plan.jpg";
import holidayPlan from '../Assets/holidy-plan.jpg';

const HolidaySection = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
    <img
      src={holidayPlan}
      className="w-full max-w-[600px] h-96 object-cover ml-11"
      alt="Holiday Plan"
    />
    <div className="text-center lg:text-left">
      <h1 className="text-blue-800 font-bold text-xl md:text-5xl lg:text-6xl ml-11">
        Have a Holiday Plan? We Want In!
      </h1>
      <p className="w-full max-w-[600px] mx-auto lg:mx-0 text-black mt-2 text-lg md:text-xl">
        With our package tours designed to meet every traveler’s dream, you
        can now get yourself a holiday without the pains of actually
        planning one. No more worries about visa stamps, local
        transportation, and show timings. You can leave the boring parts of
        taking a vacation to us. We are more than skilled to give you the
        best travel experience.
      </p>
    </div>
  </div>
);

export default HolidaySection;
