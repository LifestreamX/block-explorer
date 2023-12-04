import React from 'react';
import heroImg from '../assets/images/heroImage.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='relative w-screen h-[300px]   '>
      <Image
        src={heroImg}
        alt='image background'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='w-full h-full z-0'
        style={{ zIndex: -1 }}
      />
      <div className='text-white w-full h-full flex flex-col  items-center justify-center relative  right-14 bottom-14 m-14 lg:m-4'>
        <div className='w-1/2 '>
          <h1 className='text-lg md:text-2xl lg:text-4xl font-bold top-4 relative my-2  '>
            The Ethereum Blockchain Explorer
          </h1>
          <div className='flex items-center  text-black'>
            <div className='mb-6'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Large input
              </label>

              <input
                type='text'
                id='default-input'
                className='bg-gray-50 border w-52 md:w-[500px]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>

            <button className='relative right-10 '>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 relative hover:text-blue-600'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </button>
          </div>
          <p className='font-bold text-sm md:text-md lg:text-lg'>
            Sponsored: WSM: New Crypto Casino, No KYC.{' '}
            <span className='text-yellow-400 text-sm md:text-md lg:text-lg'>
              200% up to $25,000 Bonus at Wall Street Memes Casino.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
