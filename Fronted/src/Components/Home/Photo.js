
import React from 'react';
import slide1 from "../../Assets/instapost1.png";
import slide2 from "../../Assets/instapost2.png";
import slide3 from "../../Assets/instpost3.png";

const Photo = () => {
  return (
    <div className="relative flex items-center p-5">
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 -z-10"></div>
      
     
      <div className="relative flex items-center">
        
        {/* 1st image */}
        <img 
          src={slide1} 
          alt="Travel 1" 
          className="w-25 h-40 rounded-lg shadow-lg absolute top-0 left-0 transform -translate-x-4 -translate-y-4 z-10" 
        />
        
        {/* 2nd image */}
        <img 
          src={slide2} 
          alt="Travel 2" 
          className="w-64 h-48 rounded-lg shadow-2xl relative z-20" 
        />
        
        {/* 3rd image */}
        <img 
          src={slide3} 
          alt="Travel 3" 
          className="w-40 h-32 rounded-lg shadow-lg absolute bottom-0 right-0 transform translate-x-4 translate-y-4 z-10" 
        />
      </div>
    </div>
  );
};

export default Photo;
