// components/Footer.js

import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="px-[32px] md:py-6 md:px-[160px] bg-[#101010]">
    <footer className="bg-[#101010] text-white py-10">
      {/* Upper Footer Section */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section - Newsletter Signup */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center">
            <p className="text-xl font-bold mb-1 lg:mb-0 lg:mr-6">3legant.</p>
            {/* Divider: 20px Horizontal on mobile, 20px Vertical on larger screens */}
            <div className="lg:h-8 h-[1px] w-8 lg:w-[1px] bg-[#E8ECEF] mx-0 lg:mx-4 my-2 lg:my-0"></div>
            <p className="text-[#E8ECEF] lg:ml-6  mt-1">Gift & Decoration Store</p>
          </div>
        </div>



        {/* Right Section - Links */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <ul className="flex flex-col lg:flex-row items-center justify-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-6 text-[#FEFEFE]">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

      </div>

          {/* Lower Footer Section */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
        <div className="container lg:px-4 flex flex-col lg:flex-row justify-between  items-center">
          <div className="hidden lg:flex">
            <p className="text-[#E8ECEF]">
              copyright &copy; 2023 3legant. All rights reserved.
            </p>
            <div className="flex ml-6 space-x-4 mt-4 font-inter lg:mt-0">
              <a href="#" className="text-white ">Privacy Policy</a>
              <a href="#" className="text-white">Terms of Use</a>
            </div>
          </div>
          <div className="flex gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FEFEFE" stroke-width="1.5" />
              <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
              <circle cx="12" cy="12" r="5" stroke="#FEFEFE" stroke-width="1.5" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="18" rx="4" stroke="#FEFEFE" stroke-width="1.5" />
              <path d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
            </svg>


          </div>
          <div className="">
          <div className=" block lg:hidden mx-auto space-x-4 mt-6 mb-6 font-inter  text-center">
              <a href="#" className="text-white ">Privacy Policy</a>
              <a href="#" className="text-white">Terms of Use</a>
            </div>
            <p className="text-[#E8ECEF] text-center">
              copyright &copy; 2023 3legant. All rights reserved.
            </p>
            
          </div>
        </div>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
