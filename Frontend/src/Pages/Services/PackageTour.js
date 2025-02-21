import React from 'react';
import HeroSection from '../../Components/HeroSection';
import IntroSection from '../../Components/IntroSection';
import HolidaySection from '../../Components/HolidaySection';
import PickSection from '../../Components/PickSection';
import NightmaresSection from '../../Components/NightmaresSection';
import Footer from "../../Components/Footer";

function PackageTour() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <IntroSection />
      <HolidaySection />
      <PickSection />
      <NightmaresSection />
      <Footer />
    </div>
  );
}

export default PackageTour;
