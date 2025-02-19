import React from 'react';

const PrepareBag = () => {
  return (
    <div className="flex gap-10 justify-center bg-blue-900 text-white p-6 rounded-lg w-1/8">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold">1.5k+</h2>
        <p>Happy Customers</p>
      </div>
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold">50+</h2>
        <p>Destinations</p>
      </div>
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold">500+</h2>
        <p>5 Star Reviews</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">30+</h2>
        <p>Years of Experience</p>
      </div>
    </div>
  );
};

export default PrepareBag;

