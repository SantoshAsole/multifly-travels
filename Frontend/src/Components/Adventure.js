import React from "react";
import titleDivider from "../Assets/title-divider.png";
import activity1 from "../Assets/activity1.png";
import activity2 from "../Assets/activity2.png";
import activity3 from "../Assets/activity3.png";

const Adventure = () => {
  return (
    <div className="text-center">
      <h1 className="text-red-700 font-bold">Soulful Adventure</h1>
      <h1 className="text-blue-700 font-bold text-4xl">
        Your Itinerary is in Expert Hands
      </h1>
      <img
        src={titleDivider}
        className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32 size-11"
        alt="Curved Underline"
      />
      <div className="m-11 p-5 flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-black">
            Activities that make you thrilled
          </h1>
        </div>
        <div className="text-center max-w-2xl">
          <p className="mt-2 text-black">
            Before flying to your destination, no matter what it may be – an
            international seminar, conference, or just another getaway – make
            MultiFly Travels your first stop. We know what travelers desire.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex justify-center">
            <img
              src={activity1}
              className="w-96 h-auto rounded-lg shadow-md"
              alt="Activity 1"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={activity2}
              className="w-96 h-auto rounded-lg shadow-md"
              alt="Activity 2"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={activity3}
              className="w-96 h-auto rounded-lg shadow-md"
              alt="Activity 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
