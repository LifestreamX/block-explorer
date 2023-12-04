'use client';
import React from 'react';
import axios from 'axios';

const Search = () => {
  const handleSearch = () => {
    axios
      .get(
        'https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P'
      )
      .then((response) => {
        console.log(response);
        // Do something with the response data
      });
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter') {
      // Perform the action you want when Enter key is pressed
      console.log('Enter key pressed! You can perform an action here.');
    }
  };

  return (
    <search className='flex items-center  text-black'>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Large input
        </label>

        <input
          onKeyDown={handleKeyPress}
          type='text'
          id='default-input'
          className='bg-gray-50 border w-52 md:w-[500px]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>

      <button className='relative right-10 ' onClick={handleSearch}>
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
    </search>
  );
};

export default Search;
