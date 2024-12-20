import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';

const Sidebar = () => {
  return (
    <div className='h-[calc(100vh-4rem)] overflow-y-auto w-48 mt-20 hidden lg:flex flex-col  bg-gray-800 text-white items-center justify-center'>
         <div className='flex flex-col items-start justify-start space-y-5'>
            <h1 className='text-2xl mt-5'>CATEGORY</h1>
            <hr className='border-gray-500 w-full border-2'/>
            <ul className=''>
                <li><ComputerIcon className='text-blue-600 mr-3 mb-3'/><span>Lenovo</span></li>
                <li><ComputerIcon className='text-blue-600 mr-3 mb-3'/><span>Apple</span></li>
                <li><ComputerIcon className='text-blue-600 mr-3 mb-3'/><span>Dell</span></li>
                <li><ComputerIcon className='text-blue-600 mr-3 mb-3'/><span>HP</span></li>
            </ul>
         </div>
         <div className='flex flex-col items-start justify-start space-y-5 mt-5'>
            <h1 className='text-2xl '>PRICE RANGE</h1>
            <hr className='border-gray-500 w-full border-2'/>
            <ul className=''>
                <li className='mb-3 text-lg'>20000₹-50000₹</li>
                <li className='mb-3 text-lg'>50000₹-100000₹</li>
                <li className='mb-3 text-lg'>100000₹-150000₹</li>
                <li className='mb-3 text-lg'>150000₹-200000₹</li>
                <li className='mb-3 text-lg'>200000₹-300000₹</li>
            </ul>
         </div>
         <div className='flex flex-col items-start justify-start space-y-5 mt-5'>
            <h1 className='text-2xl '>PROCESSOR</h1>
            <hr className='border-gray-500 w-full border-2'/>
            <ul className=''>
                <li className='mb-3 text-lg'>Intel i3</li>
                <li className='mb-3 text-lg'>Intel i5</li>
                <li className='mb-3 text-lg'>Intel i7</li>
            </ul>
         </div>
    </div>
  )
}

export default Sidebar

