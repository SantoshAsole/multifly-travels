import React from "react";
import slider from "../../Assets/About-slider.png";
// import Footer from "../Components/Footer";
import Header from "../../Components/Header.js"
import Footer from "../../Components/Footer.js"


 const destinations = [
  {
    name: "Ladakh",
    img: "https://storage.googleapis.com/a1aa/image/UkRPScpPon8-3DITuvxfgBdmPKtxk1tpzqEn2xnCatg.jpg",
  },
  {
    name: "Himachal",
    img: "https://storage.googleapis.com/a1aa/image/3avwp2dnJV91fjgEn1hFWPO8BWG3OkTqW9721LZiAgE.jpg",
  },
  {
    name: "Kerala",
    img: "https://storage.googleapis.com/a1aa/image/k9TKXOgTUUi8Jp4cHlnpsab8DYl2ayIYsy0YAS34mYo.jpg",
  },
  {
    name: "Goa",
    img: "https://storage.googleapis.com/a1aa/image/Jht3zyVqCmWGxRLMWc-tPmJiZx7BjT8RiV9SXwztNa0.jpg",
  },
  {
    name: "Kashmir",
    img: "https://storage.googleapis.com/a1aa/image/WlmNjTFNIn7k82zO243Ryrn4Jm4QWARYw2aU0MV9a4I.jpg",
  },
  {
    name: "Chardham",
    img: "https://storage.googleapis.com/a1aa/image/faAAvig1YrkfGDM7ued_AePk7wvX0JPQe9oVwphtNpc.jpg",
  },
  {
    name: "Andaman",
    img: "https://storage.googleapis.com/a1aa/image/a3W_HL_7KuBUmnzzsMpZG5cDBbm69iwa7b2I1gZkYm8.jpg",
  },
  {
    name: "Rajasthan",
    img: "https://storage.googleapis.com/a1aa/image/pEWtD8ARcKCuO9GyW3AUa9qx1d_-C09Dek2hisZjtFk.jpg",
  },
];

const internationalDestinations = [
  {
    src: "https://storage.googleapis.com/a1aa/image/KvZGzmpKAYBGu8yXNhJtdS_hkSUWb36bgWW7GFj1EpY.jpg",
    alt: "Scenic view of Ladakh",
    label: "Ladakh",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/SATvq4Rq4IccNTIhtAdHbx4wO1nMtZYmN6M6EirpVCc.jpg",
    alt: "Historical architecture in Turkey",
    label: "Turkey",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/OSWYDYWqPtTgX2XlwuAGZBToSYvGlvBG_dFtVUV_tiM.jpg",
    alt: "Modern skyline of Dubai",
    label: "Dubai",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/kBWLrUkk21V24LkFcM_MLawM2vOfv1yfpVdC45WVfUw.jpg",
    alt: "Cultural landmarks in Thailand",
    label: "Thailand",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/ahhabgN14jl2634PBX_JGkJcRmt_sWLcUnNlGlLL5sw.jpg",
    alt: "Eiffel Tower in Europe",
    label: "Europe",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/SKBTh_mdUsnTC2R48uyzmHc5oWcQa6-eYkY3-l8gLPo.jpg",
    alt: "Overwater bungalows in Maldives",
    label: "Maldives",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/VdgPv3UnV47M_95XtDNkSzOOaFJH-C6UCFqcBQ4_pUE.jpg",
    alt: "Ancient ruins in Sri Lanka",
    label: "Sri Lanka",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/qp39M_Q5YTWXC4s_bvxpQ2iPuC_jHJLUeEuKE-g_UFY.jpg",
    alt: "Tropical scenery in Mauritius",
    label: "Mauritius",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/O5kkLPLD0hWmN2rmNAQhZ91j1SKGNaYwrJ7AxvmgCc4.jpg",
    alt: "Mountainous landscape in Switzerland",
    label: "Switzerland",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/suQ0CmTYxM4nobnrWEff0LC0KtGJfb0prnE1MQsjGZY.jpg",
    alt: "Big Ben and London Eye in the UK",
    label: "The UK",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/gPVjOfTZvXqgBfTQffnXsMMbq-9IQu6-7AlH6q-NIeY.jpg",
    alt: "Medieval fortress in Serbia",
    label: "Serbia",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/1vt-GIouqPsNOooIiAUiUJvGPznJ-_HuwcTuDPUybbU.jpg",
    alt: "Historic cityscape of Italy",
    label: "Italy",
  },
];

const DestinationCard = ({ name, img }) => (
  <div className='destination-card'>
    <img
      src={img}
      alt={`Scenic view of ${name}`}
      className='w-full h-40 object-cover rounded-md shadow-lg transform transition duration-300 hover:scale-105'
    />
    <p className='font-semibold text-lg mt-4 text-center'>{name}</p>
  </div>
);

