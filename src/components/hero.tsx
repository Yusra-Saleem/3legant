import React from 'react'; // Include if React < 17
import Image from 'next/image';
import { HiArrowRight } from "react-icons/hi2";

const Hero: React.FC = () => {
  return (
    <div className=' mx-[32px] md:mx-[160px]'>
    <div className="w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="/home-assets/slider-1.png"
          className="w-full h-[536px] hidden sm:block"
          alt="Slide 1"
          width={1920} 
          height={536} 
        />
        <Image
          src="/home-assets/mob-slide-1.png"
          className="w-full h-[304px] sm:hidden block"
          alt="Slide 1"
          width={1920}
          height={304} 
        />
        <div className="absolute left-5 right-5 mx-4 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle sm:flex justify-center items-center w-8 h-8 rounded-full bg-white hidden">❮</a>
          <a href="#slide2" className="btn btn-circle sm:flex justify-center items-center w-8 h-8 rounded-full bg-white hidden">❯</a>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:flex items-center md:justify-between py-12">
        <div className="md:max-w-[55%]">
          <h1 className="font-semibold text-[40px] md:text-[72px] md:leading-[76px] tracking-[-2px] font-poppins">
            Simply Unique<span className="font-bold text-gray-500">/</span><br/>Simply Better<span className="font-bold text-gray-500">.</span>
          </h1>
        </div>
        <div className="md:max-w-[45%] md:text-xl text-md leading-relaxed">
          <p className="text-gray-500">
            <span className="font-bold text-black">3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mr-[24px] md:mr-0 md:flex md:items-center md:justify-center gap-[24px] w-full h-auto relative">
  <div className="bg-[#F3F5F7] h-auto w-auto relative">
    <Image 
      src="/home-assets/living-room.png" 
      alt="Living Room" 
      width={548} 
      height={664} 
      className="object-cover" // Ensures the image covers the area
    />
    <div className="absolute top-[25px] left-[25px] lg:top-[40px] lg:left-[40px] z-10"> {/* Added z-index */}
      <h2 className="font-poppins font-semibold text-xl mb-1 lg:text-3xl">Living Room</h2>
      <div className="flex">
        <p className="text-sm  font-medium">Shop Now</p>
        <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1" />
      </div>
      <div className="w-20 - h-[0.5px] mt-[1px] bg-black"></div>
    </div>
  </div>

  <div className="mt-[24px] md:mt-0">
    <div className="bg-[#F3F5F7] h-auto w-full relative">
      <Image 
        src="/home-assets/bedroom.png" 
        alt="Bedroom" 
        width={548} 
        height={664} 
        className="object-cover"
      />
       <div className="absolute bottom-[25px] left-[25px] lg:bottom-[40px] lg:left-[40px] z-10"> {/* Added z-index */}
      <h2 className="font-poppins font-semibold text-xl mb-1 lg:text-3xl">Bed Room</h2>
      <div className="flex">
        <p className="text-sm  font-medium">Shop Now</p>
        <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1" />
      </div>
      <div className="w-20 - h-[0.5px] mt-[1px] bg-black"></div>
    </div>
    </div>
    <div className="bg-[#F3F5F7] mt-[24px] h-auto w-full relative">
      <Image 
        src="/home-assets/kitchen.png" 
        alt="Kitchen" 
        width={548} 
        height={664} 
        className="object-cover"
      />
       <div className="absolute bottom-[25px] left-[25px] lg:bottom-[40px] lg:left-[40px] z-10"> {/* Added z-index */}
      <h2 className="font-poppins font-semibold text-xl mb-1 lg:text-3xl">Kitchen</h2>
      <div className="flex">
        <p className="text-sm  font-medium">Shop Now</p>
        <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1" />
      </div>
      <div className="w-20 - h-[0.5px] mt-[1px] bg-black"></div>
    </div>
    </div>
  </div>
</div>

    </div>
    </div>
  );
};

export default Hero;
