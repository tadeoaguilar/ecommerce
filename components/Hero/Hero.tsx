import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className=' grid sm:mt-[1vh] md:mt-[4vh] gap-20 grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 items-center w-8/12 mx-auto bg-primary-100' > 
        <div className=' h-auto  col-span-1 sm:row-span-1 '>
            <h1 className=' my-6 text-[280%] sm:text-[300%] md:text-[500%] text-primary-400  leading-[1.05] font-bold tracking-tighter ' >
                A healthy meal delivered to your door, every single day
            </h1>  
            <p className=' text-[150%] leading-[1.2] text-primary-400 mb-12 2xl:text-[36px] '>
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
            </p>
            <button type="button" className=' h-[3rem] w-[7rem] focus:outline-none text-white bg-accent hover:bg-red-800 focus:ring-4 focus:ring-red-300 my-1 md:my-3 rounded-full text-2xl   '>Envia </button>
        </div>
        <div className=' self-start md:self-center relative row-span-1 md:col-span-1 max-w-6xl h-[60%] md:h-[80%] sm:row-span-1'>
            <Image src='/hero-min.png' alt='main' layout='fill' />
        </div>
        
     </div>
  )
}

export default Hero