import React from "react";
import AboutSliderImg from "../Assets/About-slider.png"; 
import { Disclosure } from "@headlessui/react";

const TopSection = () => (
  <div className='w-screen h-auto flex items-center justify-center relative'>
    <img
      src={AboutSliderImg} 
      alt='Hotel'
      className='w-full h-auto object-contain' 
    />

    <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
      HOTELS
    </h1>
    
    <div className="max-w-7xl mx-auto px-4 lg:px-8"> 
        <div className="mb-8"> 
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Book The Perfect Hotel</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            A hotel is your home away from home. The hotel you book is your temporary residence, as you have the time of your life traveling, sightseeing, and
            exploring new places. Instead of settling for whatever happens to be available, MultiFly Travel books the best hotel for you with the best deals and
            discounts. Instead of sitting through long and monotonous processes, we make the booking process quick and efficient with complete clarity and
            transparency. Book your accommodation from anywhere and anytime!
          </p>
        </div>
      </div>
  </div>
);


const HotelInfo = () => (
  <div className='mt-12 flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-12'>
    <div className='md:w-1/3'>
      <h2 className='text-3xl font-bold text-blue-900 mb-4'>
       We Know Travel and Travelers
      </h2>
      <p className='text-lg text-gray-600 mb-4'>
       Our top-notch services, unparalleled rates and exclusive offers give us an edge over competitors. Customer satisfaction is our primary aim, and we endeavor to offer you something better every day, be it pricing or quality. After being in the business for as long as we have, we know travel and travelers. Let us help you with the logistics of getting to your destination and enjoying the site.
      </p>
      <h3 className='text-3xl font-bold text-blue-800 mb-2'>
        MultiFly Travel Hotel Services
      </h3>
      <ul className='list-none text-gray-700'>
        <li className="before:content-['>'] before:mr-2">Filter hotels based on their price, feedback, location, and amenities</li>
        <li className="before:content-['>'] before:mr-2">Read about the hotel’s area to make transportation and travel plans accordingly</li>
        <li className="before:content-['>'] before:mr-2">Book your accommodation for a safe and comfortable stay
        </li>
        
      </ul>
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
  const tips = [
    { title: "The Essentials", content: "Remember the two D’s: destination and duration. You can also filter your search according to various parameters like price, location, and the required hotel amenities." },
    { title: "Browse the List", content: "Now that you have a filtered list, you can go through each result to learn about the hotel’s information, facilities, services, and check-in and check-out policies." },
    { title: "Book It", content: "Once you’ve decided on the best option, proceed with the booking. Ensure you check for cancellation policies and payment options before finalizing." },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-4">
          Tips To Book Hotels?
        </h1>
        <div className="max-w-2xl mx-auto">
          {tips.map((tip, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-white shadow-md rounded-lg mb-4">
                  <Disclosure.Button className="w-full flex justify-between items-center p-4 cursor-pointer rounded-lg bg-white">
                    <span className={`font-semibold ${open ? "text-blue-600" : "text-black"}`}>
                      {tip.title}
                    </span>
                    <i className={`fas fa-chevron-${open ? "up" : "down"} text-blue-600`}></i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 border-t bg-white text-gray-700">
                    {tip.content}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hotel = () => {
  return (
    <div className='bg-white text-gray-800 space-y-24'>
     
      <TopSection />

      <div className='container mx-auto px-12 py-16 space-y-24'>
        <div className='md:flex md:items-center md:space-x-24 mb-24'>
          <div className='md:w-1/2'>
            <img
              src='https://multiflytravel.com/public/assets/images/service/hotel.jpg'
              alt='Tropical Bungalows in Maldives'
              className='w-full h-80 object-cover rounded-lg shadow-2xl mb-12 transform hover:scale-110 transition-all duration-500'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold text-blue-900 mb-4'>
            Why Book Hotels via <br></br>MultiFly Travel?

            </h2>
            <p className='text-lg text-gray-600 mb-4'>
            MultiFly Travel conducts thorough research on the best hotels located in optimum areas. Effortlessly search and navigate different hotels based on their location, reviews, stars, customer feedback, price, and amenities, such as rooms, food service, swimming pool, Wi-Fi, and concierge. You can also find a detailed analysis of the hotel’s location to help you make travel arrangements.
            </p>
         
          </div>
        </div>
        <HotelInfo />
      </div>
      <HotelBookingTips />
    </div>
  );
};
export default Hotel;
