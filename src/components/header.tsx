"use client"

import { useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white pt-5 md:pt-3 h-[60px] w-full relative'>
      <div className='flex items-center justify-between px-[32px] md:px-40'>
        {/* Logo and Hamburger icon */}
        <div className='flex gap-1'>
          <FaBars className='h-4  mt-[6px]  w-5 block md:hidden cursor-pointer' onClick={toggleMenu} />
          <h2 className='font-poppins text-xl md:text-3xl font-semibold'>3legant.</h2>
        </div>

        {/* Centered Navigation Links for Desktop */}
        <div className='hidden md:flex justify-center items-center space-x-8 flex-grow'>
          <a href='#' className='text-gray-500 hover:text-gray-800'>Home</a>
          <a href='#' className='text-gray-500 hover:text-gray-800'>Shop</a>
          <a href='#' className='text-gray-500 hover:text-gray-800'>Product</a>
          <a href='#' className='text-gray-500 hover:text-gray-800'>Contact Us</a>
        </div>

        
           
            <div className='absolute  right-8  md:px-36 pt-8 mt-7 transform -translate-y-1/2'>
          <svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_231_2450)">
              <circle cx="40" cy="14" r="10" fill="#141718" />
              <path d="M36.9281 18V16.6705L40.0346 13.794C40.2988 13.5384 40.5204 13.3082 40.6994 13.1037C40.8812 12.8991 41.019 12.6989 41.1127 12.5028C41.2065 12.304 41.2534 12.0895 41.2534 11.8594C41.2534 11.6037 41.1951 11.3835 41.0787 11.1989C40.9622 11.0114 40.8031 10.8679 40.6014 10.7685C40.3997 10.6662 40.171 10.6151 39.9153 10.6151C39.6483 10.6151 39.4153 10.669 39.2164 10.777C39.0176 10.8849 38.8642 11.0398 38.7562 11.2415C38.6483 11.4432 38.5943 11.6832 38.5943 11.9616H36.8429C36.8429 11.3906 36.9721 10.8949 37.2306 10.4744C37.4892 10.054 37.8514 9.72869 38.3173 9.49858C38.7832 9.26847 39.3201 9.15341 39.9281 9.15341C40.5531 9.15341 41.0971 9.2642 41.5602 9.4858C42.0261 9.70455 42.3883 10.0085 42.6468 10.3977C42.9054 10.7869 43.0346 11.233 43.0346 11.7358C43.0346 12.0653 42.9693 12.3906 42.8386 12.7116C42.7108 13.0327 42.4821 13.3892 42.1525 13.7812C41.823 14.1705 41.3585 14.6378 40.7591 15.1832L39.4849 16.4318V16.4915H43.1497V18H36.9281Z" fill="white" />
            </g>
            <path d="M10 8L10 9C10 10.6569 11.3431 12 13 12C14.6569 12 16 10.6569 16 9V8" stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.6115 5H9.38851C7.43316 5 5.7644 6.41365 5.44294 8.3424L3.77627 18.3424C3.36992 20.7805 5.25009 23 7.72185 23H18.2782C20.7499 23 22.6301 20.7805 22.2237 18.3424L20.5571 8.3424C20.2356 6.41365 18.5669 5 16.6115 5Z" stroke="#141718" strokeWidth="1.5" strokeLinejoin="round" />
            <defs>
              <clipPath id="clip0_231_2450">
                <rect width="20" height="20" fill="white" transform="translate(30 4)" />
              </clipPath>
            </defs>
          </svg>
        </div>
          
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className='fixed  left-0 top-[40px] w-[90vw] h-full bg-white z-50 p-5 overflow-y-auto'>
          <div className='flex justify-between items-center'>
            <h2 className='font-poppins text-xl md:text-3xl font-semibold'>3legant.</h2>
            <IoClose className='h-6 w-6 cursor-pointer' onClick={toggleMenu} />
          </div>

          {/* Search Bar */}
          <div className='mt-5'>
            <input
              type='text'
              placeholder='Search'
              className='w-full p-3 border border-gray-300 rounded-md'
            />
          </div>

          {/* Menu Items */}
          <ul className='space-y-6 mt-8'>
            <li><a href='#' className='text-lg font-medium text-gray-700 hover:text-gray-900'>Home</a></li>
            <li><a href='#' className='text-lg font-medium text-gray-700 hover:text-gray-900'>Shop</a></li>
            <li><a href='#' className='text-lg font-medium text-gray-700 hover:text-gray-900'>Product</a></li>
            <li><a href='#' className='text-lg font-medium text-gray-700 hover:text-gray-900'>Contact Us</a></li>
          </ul>

          {/* Cart and Wishlist */}
          <div className='mt-10'>
            <div className='flex justify-between items-center'>
              <span className='text-lg font-medium text-gray-700'>Cart</span>
              <div className='flex items-center gap-1'>
                <svg className='h-6 w-6' viewBox="0 0 20 20">
                  {/* Cart SVG */}
                </svg>
                <span className='text-sm bg-black text-white rounded-full h-6 w-6 flex items-center justify-center'>2</span>
              </div>
            </div>
            <div className='flex justify-between items-center mt-5'>
              <span className='text-lg font-medium text-gray-700'>Wishlist</span>
              <div className='flex items-center gap-1'>
                <svg className='h-6 w-6' viewBox="0 0 20 20">
                  {/* Wishlist SVG */}
                </svg>
                <span className='text-sm bg-black text-white rounded-full h-6 w-6 flex items-center justify-center'>2</span>
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          <div className='mt-8'>
            <button className='w-full py-3 bg-black text-white rounded-md'>Sign In</button>
          </div>

          {/* Social Media Icons */}
          <div className='flex justify-center gap-6 mt-8'>
            <FaInstagram className='h-6 w-6 text-gray-500' />
            <FaFacebookF className='h-6 w-6 text-gray-500' />
            <FaYoutube className='h-6 w-6 text-gray-500' />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
