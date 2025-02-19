import React from 'react';

const footprints = [
  { name: 'Best Price', image: "C:\Users\prati\multifly\src\Assets\best_price.png" },
  { name: 'Best Deal', image: '../src\Assets\best_deal.png' },
  { name: 'Best Quality', image: '../src/Assets/best_quality.png'},
];

const FootPrint = () => {
  return (
    <div>        
      <div className="mt-15 text-left px-10 max-w-4xl mx-auto">        
        <h1 className="text-4xl font-bold text-gray-800 mt-2 text-center">Our Footprints</h1>
        <p className="mt-4 text-gray-600 text-center">
          Our superlatives that guarantee a superb experience are Best Price, Best Deal, and Best Quality. We scour the market to cinch the deal that’s most ideal and pair it with top-notch service from start to finish. Our trips are notorious for filling cognitive and electronic memories to capacity while going light on bank accounts.
        </p>
      </div>
      
      <div className="flex justify-center gap-10 mt-10 flex-wrap">
        {footprints.map((footprint, index) => (
          <div key={index} className="text-center">
            <div className={`p-6 rounded-full inline-block shadow-lg ${footprint.color}`}>
              <img src={footprint.image} alt={footprint.name} className="w-16 h-16 object-contain" />
            </div>
            <p className="mt-2 text-lg font-semibold text-gray-700">{footprint.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootPrint;
