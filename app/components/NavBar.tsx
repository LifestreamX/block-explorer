'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/blockchain.png';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '@uidotdev/usehooks';

const NavBar: React.FC = () => {
  // State variables to manage dropdown visibility
  const [isblockChainDropdown, setIsClockChainDropdown] = useState(false);
  const [isTokensDropdown, setIsTokensDropdown] = useState(false);
  const [isNftsDropdown, setIsNftsDropdown] = useState(false);
  const [isResourcesDropdown, setIsResourcesDropdown] = useState(false);
  const [isDevelopersDropdown, setIsDevelopersDropdown] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let size = useWindowSize();

  let windowWidth = size.width;

  useEffect(() => {
    if (windowWidth !== null) {
      if (windowWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    }
  }, [windowWidth]);

  const handleMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  let mobileNavs: string = isMobileMenuOpen ? '' : 'hidden';

  // Event handlers for handling mouse enter and leave events for each dropdown
  const handleIsClockChainDropdownEnter: React.MouseEventHandler = (): void => {
    setIsClockChainDropdown(true);
  };

  const handleIsClockChainDropdownLeave: React.MouseEventHandler = (): void => {
    setIsClockChainDropdown(false);
  };

  // TOKEN
  const handleIsTokenDropdownEnter: React.MouseEventHandler = (): void => {
    setIsTokensDropdown(true);
  };

  const handleIsTokenDropdownLeave: React.MouseEventHandler = (): void => {
    setIsTokensDropdown(false);
  };

  // NFTs
  const handleNftsDropdownEnter: React.MouseEventHandler = (): void => {
    setIsNftsDropdown(true);
  };

  const handleNftsDropdownLeave: React.MouseEventHandler = (): void => {
    setIsNftsDropdown(false);
  };

  //  RESOURCES
  const handleIsResourcesDropdownEnter: React.MouseEventHandler = (): void => {
    setIsResourcesDropdown(true);
  };

  const handleIsResourcesDropdownLeave: React.MouseEventHandler = (): void => {
    setIsResourcesDropdown(false);
  };

  // DEVELOPERS
  const handleIsDevelopersDropdownEnter: React.MouseEventHandler = (): void => {
    setIsDevelopersDropdown(true);
  };

  const handleIsDevelopersDropdownLeave: React.MouseEventHandler = (): void => {
    setIsDevelopersDropdown(false);
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image src={Logo} className='w-10' alt='block chain logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            BlockExplorer
          </span>
        </a>

        <button
          data-collapse-toggle='navbar-dropdown'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-dropdown'
          aria-expanded='false'
          onClick={handleMobile}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>

        <div
          className={`${mobileNavs} w-full md:block md:w-auto z-20`}
          id='navbar-dropdown'
        >
          <ul className='  flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                href='/'
                className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onMouseEnter={handleIsClockChainDropdownEnter}
                onMouseLeave={handleIsClockChainDropdownLeave}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Blockchain{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {/*  Blockchain DROPDOWN */}

              {isblockChainDropdown && (
                <div
                  id='dropdownNavbar'
                  className='z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  onMouseEnter={handleIsClockChainDropdownEnter}
                  onMouseLeave={handleIsClockChainDropdownLeave}
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-400'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Transactions
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Pending Transactions
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Contract Internal Transactions
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Beacon Deposits
                      </a>
                    </li>{' '}
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Beacon Withdrawals
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        View Blocks
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Forked Blocks (Reorgs)
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Uncles
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Top Accounts
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Verified Contracts
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* TOKENS DROPDOWN */}{' '}
            <li>
              <button
                onMouseEnter={handleIsTokenDropdownEnter}
                onMouseLeave={handleIsTokenDropdownLeave}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Tokens{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {/*  Blockchain DROPDOWN */}

              {isTokensDropdown && (
                <div
                  id='dropdownNavbar'
                  className='z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  onMouseEnter={handleIsTokenDropdownEnter}
                  onMouseLeave={handleIsTokenDropdownLeave}
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-400'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Top Tokens (ERC-20)
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Token Transfers (ERC-20)
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* NFTS DROPDOWN */}
            <li>
              <button
                onMouseEnter={handleNftsDropdownEnter}
                onMouseLeave={handleNftsDropdownLeave}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                NFTs{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>

              {isNftsDropdown && (
                <div
                  id='dropdownNavbar'
                  className='z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  onMouseEnter={handleNftsDropdownEnter}
                  onMouseLeave={handleNftsDropdownLeave}
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-400'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Top NFTs
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Top Mints
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Latest Trades
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Latest Transfers
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Latest Mintss
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* Resources Dropdown */}
            <li>
              <button
                onMouseEnter={handleIsResourcesDropdownEnter}
                onMouseLeave={handleIsResourcesDropdownLeave}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Resources{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>

              {isResourcesDropdown && (
                <div
                  id='dropdownNavbar'
                  className='z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  onMouseEnter={handleIsResourcesDropdownEnter}
                  onMouseLeave={handleIsResourcesDropdownLeave}
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-400'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Charts And Stats
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Top Statistics
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Leaderboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Directory
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Knowledge Base
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {/* Developers DROPDOWN */}
            <li>
              <button
                onMouseEnter={handleIsDevelopersDropdownEnter}
                onMouseLeave={handleIsDevelopersDropdownLeave}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Developers{' '}
                <svg
                  className='w-2.5 h-2.5 ms-2.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {/*  Blockchain DROPDOWN */}

              {isDevelopersDropdown && (
                <div
                  id='dropdownNavbar'
                  className='z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                  onMouseEnter={handleIsDevelopersDropdownEnter}
                  onMouseLeave={handleIsDevelopersDropdownLeave}
                >
                  <ul
                    className='py-2 text-sm text-gray-700 dark:text-gray-400'
                    aria-labelledby='dropdownLargeButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        API Plans
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        API Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Code Reader Beta
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Verify Contract
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Similar Contract Search
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Smart Contract Search
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Contract Diff Checker
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Vyper Online Compiler
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Bytecode to Opcode
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Broadcast Transaction
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
