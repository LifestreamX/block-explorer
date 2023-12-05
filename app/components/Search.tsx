'use client';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const Search: React.FC = () => {
  type SearchResultsType = {
    status: string;
    message: string;
    result: string;
  };

  const [userInput, setUserInput] = useState<string>('');
  const [dropDownInput, setDropdownInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResultsType>();
  const [searchInputDisabled, setSearchInputDisabled] = useState(true);

  // let contarctadress = 0x57d90b64a1a57749b0f932f1a3395792e12e7055;
  const handleSearch = () => {
    let input1: string = '';
    let input2: string = '';

    if (dropDownInput === 'tokenbalance') {
      let space = userInput.indexOf(' ');

      input1 = userInput.slice(0, space).trim();
      input2 = userInput.slice(space).trim();
    }

    let url =
      dropDownInput === 'totalsupply'
        ? `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${userInput}&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P`
        : dropDownInput === 'tokenbalance'
        ? `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${input1}&address=${input2}&tag=latest&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P`
        : '';

    axios.get(url).then((response) => {
      setSearchResults(response.data);
      // Do something with the response data
    });
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Perform the action you want when Enter key is pressed
      let url =
        dropDownInput === 'totalsupply'
          ? `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${userInput}&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P`
          : dropDownInput === 'tokenbalance'
          ? 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x57d90b64a1a57749b0f932f1a3395792e12e7055&address=0xe04f27eb70e025b78871a2ad7eabe85e61212761&tag=latest&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P'
          : '';

      axios.get(url).then((response: AxiosResponse<SearchResultsType>) => {
        setSearchResults(response.data);
        // Do something with the response data
      });
    }
  };

  const handleDropdownInput = (e: ChangeEvent<HTMLSelectElement>) => {
    const dropDownValue = e.target.value;
    setDropdownInput(dropDownValue);

    if (dropDownInput === 'totalsupply' || 'tokenbalance') {
      setSearchInputDisabled(false);
    } else {
      setSearchInputDisabled(true);
    }
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputValue = e.target.value;
    setUserInput(userInputValue);
  };

  return (
    <>
      <search className='flex items-center  text-black'>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Large input
          </label>

          <select
            onChange={handleDropdownInput}
            value={dropDownInput}
            className='my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option selected>Select Token Option</option>
            <option value='totalsupply'>
              Token total supply by contract address
            </option>
            <option value='tokenbalance'>
              Token account balance for token contract address
            </option>
          </select>

          <input
            required
            disabled={searchInputDisabled}
            value={userInput}
            onKeyDown={handleKeyPress}
            onChange={handleSearchInput}
            placeholder={
              dropDownInput === 'tokenbalance'
                ? 'Enter Contract Address and Address with a space in between'
                : dropDownInput === 'totalsupply'
                ? 'Enter Contract Address'
                : ''
            }
            type='text'
            id='default-input'
            className='bg-gray-50 border w-52 md:w-[500px]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <button
          disabled={userInput === '' && true}
          className='relative right-10 top-8 '
          onClick={handleSearch}
        >
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

      <section className='absolute  w-1/2 my-52'>
        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  {dropDownInput === 'totalsupply'
                    ? 'Token Total Supply'
                    : dropDownInput === 'tokenbalance'
                    ? 'Token Account Balance'
                    : 'PLEASE SELECT A OPTION '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                >
                  {searchResults !== undefined &&
                  searchResults?.message === 'OK' &&
                  searchResults?.result !== '0'
                    ? searchResults?.result
                    : ''}

                  {searchResults?.message === 'NOTOK' && 'Invalid Input'}

                  {searchResults?.result === '0' && 'Invalid Input'}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Search;
