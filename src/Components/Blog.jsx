import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate=useNavigate();
  return (
    <div className="container w-3/4 mx-auto">
      <h1 className="text-purple-600 bg-yellow-100 text-center text-3xl mt-10 font-bold mb-10">BLOG</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Blog Post 1 */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <img src="./Images/11.WEBP" className="rounded-2xl w-full object-cover" alt="Blog 1" />
          <h1 className="text-2xl font-semibold">Is It Safe To Buy A Second Hand...</h1>
          <hr className="w-full border-b-2 border-gray-300" />
          <div className='flex flex-col space-y-1'>
          <p className="text-xs md:text-md  text-gray-500">
            We give you a better than second-hand laptop. Yes! Don't 
          </p>
          <p className="text-sm md:text-md text-gray-500 text-center">get shocked, we will provide you with a better</p>
          <p className="text-sm md:text-md text-gray-500 text-center"> option than second-hand.</p>
          </div>
          <button className="text-white p-3 rounded-md bg-orange-400" onClick={()=>navigate('/read1')}>Read More</button>
        </div>

        {/* Blog Post 2 */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <img src="./Images/12.WEBP" className="rounded-2xl w-full object-cover" alt="Blog 2" />
          <h1 className="text-2xl font-semibold">Windows 11 That Will Actually...</h1>
          <hr className="w-full border-b-2 border-gray-300" />
          <div className='flex flex-col space-y-1'>
          <p className="text-xs md:text-md text-gray-500">
          Windows 11 is the most fruitful, most collaborative, and
          </p>
          <p className="text-sm md:text-md text-gray-500 text-center">most secure version of windows ever.</p>
          <p className="text-sm md:text-md text-gray-500 text-center"> The new Windows features a</p>
          </div>
          <button className="text-white p-3 rounded-md bg-orange-400 " onClick={()=>navigate('/read2')}>Read More</button>
        </div>

        {/* Blog Post 3 */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <img src="./Images/13.WEBP" className="rounded-2xl w-full object-cover" alt="Blog 3" />
          <h1 className="text-2xl font-semibold">Refurbished Laptops Vs New Lap...</h1>
          <hr className="w-full border-b-2 border-gray-300" />
          <div className='flex flex-col space-y-1'>
          <p className="text-sm md:text-md text-gray-500">
          Yes,as long as you buy a refurbished laptop in Delhi 
          </p>
          <p className="text-sm md:text-md text-gray-500 text-center"> from us,your money and trust is 100% safe.</p>
          <p className="text-sm md:text-md text-gray-500 text-center">Frequent laptop users</p>
          </div>
          <button className="text-white p-3 rounded-md bg-orange-400" onClick={()=>navigate('/read3')}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
