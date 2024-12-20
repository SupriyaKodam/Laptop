import React from 'react';
import Data from './Data';
import Button from './Button';

 
const ThreeSteps=()=>{
    return(
        <div className='bg-black flex flex-row items-center justify-between mt-20'>
             <img src="./Images/9.WEBP" className='w-full'/>
        </div>
    )
}

const FeaturedProduct = () => {
  // Combine all laptops from different brands into a single array
  const allLaptops = Object.values(Data).flat();

  // Filter laptops with Intel i7 processor
  const filteredLaptops = allLaptops.filter(
    (laptop) => laptop.processor === "Intel i7"
  );

  // Get only the first 6 laptops
  const firstSixLaptops = filteredLaptops.slice(0, 6);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-purple-600 text-center container mx-auto bg-yellow-100">
        FEATURED PRODUCT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 overflow-hidden px-5">
        {firstSixLaptops.map((laptop, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md lg:bg-lime-100 bg-lime-400 hover:shadow-lg"
          >
            <img
              src={laptop.image}
              alt={laptop.name}
              className="lg:w-full  h-80 object-cover mb-4 hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-lg font-semibold">{laptop.name}</h3>
            <p className="text-gray-600">{laptop.description}</p>
            <p className="mt-2 text-gray-800 font-bold">
              ₹{laptop.price.toLocaleString('en-IN')}
            </p>
            <Button/>
          </div>
        ))}
        {filteredLaptops.length === 0 && (
          <p className="col-span-3 text-center text-gray-600">
            No laptops found with Intel i7 processor.
          </p>
        )}
      </div>
      <ThreeSteps/>
    </div>
  );
};

export default FeaturedProduct;
