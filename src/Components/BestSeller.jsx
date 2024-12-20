import React from 'react'
import Data from './Data'
import Button from './Button';

const BestSeller = () => {
    const allLaptops=Object.values(Data).flat();

    const filteredarrayofi5=allLaptops.filter(
        (laptop)=>laptop.processor==="Intel i5"
    );
    const Newarrayafterfilter=filteredarrayofi5.slice(0,4);
  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl font-bold mb-10 mt-20 container mx-auto text-purple-600 bg-yellow-100 text-center'>BEST SELLER</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:col-span-1 lg:grid-cols-4 gap-3 px-5'>
          {Newarrayafterfilter.map((laptop,index)=>{
            return(
                <div
                key={index}
                className="p-4 border rounded-md shadow-md lg:bg-lime-100 bg-lime-400 hover:shadow-lg"
              >
                <img
                  src={laptop.image}
                  alt={laptop.name}
                  className="w-full h-80 object-cover mb-4 hover:scale-110 transition-transform duration-500"
                />
                <h3 className="text-lg font-semibold">{laptop.name}</h3>
                <p className="text-gray-600">{laptop.description}</p>
                <p className="mt-2 text-gray-800 font-bold">
                  ₹{laptop.price.toLocaleString('en-IN')}
                </p>
                <Button/>
              </div>               
            )
          })}
      </div>
    </div>
  )
}

export default BestSeller
