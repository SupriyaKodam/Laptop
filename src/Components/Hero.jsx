import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const TopCategory = () => (
    <div className="container mx-auto mt-10">
      <h1 className="container mx-auto bg-yellow-100 text-3xl font-bold text-violet-700 text-center mb-10">
        TOP CATEGORY
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <img src="./Images/4.WEBP" className="md:w-[500px] md:h-[300px] object-cover" alt="Image 1" />
          <img src="./Images/5.WEBP" className="md:w-[500px] md:h-[300px] object-cover" alt="Image 2" />
        </div>
        <div className="row-span-2">
          <img src="./Images/8.WEBP" className="md:w-[500px] md:h-[600px] object-cover" alt="Image 3" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-5">
          <img src="./Images/6.WEBP" className="md:w-[500px] md:h-[300px] object-cover" alt="Image 4" />
          <img src="./Images/7.WEBP" className="md:w-[500px] md:h-[300px] object-cover" alt="Image 5" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-20">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          <img src="./Images/1.JPEG" alt="Slide 1" className="h-[50vh] lg:h-auto" />
          <img src="./Images/2.JPEG" alt="Slide 2" className="h-[50vh] lg:h-auto" />
          <img src="./Images/3.JPEG" alt="Slide 3" className="h-[50vh] lg:h-auto" />
        </Slider>
      </div>
      <TopCategory />
    </div>
  );
};

export default Hero;
