import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* About Us Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Learn more about our journey, values, and mission.
          </p>
        </div>

        {/* Our Story and Values Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section: Our Story */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="./Images/about.WEBP"
              alt="Team"
              className="w-full rounded-lg shadow-lg object-cover h-64 md:h-96"
            />
            <h3 className="mt-6 text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="mt-2 text-lg text-gray-600">
              We started with a mission to create high-quality, sustainable products. Our journey has been one of growth, innovation, and a commitment to making a positive impact.
            </p>
          </div>

          {/* Right Section: Our Values */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold text-gray-800">Our Values</h3>
            <ul className="mt-4 space-y-4 text-lg text-gray-600">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9a3 3 0 016 0v1h1a3 3 0 110 6h-1v1a7 7 0 10-14 0v-1H1a3 3 0 110-6h1V9a3 3 0 013-3z" clipRule="evenodd" />
                </svg>
                Sustainability
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9a3 3 0 016 0v1h1a3 3 0 110 6h-1v1a7 7 0 10-14 0v-1H1a3 3 0 110-6h1V9a3 3 0 013-3z" clipRule="evenodd" />
                </svg>
                Innovation
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9a3 3 0 016 0v1h1a3 3 0 110 6h-1v1a7 7 0 10-14 0v-1H1a3 3 0 110-6h1V9a3 3 0 013-3z" clipRule="evenodd" />
                </svg>
                Customer Commitment
              </li>
            </ul>
          </div>
        </div>

        {/* Team Introduction Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Meet Our Team</h3>
          <p className="mt-2 text-lg text-gray-600">
            A group of passionate individuals dedicated to making a difference.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="./Images/i2.WEBP"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h4 className="mt-4 text-xl font-bold text-gray-800">John Doe</h4>
              <p className="mt-1 text-lg text-gray-600">Founder & CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./Images/i.WEBP"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h4 className="mt-4 text-xl font-bold text-gray-800">Jane Smith</h4>
              <p className="mt-1 text-lg text-gray-600">Chief Operating Officer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./Images/i3.JPEG"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h4 className="mt-4 text-xl font-bold text-gray-800">Robert Brown</h4>
              <p className="mt-1 text-lg text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-12 text-center bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-800">What Our Clients Say</h3>
          <div className="mt-8 flex justify-center space-x-6">
            <div className="flex flex-col items-center text-gray-600 max-w-xs">
              <p className="text-lg italic">"This company truly cares about its customers, providing exceptional service and products."</p>
              <p className="mt-4 text-lg font-bold text-gray-800">Michael Davis</p>
              <p className="text-gray-500">CEO, Davis Corp</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 max-w-xs">
              <p className="text-lg italic">"Innovative, reliable, and passionate – we’re proud to partner with them."</p>
              <p className="mt-4 text-lg font-bold text-gray-800">Sarah Williams</p>
              <p className="text-gray-500">Founder, Tech Solutions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
