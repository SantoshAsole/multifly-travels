import React from 'react';
// import beachPool from "../../Assets/Beach-Pool.jpg";
import beachPool from '../Assets/Beach-Pool.jpg';

const PickSection = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
    <div className="text-center lg:text-left">
      <h1 className="text-blue-800 font-bold text-xl md:text-3xl lg:text-4xl">
        Take Your Pick!
      </h1>
      <p className="w-full max-w-[600px] mx-auto lg:mx-0 text-black mt-2 text-lg md:text-xl">
        At MultiFly, we offer a selection of tour packages with variations
        in destination, budget, number of travelers, and so much more.
        Peruse our offerings and pick one that suits you the best. That is
        the only major decision you will be making about this vacation.
        What’s more, if you want something that isn’t included in a
        particular holiday package, we say, ‘Sure! Why not?’ Tell us, and
        we’ll get it done for you!
      </p>
      <h1 className="text-blue-800 font-bold text-xl md:text-3xl lg:text-4xl mt-6">
        In the La-La-Lap of Luxury
      </h1>
      <p className="w-full max-w-[600px] mx-auto lg:mx-0 text-black mt-2 text-lg md:text-xl">
        The package tours at MultiFly are unlike any other package tour you
        have been on. Set aside the images of cramped tourist buses and
        dingy hotels. MultiFly delivers nothing but luxe travel experiences.
      </p>
    </div>
    <div>
      <img
        src={beachPool}
        className="w-full max-w-[600px] h-96 object-cover m-4"
        alt="Beach Pool"
      />
    </div>
  </div>
);

export default PickSection;
