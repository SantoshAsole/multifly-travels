import React from 'react';
// import AboutSlider from "../../Assets/About-slider.png";
import AboutSlider from '../Assets/About-slider.png';

const HeroSection = () => (
  <section className="relative">
    <img
      src={AboutSlider}
      className="w-full h-auto opacity-70"
      alt="About Slider"
    />
    <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl md:text-5xl lg:text-6xl">
      Package Tour
    </p>
  </section>
);

export default HeroSection;
