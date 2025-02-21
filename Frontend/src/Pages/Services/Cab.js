import React from 'react'
import  Header  from '../../Components/Header'
import AboutSliderImg from "../../Assets/About-slider.png"; 
import car1 from "../../Assets/Car-1.png";
import cab2 from "../../Assets/cab-2.jpg";
import  Footer  from '../../Components/Footer';
import  Subscribe  from '../../Components/Subscribe';
const TopSection = () => (
    <div className='w-screen h-auto flex items-center justify-center relative'>
      <img
        src={AboutSliderImg}
        alt='Forex'
        className='w-full h-auto object-contain'
      />
      <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
        Cab
      </h1>
    </div>
  );
 const Cab = () => {
  return (
    <>
        
        <TopSection />
    <div className="container mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold text-blue-900">Your Ride Awaits You</h2>
      <p className="mt-4 text-gray-700">
        Booking cabs is integral to planning a trip, and MultiFly Travels strives to
        give you the best cab arrangements. Our travel services are not limited to
        only flights; we also ensure you have the perfect ride at your home,
        airport, and hotel. Whether a business, romantic, or solo trip, you can
        book a car in advance with us or rent one to make your stay more convenient.
      </p>
      
      <div className="flex flex-col md:flex-row items-center mt-10">
        <img
          src='https://multiflytravel.com/public/assets/images/service/Car-1.png'
          alt="Cars in parking"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        
        <div className="md:w-1/2 text-left md:pl-10">
          <h3 className="text-2xl font-bold text-blue-900">Our Service</h3>
          <p className="mt-2 text-gray-700">
            As a leading B2B travel portal, we bring you the best cars—mini, economy, or
            compact, whether to drive you around or for you to drive. Here’s why you should
            ride with our cab partners:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-800 font-semibold">✔ Skilled and safe drivers</li>
            <li className="text-gray-800 font-semibold">✔ Comfortable vehicles</li>
            <li className="text-gray-800 font-semibold">✔ Verified drivers</li>
            <li className="text-gray-800 font-semibold">✔ Excellent customer service</li>
            <li className="text-gray-800 font-semibold">✔ Best prices</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl font-bold text-blue-900">Where Do You Want To Go?</h2>
          <p className="mt-2 text-gray-700">
            We provide you with the best cabs, regardless of the destination or duration.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-800 font-semibold">✔ Airport drop and pick-ups</li>
            <li className="text-gray-800 font-semibold">✔ Local travel</li>
            <li className="text-gray-800 font-semibold">✔ Outstation trips</li>
          </ul>
        </div>
        <img
          src={cab2}
          alt="Rental cars lineup"
          className="w-full md:w-1/2 rounded-lg shadow-lg mt-4 md:mt-0"
        />
      </div>
      <br/>
      <br/>
      
      <div className="mt-16 text-left">
        <h1 className="text-2xl font-bold text-blue-900">Cabracadabra! Experience The Magic With Us!</h1>
        <p className="mt-2 text-gray-700">
          With MultiFly Travel, you can find the best cabs and rental cars according to your comfort, preference, and budget.
        </p>
        <p className="mt-2 text-gray-700">
          Do you want to roam the Paris streets? Rent a car and cruise the city of romance.
        </p>
        <p className="mt-2 text-gray-700">
          Are you flying to Bali for a Bachelor’s party? Book a Limousine with your friends!
        </p>
        <p className="mt-2 text-gray-700">
          Flying from Mumbai to New Delhi for a business meeting? Your cab will be waiting for you at the airport.
        </p>
      </div>
      <br/>
    <br/>
    
    </div>
    <Footer/>
    </>
  )
};

export default Cab;