import React from 'react';
import heroImg from '../assets/images/heroImage.jpg';
import Image from 'next/image';
import Search from './Search';

const Hero = () => {
  return (
    <>
      <section className='relative w-screen h-[300px]   '>
        <Image
          src={heroImg}
          alt='image background'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          style={{ zIndex: -1 }}
        />
        <div className='text-white w-full h-full flex flex-col  items-center justify-center relative  right-14 bottom-14 m-14 lg:m-4'>
          <div className='w-1/2 '>
            <h1 className='text-lg md:text-2xl lg:text-4xl font-bold top-4 relative my-2  '>
              The Ethereum Blockchain Explorer
            </h1>
            <Search />
            <p className='font-bold text-sm md:text-md lg:text-lg'>
              Sponsored: WSM: New Crypto Casino, No KYC.{' '}
              <span className='text-yellow-400 text-sm md:text-md lg:text-lg'>
                200% up to $25,000 Bonus at Wall Street Memes Casino.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>{/* For TABLE Displaying etherprice and gas price  */}</section>
    </>
  );
};

export default Hero;
