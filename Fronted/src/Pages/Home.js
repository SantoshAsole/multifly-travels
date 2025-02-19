import React from 'react';
import Slider from "../Components/Home/Silder";
import WeOffer from "../Components/Home/WeOffer";
import FootPrint  from '../Components/Home/OurFootprint';
import TestimonialCarousel from '../Components/Home/Testimmonial';
import Photo from '../Components/Home/Photo';
import PrepareBag from '../Components/Home/PrepareBag';

const Home = () => {
    return (
      <div>
        <Slider />
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold text-gray-800">Prepare your BAGS & <br></br> Leave the rest to us!</h1>
          {/* prepare bag */}
          <p className="mt-4 text-gray-600 px-4 max-w-2xl mx-auto">
          Traveling is a big deal, whether planning a week-long family trip to Goa, a romantic gondola ride in Venice, or solo backpacking in Peru. So, the best way to fly—domestically or internationally—is by packing your weekend essentials and leaving the rest to us. MultiFly Travel is your traveling companion that will plan your entire trip, whether it is a business trip, a team retreat, or an international conference; all you have to do is sit back and relax!
          </p>
        </div>
        <div className="flex items-center px-10">
        <div className="w-3/5">
          <Photo />
        </div>
        <div className="w-2/5">
          <PrepareBag />
        </div>
      </div>
      <WeOffer/>
      <FootPrint/>
      <TestimonialCarousel/>
      </div>
    );
  };

export default Home;
