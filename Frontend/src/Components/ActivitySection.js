import React from "react";
import Flights from "../Assets/Flights.png";
import Hotels from "../Assets/Hotels.png";
import Holidays from "../Assets/Holidays.png";
import Visa from "../Assets/Visa.png";
import Cabs from "../Assets/Cabs.png";
import Bus from "../Assets/Bus.png";
import Underlines from "../Assets/Underlines.png";

const ActivitySection = () => {
  return (
    <div className="p-4xl">
      <h1 className="text-red-700 font-bold text-center font-sans m-11">
        Select Your Activity
      </h1>
      <h1 className="text-blue-700 font-bold text-4xl text-center">What We Offer</h1>
      <img
        src={Underlines}
        className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32"
        alt="Curved Underline"
      />
      <h1 className="m-4 text-xl text-black text-center">
        MultiFly Travel arranges your entire trip, from finding the best
        package to flying back home, to make your vacation seamless and
        enjoyable.
      </h1>
      <div className="flex flex-wrap justify-center gap-4 m-11">
        {[
          { img: Flights, label: "Flights" },
          { img: Hotels, label: "Hotels" },
          { img: Holidays, label: "Holidays" },
          { img: Visa, label: "Visa" },
          { img: Cabs, label: "Cabs" },
          { img: Bus, label: "Bus" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.img}
              className="m-6 w-24 h-24 md:w-32 md:h-32 object-cover "
              alt={item.label}
            />
            <p className="mt-2 p-4 text-lg font-semibold relative text-black after:block after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
