import React from 'react';
import Sidebar from './Sidebar';
import Data from './Data';
import Button from './Button';
import Footer from '../Components/Footer';

const Lenovo = () => {
  const lenovoLaptops = Data.Lenovo;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Laptops Content */}
        <div className="flex-grow lg:mx-40 mt-40 lg:ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {lenovoLaptops.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-md shadow-md bg-white hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover mb-4 hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="mt-2 text-gray-800 font-bold">
                ₹{item.price.toLocaleString('en-IN')}
              </p>
              <Button />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Lenovo;
