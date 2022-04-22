import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-12 mt-12  w-8/12 mx-auto' > 
    <div className=' h-full col-span-1 sm:row-span-1 border-2 '>
            <h1 className=' my-6 text-[280%] sm:text-[300%] md:text-[100%]] text-primary-400  leading-[1.05] font-bold tracking-wider ' >
                A healthy meal delivered to your door, every single day
            </h1> 
            <p className=' text-[150%] leading-[1.2] text-primary-400 mb-12 2xl:text-[36px] '>
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
            </p>
        </div>
        <div className=' h-32 self-start md:self-center relative row-span-1 md:col-span-1 max-w-6xl   sm:row-span-1 '>
            <Image src='/hero-min.png' alt='main' layout='fill' />
        </div>
     </div>
        <div className='flex flex-col w-8/12 mx-auto '>
            <button type="button" className='  h-[3rem] w-full md:w-[7rem] focus:outline-none text-white bg-accent hover:bg-red-800 focus:ring-4 focus:ring-red-300 my-1 md:my-3 rounded-full text-2xl  '>Envia </button>
            <div className='flex justify-start items-center mb-2'>
                <div className= ' ring-2 ring-primary-300 mt-3 mr-[-1.2rem] rounded-full overflow-hidden relative w-10 h-10'>
                    <Image src='/customer-1.jpg' alt='customer1' layout='fill' />
                </div>
                <div className= ' ring-2 ring-primary-300 mt-3 mr-[-1.2rem] rounded-full overflow-hidden relative w-10 h-10'>
                    <Image src='/customer-2.jpg' alt='customer1' layout='fill' />
                </div>
                <div className= ' ring-2 ring-primary-300 mt-3 mr-[-1.2rem] rounded-full overflow-hidden relative w-10 h-10'>
                    <Image src='/customer-3.jpg' alt='customer1' layout='fill' />
                </div>
                <div className= ' ring-2 ring-primary-300 mt-3 mr-[-1.2rem] rounded-full overflow-hidden relative w-10 h-10'>
                    <Image src='/customer-4.jpg' alt='customer1' layout='fill' />
                </div>
                <div className= ' ring-2 ring-primary-300 mt-3 mr-[-1.2rem] rounded-full overflow-hidden relative w-10 h-10'>
                    <Image src='/customer-5.jpg' alt='customer1' layout='fill' />
                </div>
                <div className= ' ring-2 ring-primary-300 mt-3 mr-0  rounded-full overflow-hidden relative w-10 h-10'>
                    <Image src='/customer-6.jpg' alt='customer1' layout='fill' />
                </div>
                <p className=' ml-4 text-primary-400 '>
                    <span className=' text-accent font-bold '>250,000+</span> meals delivered last year!
                </p>
            </div>
            </div>

    </>
  )
}

export default Hero