import React, { useState, useEffect } from "react";
import homeImage1 from "../Assets/home.jpg";
import homeImage2 from "../Assets/home1.jpg";
import homeImage3 from "../Assets/home2.jpg";
import whatsappLogo from "../Assets/whatsapp-logo.png";
import call from "../Assets/call.png";

const images = [homeImage1, homeImage2, homeImage3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        className="w-full h-[400px] md:h-[600px] lg:h-[600px] object-cover bg-center bg-no-repeat transition-opacity duration-1000"
        alt="Home Slider"
      />
      <div className="absolute inset-0 flex items-center justify-left m-11">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-bold text-left">
            Explore Historical Richness
          </h1>
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-white">
            This is our images for to show this only for example
          </p>
          <button className="px-2 py-2 bg-red-800 text-white font-bold rounded-2xl hover:bg-red">
            Inquiry Now
          </button>
        </div>
      </div>
      <a
        href={`https://wa.me/+917499303475?text=${encodeURIComponent(
          "Hello,How can I help you!"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-0 top-[80%] transform -translate-y-1/2"
      >
        <img
          src={whatsappLogo}
          className="w-full h-[40px] md:h-[40px] lg:h-[60px] object-cover bg-center bg-no-repeat"
          alt="WhatsApp Logo"
        />
      </a>
      <button className="absolute right-10 top-[80%] transform -translate-y-1/2">
        <img
          src={call}
          className="w-full h-[40px] md:h-[40px] lg:h-[60px] object-cover bg-center bg-no-repeat"
          alt="Call Logo"
        />
      </button>
    </div>
  );
};

export default Slider;
