import React from 'react'
import Image from 'next/image'
import { HiArrowRight } from "react-icons/hi2";

function NotificationBar() {
  return (
    
    <div className="h-[40px] bg-[#F3F5F7] px-[32px] relative">
      <div className="flex justify-center">
        <div className="flex justify-center items-center mt-3 md:mt-2 px-4">
          <Image src="/home-assets/vector.png" alt="vector image" width={20} height={18}  className="h-[12px] w-[13px]"/>
          <p className="ml-1 md:ml-3 text-[12px] md:text-base text-neutral-950 font-medium font-inter">
           30% off storewide — Limited time!
          </p>
          <span>
            <div className="flex justify-center items-center">
              <p className="ml-3 text-base font-sans text-[#377DFF] hidden md:block font-medium">Shop Now</p>
              <HiArrowRight className="ml-1 text-lg  hidden md:block font-sans text-[#377DFF] mt-1" />
            </div>
            <div className="w-24 h-[0.5px] ml-3 mt-[1px] hidden md:block bg-[#377DFF]"></div>
          </span>
        </div>
      </div>

      {/* Right section: Close button, positioned to the right */}
      <div className='absolute top-[14px] right-[50px] md:right-[20px] cursor-pointer'>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.4419 1.44194C11.686 1.19786 11.686 0.802136 11.4419 0.558058C11.1979 0.313981 10.8021 0.313981 10.5581 0.558058L6 5.11612L1.44194 0.558058C1.19786 0.313981 0.802136 0.313981 0.558058 0.558058C0.313981 0.802136 0.313981 1.19786 0.558058 1.44194L5.11612 6L0.558058 10.5581C0.313981 10.8021 0.313981 11.1979 0.558058 11.4419C0.802136 11.686 1.19786 11.686 1.44194 11.4419L6 6.88388L10.5581 11.4419C10.8021 11.686 11.1979 11.686 11.4419 11.4419C11.686 11.1979 11.686 10.8021 11.4419 10.5581L6.88388 6L11.4419 1.44194Z" fill="#343839"/>
        </svg>
      </div>
    </div>
  )
}

export default NotificationBar;
