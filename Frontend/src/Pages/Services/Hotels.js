import React from "react";
import slider from "../../Assets/About-slider.png";
import  Header  from "../../Components/Header.js";
import  Footer  from "../../Components/Footer.js";
import  Subscribe  from "../../Components/Subscribe.js";

const TopSection = () => (
  <div className='w-screen h-auto flex flex-col items-center justify-center relative mb-32'>
    <img src={slider} alt='Hotel' className='w-full h-auto object-contain' />
    <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
      Hotels
    </h1>
  </div>
);

const BookHotelSection = () => (
  <div className='container mx-auto px-4 lg:px-8 mt-16'>
    <div className='mb-12'>
      <h2 className='text-3xl font-bold text-center text-blue-800 mb-6'>
        Book The Perfect Hotel
      </h2>
      <p className='text-lg text-gray-800 leading-relaxed text-center'>
        A hotel is your home away from home. The hotel you book is your
        temporary residence, as you have the time of your life traveling,
        sightseeing, and exploring new places. Instead of settling for whatever
        happens to be available, MultiFly Travel books the best hotel for you
        with the best deals and discounts. Instead of sitting through long and
        monotonous processes, we make the booking process quick and efficient
        with complete clarity and transparency. Book your accommodation from
        anywhere and anytime!
      </p>
    </div>
  </div>
);

const TravelInfo = () => (
  <div className='mt-24 flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-24'>
    <div className='md:w-1/3'>
      <h2 className='text-3xl font-extrabold text-blue-800 mb-4'>
        We Know Travel and Travelers
      </h2>
      <p className='text-lg text-gray-600 mb-4'>
        Our top-notch services, unparalleled rates and exclusive offers give us
        an edge over competitors. Customer satisfaction is our primary aim, and
        we endeavor to offer you something better every day, be it pricing or
        quality.
      </p>
    </div>
    <div className='md:w-1/2 flex justify-center'>
      <img
        src='https://multiflytravel.com/public/assets/images/service/Travel-tour.webp'
        alt='Traveler looking at an airplane through the airport window'
        className='w-full h-90 object-cover rounded-xl shadow-lg transition transform duration-500 hover:scale-105 hover:shadow-2xl'
      />
    </div>
  </div>
);

const HotelBookingTips = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);
  const tips = ["The Essentials", "Browse Flights", "Book the Flight"];
  return (
    <div className='bg-gray-100 py-12 mt-24'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold text-center text-blue-900 mb-4'>
          Tips To Book Hotels?
        </h1>
        <div className='max-w-2xl mx-auto'>
          {tips.map((tip, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg mb-4'>
              <div
                className='flex justify-between items-center p-4 cursor-pointer'
                onClick={() => toggleAccordion(index)}
              >
                <span className='font-semibold'>{tip}</span>
                <i
                  className={`fas fa-chevron-${
                    openIndex === index ? "up" : "down"
                  }`}
                ></i>
              </div>
              {openIndex === index && (
                <div className='p-4 border-t'>
                  Remember the two D’s: destination and duration. You can also
                  filter your search according to various parameters like price,
                  location, and the required hotel amenities.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

 const Hotels = () => {
  return (
    <>
      
      <div className='bg-white text-gray-800 space-y-32'>
        <TopSection />
        <BookHotelSection />
        <div className='container mx-auto px-12 py-16 space-y-32'>
          <TravelInfo />
        </div>
        <HotelBookingTips />
      </div>
      <Footer />
    </>
  );
};

export default Hotels;