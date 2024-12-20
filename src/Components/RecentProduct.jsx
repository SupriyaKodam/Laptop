import React from 'react'
import Data from './Data'
import Button from './Button';

const RecentProduct = () => {
  const alllaptops = Object.values(Data).flat();

  const filteredarray = alllaptops.filter(
    (lap) => lap.processor === "Intel i3"
  );

  const filteredfourlaps = filteredarray.slice(0, 8);

  const filteredi5 = alllaptops.filter(
    (laptops) => laptops.processor === "Intel i5"
  );

  const filter1laptopofi5 = filteredi5.slice(0, 1);

  return (
    <div className='w-full mt-10'>
      <div className='container mx-auto'>
        <h1 className='text-3xl text-center text-purple-600 font-bold bg-yellow-100'>
          RECENT PRODUCTS
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-10 mt-20'>
        {filteredfourlaps.map((lap, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md lg:bg-lime-100  bg-lime-400 hover:shadow-lg"
          >
            <img
              src={lap.image}
              alt={lap.name}
              className="w-full h-80 object-cover mb-4 hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-lg font-semibold">{lap.name}</h3>
            <p className="text-gray-600">{lap.description}</p>
            <p className="mt-2 text-gray-800 font-bold">
              ₹{lap.price.toLocaleString('en-IN')}
            </p>
            <Button/>
          </div>
        ))}
        {filter1laptopofi5.map((laptops, index) => {
          return ( // Added return statement here
            <div key={index} className="p-4 border rounded-md shadow-md lg:bg-lime-100 bg-lime-400 hover:shadow-lg">
              <img
                src={laptops.image}
                alt={laptops.name}
                className="w-full h-80 object-cover mb-4 hover:scale-110 transition-transform duration-500"
              />
              <h3 className="text-lg font-semibold">{laptops.name}</h3>
              <p className="text-gray-600">{laptops.description}</p>
              <p className="mt-2 text-gray-800 font-bold">
                ₹{laptops.price.toLocaleString('en-IN')}
              </p>
              <Button/>
            </div>
          );
        })}
      </div>
      <div className='w-full mt-20'>
        <img src="./Images/10.WEBP" className='w-full lg:h-96'/>
      </div>
    </div>
  );
}

export default RecentProduct;
