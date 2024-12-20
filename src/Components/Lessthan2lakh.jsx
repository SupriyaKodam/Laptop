import React from 'react';
import Data from './Data';
import Footer from './Footer';
import Button from './Button';

const LessThan2lakh = () => {
  // Flatten the data and filter laptops with price less than or equal to 50000
  const lessthan50thousand = Object.values(Data).flat();
  const filteredData = lessthan50thousand.filter(
    (laptop) => laptop.price>150000 && laptop.price<=200000 // Correct the price condition to <= 50000
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-40 mb-20 overflow-hidden px-10 lg:px-20">
        {filteredData.map((laptop, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md bg-white hover:shadow-lg"
          >
            <img
              src={laptop.image}
              alt={laptop.name}
              className="lg:w-full h-80 object-cover mb-4 hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-lg font-semibold">{laptop.name}</h3>
            <p className="text-gray-600">{laptop.description}</p>
            <p className="mt-2 text-gray-800 font-bold">
              ₹{laptop.price.toLocaleString('en-IN')}
            </p>
            <Button />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LessThan2lakh;
