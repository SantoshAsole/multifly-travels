import React from "react";
import AboutSliderImg from "../Assets/About-slider.png"; 

const TopSection = () => (
  <div className='w-screen h-auto flex items-center justify-center relative'>
    <img
      src={AboutSliderImg}
      alt='Packagetour'
      className='w-full h-auto object-contain'
    />
    <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
        PACKAGE TOURS
    </h1>
  </div>
);

const PackageTour = () => {
  return (
    <div>
      
      <TopSection />
      <div className='max-w-5xl mx-auto p-6'>
        <div className='mb-12'>
          <p className='text-lg text-gray-800 leading-relaxed'>
            Planning an international holiday? How can you make your trip even
            better? Once your thoughts about managing your finances are sorted,
            you know your trip will be blissful. We recommend MultiFly's Forex
            platform for this. Our services guarantee you the best rates for
            your currency, regardless of the time you choose to make your trip.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <div className='transform transition-transform duration-300 hover:scale-105'>
            <img
              alt='A beautiful beach with palm trees and a thatched umbrella'
              className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
              height='400'
              src='https://storage.googleapis.com/a1aa/image/5LnExzw83Mw222aFXRJSTExLUgoSTns9uBnBKBs-Ul4.jpg'
              width='600'
            />
          </div>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl font-bold text-blue-900 mb-4'>
                You Have Fun, We’ll Get The Work Done
              </h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
                Buying an international holiday comes with more than enough
                hoops to jump through. Let us ease your journey by procuring a
                holiday for you at outstanding rates. Through our forex
                services, you buy a holiday wherever you want with no trouble at
                all!
              </p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-12'>
          <div className='flex items-center'>
            <div>
              <h2 className='text-3xl font-bold text-blue-900 mb-4'>
                Ka-Ching And Cha-Ching And Every Related Thing?
              </h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
                By availing of our forex services, you won’t have to spare
                thoughts on having enough funds for the activities on your
                travels. Moreover, you can contact us to get any currency you
                want at any time. If you are unfamiliar with the processes
                involved in foreign exchange, our experts are ready to guide you
                at any time of the day. You can put your mind at ease about
                money matters during your getaway and simply enjoy the benefits
                of MultiFly’s forex services.
              </p>
            </div>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105'>
            <img
              alt='A luxurious hotel room with a city view'
              className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
              height='400'
              src='https://storage.googleapis.com/a1aa/image/neqDvMUpnuGaZiCen_rrInM-Ih83uu69a0rXIAt_HfQ.jpg'
              width='600'
            />
          </div>
        </div>
        <div className='mb-12'>
          <h2 className='text-3xl font-bold text-blue-900 mb-4'>
            Make The Most Of Your Money, Honey!
          </h2>
          <p className='text-lg text-gray-800 leading-relaxed'>
            You don’t have to worry about security while utilizing our services.
            We have advanced security measures in place to ensure that your
            details remain in safe hands. MultiFly keeps up with regulations on
            currency exchange put in place by all the countries whose currencies
            we offer. With transaction fees coming up to almost nothing, you
            know that you can make the most of the currency you exchange through
            us.
          </p>
        </div>
        <div>
          <h2 className='text-3xl font-bold text-blue-900 mb-4'>
            Life Just Got A Whole Lot Easier
          </h2>
          <p className='text-lg text-gray-800 leading-relaxed'>
            Instead of breaking a sweat to manage your money while you go
            abroad, trust MultiFly to take care of your financial needs while
            you are relaxing. Why not consolidate all your travel-related
            procedures with MultiFly and make your life easier?
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default PackageTour;