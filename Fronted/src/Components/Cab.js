import React from "react";
import AboutSliderImg from "../Assets/About-slider.png"; 

const TopSection = () => (
  <div className='w-screen h-auto flex items-center justify-center relative'>
    <img
      src={AboutSliderImg}
      alt='Cab'
      className='w-full h-auto object-contain' 
    />

    <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
      CAB
    </h1>
 
  </div>
);

const Cab = () => {
  return (
    <div className='bg-white text-gray-800 space-y-24'>
    <TopSection />   
    <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center"> 
        <div className="mb-8"> 
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Your Ride Awaits You
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
          Booking cabs is integral to planning a trip, and MultiFly Travels strives to give you the best cab arrangements. Our travel services are not limited to only flights; we also ensure you have the perfect ride at your home, airport, and hotel. Whether a business, romantic, or solo trip, you can book a car in advance with us or rent one to make your stay more convenient.
          </p>
        </div>
      </div>
      <div className='container mx-auto px-12 py-16 space-y-24'>
        <div className='md:flex md:items-center md:space-x-24 mb-24'>
          <div className='md:w-1/2'>
            <img
              src='https://multiflytravel.com/public/assets/images/service/Car-1.png'
              alt='Tropical Bungalows in Maldives'
              className='w-full h-80 object-cover rounded-lg shadow-2xl mb-12 transform hover:scale-110 transition-all duration-500'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold text-blue-900 mb-4'>
            Our Service
            </h2>
            <p className='text-lg text-gray-800 leading-relaxed'>
            As a leading B2B travel portal, we bring you the best cars–mini, economy, or compact, whether to drive you around or for you to drive. Here’s why you should ride with our cab partners:
            </p>
            <ul className="list-none text-gray-700">
              <li className="before:content-['>'] before:mr-2">Skilled and safe drivers</li>
              <li className="before:content-['>'] before:mr-2">Comfortable vehiclesn</li>
              <li className="before:content-['>'] before:mr-2">Verified drivers</li>
              <li className="before:content-['>'] before:mr-2">Excellent customer service  </li>
              <li className="before:content-['>'] before:mr-2"> Best prices </li>
            </ul>
          </div>
        </div>
      
        <div className='mt-12 flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-12'>
            <div className='md:w-1/3'>
              <h2 className='text-3xl font-bold text-blue-900 mb-4'>
              Where Do You Want to Go?
              </h2>
              <p className='text-lg text-gray-800 leading-relaxed'>
              We provide you with the best cabs, regardless of the destination or duration.
              </p>
              <ul className="list-none text-gray-700">
                <li className="before:content-['>'] before:mr-2">Airport drop and pick-ups</li>
                <li className="before:content-['>'] before:mr-2">Local travel        </li>
                <li className="before:content-['>'] before:mr-2">Outstation trips</li>
              </ul>

            </div>
            <div className='md:w-1/2 flex justify-center'>
              <img
                src='https://multiflytravel.com/public/assets/images/service/cab-bok.jpg'
                alt='Traveler looking at an airplane through the airport window'
                className='w-full h-90 object-cover rounded-xl shadow-lg transition transform duration-500 hover:scale-105 hover:shadow-2xl'
              />
            </div>
        </div>
        <div className="bg-gray-100 p-8 shadow-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Cabracadabra! Experience The Magic With Us!
        </h1>
        <p className="text-gray-700 mb-6">
          With MultiFly Travel, you can find the best cabs and rental cars according to your comfort, preference, and budget.
        </p>

      <div className="space-y-4">
        <div className="flex items-start">
          <p className="text-gray-700">
            Do you want to roam the Paris streets? Rent a car and cruise the city of romance.
          </p>
        </div>
        <div className="flex items-start">
          <p className="text-gray-700">
            Are you flying to Bali for a Bachelor's party? Book a Limousine with your friends!
          </p>
        </div>
        <div className="flex items-start">
          <p className="text-gray-700">
            Flying from Mumbai to New Delhi for a business meeting? Your cab will be waiting for you at the airport.
          </p>
        </div>
      </div>
    </div>
  </div>
 </div>
  );
};
export default Cab;
