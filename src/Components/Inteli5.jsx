import React from 'react'
import Data from './Data'
import Button from './Button'

const Inteli5 = () => {
    const Inteli3=Object.values(Data).flat()
    const filteredData=Inteli3.filter(
        (laptop)=>laptop.processor==="Intel i5"
    )
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-40 overflow-hidden px-10 lg:px-20">
        {filteredData.map((laptop, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md bg-white hover:shadow-lg"
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
    </div>
  )
}

export default Inteli5
