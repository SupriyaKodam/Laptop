import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const [isBrandDropdownVisible, setIsBrandDropdownVisible] = useState(false);
  const [isPriceDropdownVisible, setIsPriceDropdownVisible] = useState(false);
  const [isProcessorDropdownVisible, setIsProcessorDropdownVisible] = useState(false);
  const [istogglePerson, setIstogglePerson] = useState(false);
  const [istoggleper,setIstoggleper]=useState(false);

  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const processorRef = useRef(null);
  const personRef = useRef(null);

  // Toggle functions for dropdown visibility
  const toggleBrandDropdown = () => setIsBrandDropdownVisible(!isBrandDropdownVisible);
  const togglePriceDropdown = () => setIsPriceDropdownVisible(!isPriceDropdownVisible);
  const toggleProcessorDropdown = () => setIsProcessorDropdownVisible(!isProcessorDropdownVisible);
  const togglePerson = () => setIstogglePerson(!istogglePerson);
  const togglePer = ()=>setIstoggleper(!istoggleper)

  // Close dropdowns when clicking outside of them
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (brandRef.current && !brandRef.current.contains(e.target)) {
        setIsBrandDropdownVisible(false);
      }
      if (priceRef.current && !priceRef.current.contains(e.target)) {
        setIsPriceDropdownVisible(false);
      }
      if (processorRef.current && !processorRef.current.contains(e.target)) {
        setIsProcessorDropdownVisible(false);
      }
      if (personRef.current && !personRef.current.contains(e.target)) {
        setIstogglePerson(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-around bg-black p-2 lg:p-5'>
      <div className="flex flex-col items-center justify-center mb-2 lg:mb-0 lg:items-start lg:justify-start">
        <img src="./Images/icon.PNG" className='md:w-24 w-16' alt="Logo" />
      </div>
      <div className='text-white font-bold space-x-1 md:mx-28 lg:mx-0 md:space-x-8 flex flex-row'>
        {/* Brand Dropdown */}
        <div className='relative' ref={brandRef}>
          <button onClick={toggleBrandDropdown} className='text-xs md:text-base'>
            BRAND <ArrowDropDownIcon className='text-white' />
          </button>
          {isBrandDropdownVisible && (
            <div
              className='absolute bg-yellow-100 text-black p-5 w-48 rounded-lg shadow-lg space-y-2 z-50'
              style={{ top: '100%', left: 0 }}
            >
              <ul className='space-y-3'>
                <li onClick={()=>navigate('/lenovo')}>LENOVO</li>
                <li onClick={()=>navigate('/apple')}>APPLE</li>
                <li onClick={()=>navigate('/dell')}>DELL</li>
                <li onClick={()=>navigate('/hp')}>HP</li>
              </ul>
            </div>
          )}
        </div>

        {/* Price Dropdown */}
        <div className='relative' ref={priceRef}>
          <button onClick={togglePriceDropdown} className='text-xs md:text-base'>
            PRICE RANGE <ArrowDropDownIcon className='text-white' />
          </button>
          {isPriceDropdownVisible && (
            <div
              className='absolute bg-yellow-100 text-black p-5 w-48 rounded-lg shadow-lg space-y-3 z-50'
              style={{ top: '100%', left: 0 }}
            >
              <ul className='space-y-3'>
                <li onClick={()=>navigate('/lessthan50thousand')}>20000₹-50000₹</li>
                <li onClick={()=>navigate('/lessthan1lakh')}>50000₹-100000₹</li>
                <li onClick={()=>navigate('/lessthan1lakh50')}>100000₹-150000₹</li>
                <li onClick={()=>navigate('/lessthan2lakh')}>150000₹-200000₹</li>
                <li onClick={()=>navigate('/lessthan3lakh')}>200000₹-300000₹</li>
              </ul>
            </div>
          )}
        </div>

        {/* Processor Dropdown */}
        <div className='relative' ref={processorRef}>
          <button onClick={toggleProcessorDropdown} className='text-xs md:text-base'>
            PROCESSOR <ArrowDropDownIcon className='text-white' />
          </button>
          {isProcessorDropdownVisible && (
            <div
              className='absolute bg-yellow-100 text-black p-5 w-48 rounded-lg shadow-lg space-y-3 z-50'
              style={{ top: '100%', left: 0 }}
            >
              <ul className='space-y-3'>
                <li onClick={()=>navigate('/i3')}>Intel i3</li>
                <li onClick={()=>navigate('/i5')}>Intel i5</li>
                <li onClick={()=>navigate('/i7')}>Intel i7</li>
              </ul>
            </div>
          )}
        </div>
        <div>
        <button className='text-xs md:text-base'onClick={()=>navigate('/aboutus')}>ABOUT US</button>
        </div>
      </div>

      <div className='flex item-center justify-center lg:relative mt-px lg:mt-0 mb-px lg:mb-0'>
        <input
          type="text"
          placeholder='Search'
          className='rounded-lg p-2 lg:p-3 border-2 border-gray-600 w-40 lg:w-96 text-lg font-semibold'
        />
        <SearchIcon className='absolute top-4 right-3 text-black' />
        <div className='lg:hidden flex items-center justify-center flex-row relative' onClick={togglePer}>
          <PersonIcon className='text-white' style={{ fontSize: 40 }} />
          <ArrowDropDownIcon className='text-white items-center justify-center lg:absolute lg:top-3 lg:left-8' />
        </div>
        {istoggleper && (
          <div
            className='absolute bg-yellow-100 top-40 text-black font-bold p-5 w-48 rounded-lg shadow-lg space-y-5 z-50'
          >
            <ul>
              <li onClick={()=>navigate('/lr')}>Login/Register</li>
            </ul>
          </div>
        )}
      </div>

      <div className='relative' ref={personRef}>
        <div className='hidden lg:flex items-center justify-center flex-row relative' onClick={togglePerson}>
          <PersonIcon className='text-white' style={{ fontSize: 40 }} />
          <ArrowDropDownIcon className='text-white items-center justify-center lg:absolute lg:top-3 lg:left-8' />
        </div>
        {istogglePerson && (
          <div
            className='absolute bg-yellow-100 top-16 text-black font-bold p-5 w-48 rounded-lg shadow-lg space-y-5 z-50'
          >
            <ul>
              <li onClick={()=>navigate('/lr')}>Login/Register</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
