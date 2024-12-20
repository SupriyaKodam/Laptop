import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
  return (
    <div className='flex flex-col sm:items-start sm:justify-start pl-20 lg:pl-0 gap-10 lg:gap-0 lg:flex-row lg:items-center lg:justify-around bg-black py-10'>
      <div className='flex flex-col items-start justify-start lg:w-[200px] text-white space-y-2 py-10'>
          <h1 className='text-2xl font-bold'>Get in Touch</h1>
          <p className='font-serif'>B 38, Old DLF COLONY,
             SUNDAR SINGH MARG,
              GURGRAM, HR 122001</p>
           <p className='font-serif'>info@lappyy.com</p>   
           <p className='font-serif'>+91 7607919819</p>
      </div>
      <div className='flex flex-row space-x-2 text-white'>
          <FacebookIcon style={{fontSize:30}} className='border-2 border-white hover:border-yellow-400 hover:text-yellow-400'/>
          <InstagramIcon style={{fontSize:30}} className='border-2 border-white hover:border-yellow-400 hover:text-yellow-400'/>
          <LinkedInIcon style={{fontSize:30}} className='border-2 border-white hover:border-yellow-400 hover:text-yellow-400'/>
          <YouTubeIcon style={{fontSize:30}} className='border-2 border-white hover:border-yellow-400 hover:text-yellow-400'/>
      </div>
      <div className='flex flex-col items-start justify-start lg:w-[200px] text-white space-y-2'>
          <h1 className='text-2xl font-bold'>Company Info</h1>
          <p className='font-serif hover:text-yellow-400'><ArrowForwardIosIcon style={{fontSize:15}} className='hover:text-yellow-400'/>About us</p>
          <p className='font-serif hover:text-yellow-400'><ArrowForwardIosIcon style={{fontSize:15}} className='hover:text-yellow-400'/>Privacy Policy</p>
          <p className='font-serif hover:text-yellow-400'><ArrowForwardIosIcon style={{fontSize:15}} className='hover:text-yellow-400'/>Terms and conditions</p>
      </div>
      <div className='flex flex-col items-start justify-start lg:w-[300px] text-white space-y-2'>
          <h1 className='text-2xl font-bold'>Our Hub</h1>
          <p className='font-serif hover:text-yellow-400'><ArrowForwardIosIcon style={{fontSize:15}} className='hover:text-yellow-400'/>Refurbished Laptops In Delhi</p>
          <p className='font-serif hover:text-yellow-400'><ArrowForwardIosIcon style={{fontSize:15}} className='hover:text-yellow-400'/>Refurbished Laptops In Gurgaon</p>
          <p className='font-serif hover:text-yellow-400'><ArrowForwardIosIcon style={{fontSize:15}} className='hover:text-yellow-400'/>Refurbished Laptops In Noida</p>
      </div>
    </div>
  )
}

export default Footer
