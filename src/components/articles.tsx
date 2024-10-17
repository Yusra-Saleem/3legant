import React from 'react'
import Image from 'next/image'
import { HiArrowRight } from 'react-icons/hi2'

function Articles() {
    return (
        <div className="mx-[32px]  md:mx-[160px] my-[80px]">
            <div className=" flex mb-[24px] justify-between items-center">
                <h1 className=" text-3xl md:text-5xl tracking-wide font-poppins font-bold">Articles</h1>
                <div>
                <div className="flex">
                    <p className="text-base lg:text-xl  font-medium">More Articles</p>
                    <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1 " />
                </div>
                <div className="w-28 lg:w-36 - h-[0.5px] mt-[1px] bg-black"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] lg:h-[413px]">
                <div className="w-full h-auto">
                    <Image src='/home-assets/article-1.png' alt='article image' height={325} width={357} className=' md:object-cover w-full md:h-[325px]' />
                    <p className="text-base md:text-xl font-inter mb-2  mt-6 md:mt-6">7 ways to decor your home</p>

                    <div className="flex">
                        <p className="text-base  font-medium">Read More</p>
                        <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1" />
                    </div>
                    <div className="w-24 - h-[0.5px] mt-[1px] bg-black"></div>
                </div>
                <div className="w-full h-auto">
                    <Image src='/home-assets/article-2.png' alt='article image' height={325} width={357} className=' md:object-cover w-full md:h-[325px]' />
                    <p className="text-base md:text-xl font-inter mb-2  mt-6 md:mt-6">Kitchen organization</p>

                    <div className="flex">
                        <p className="text-base  font-medium">Read More</p>
                        <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1" />
                    </div>
                    <div className="w-24 - h-[0.5px] mt-[1px] bg-black"></div>
                </div>
                <div className="w-full h-auto">
                    <Image src='/home-assets/article-3.png' alt='article image' height={325} width={357} className=' md:object-cover w-full md:h-[325px]' />
                    <p className="text-base md:text-xl font-inter mb-2  mt-6 md:mt-6">Decor your bedroom</p>

                    <div className="flex">
                        <p className="text-base  font-medium">Read More</p>
                        <HiArrowRight className="ml-1 text-sm font-sans font-medium mt-1" />
                    </div>
                    <div className="w-24 - h-[0.5px] mt-[1px] bg-black"></div>
                </div>
            </div>
        </div>


    )
}

export default Articles