const InternationalDestinationCard = ({ src, alt, label }) => (
  <div className='destination-card'>
    <img
      src={src}
      alt={alt}
      className='w-full h-40 object-cover rounded-md shadow-lg transform transition duration-300 hover:scale-105'
    />
    <p className='font-semibold text-lg mt-4 text-center'>{label}</p>
  </div>
);

const TopSection = () => (
  <div className='w-screen h-auto flex items-center justify-center relative'>
    <img
      src={slider} // Use the imported image here
      alt='Flight'
      className='w-full h-auto object-contain' // Ensures the entire image is visible
    />

    <h1 className='absolute text-white text-5xl font-bold drop-shadow-lg'>
      Flight
    </h1>
  </div>
);
const Destinations = () => (
  <section className='container mx-auto px-4'>
    <h2 className='text-4xl font-bold text-center text-gray-800 mb-8'>
      Domestic Destinations
    </h2>
    <div className='flex justify-center mb-8'>
      <div className='w-24 h-1 bg-yellow-500'></div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
      {destinations.map((destination, index) => (
        <DestinationCard key={index} {...destination} />
      ))}
    </div>
  </section>
);

const TravelInfo = () => (
  <div className='mt-12 flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-12'>
    <div className='md:w-1/3'>
      <h2 className='text-3xl font-extrabold text-gray-800 mb-4'>
        Why Fly With MultiFly Travel?
      </h2>
      <p className='text-lg text-gray-600 mb-4'>
        MultiFly Travel takes care of all flying aspects and requirements for
        you, including
      </p>
      <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
        MultiFly Travel Hotel Services
      </h3>
      <ul className='list-disc list-inside text-gray-700'>
        <li>Booking two-way flights</li>
        <li>Arranging airport transportation</li>
        <li>Visa documents</li>
        <li>In-flight meals</li>
      </ul>
    </div>
    <div className='md:w-1/2 flex justify-center'>
      <img
        src='https://storage.googleapis.com/a1aa/image/tDCebH8LFu0PdhQ_j56HTtwtnzcRW2DAvwCZ6WE4abo.jpg'
        alt='Traveler looking at an airplane through the airport window'
        className='w-full h-64 object-cover rounded-xl shadow-lg transition transform duration-500 hover:scale-105 hover:shadow-2xl'
      />
    </div>
  </div>
);
const HotelBookingTips = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);
  const tips = [
    "Get the Essentials in Order",
    "Browse Flights",
    "Book the Flight",
  ];
  return (
    <div className='bg-white py-12'>
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
                <div className='p-4 border-t'>Details about {tip}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const Flights = () => {
  return (
    <>
    
    <div className='bg-white text-gray-800 space-y-24'>
      {/* Top Section with Jungle Background and Custom Shape */}
      <TopSection />

      {/* Main Content */}
      <div className='container mx-auto px-12 py-16 space-y-24'>
        <div className='md:flex md:items-center md:space-x-24 mb-24'>
          <div className='md:w-1/2'>
            <img
              src='https://storage.googleapis.com/a1aa/image/SKBTh_mdUsnTC2R48uyzmHc5oWcQa6-eYkY3-l8gLPo.jpg'
              alt='Tropical Bungalows in Maldives'
              className='w-full h-80 object-cover rounded-lg shadow-2xl mb-12 transform hover:scale-110 transition-all duration-500'
            />
          </div>

          <div className='md:w-1/2 space-y-12'>
            <h1 className='text-5xl font-extrabold text-gray-800'>
              Explore the World with MultiFly Travel
            </h1>
            <p className='text-xl text-gray-600'>
              Embark on the adventure of a lifetime with MultiFly. From domestic
              escapes to exotic international getaways, we promise the best
              travel experience.
            </p>
            <h2 className='text-3xl font-bold text-gray-800'>
              Popular Destinations
            </h2>
            <p className='text-lg text-gray-700'>
              Discover the most scenic spots across the globe with us. Whether
              you're looking for a peaceful retreat or an exciting adventure, we
              have something for everyone.
            </p>
          </div>
        </div>

        {/* International Destinations */}
        <h2 className='text-5xl font-bold text-center text-gray-800 mb-12'>
          International Destinations
        </h2>
        <div className='flex justify-center mb-16'>
          <div className='w-32 h-1 bg-yellow-500'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16'>
          {internationalDestinations.map((item, index) => (
            <InternationalDestinationCard key={index} {...item} />
          ))}
        </div>

        <TravelInfo />
      </div>

      {/* Domestic Destinations Section */}
      <Destinations />

      <HotelBookingTips />
      {/* <Footer/> */}
      
    </div>
    <Footer/>
    </>
  );
};
 
export default Flights;