import React from 'react';
import axios from 'axios';

// QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P

export async function TopNav() {
  let ethPrice: number = 0;
  let gasPrice: number = 0;

  try {
    const response = await axios.get(
      'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P'
    );
    ethPrice = response.data.result.ethusd;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(
      'https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=QJTHB3IFP6CWDX2E9KZJSZUWQI8RGAYF1P'
    );
    gasPrice = response.data.result;
  } catch (error) {
    console.log(error);
  }

  console.log(gasPrice);

  return (
    <div className='flex p-2 fixed z-50 bg-white w-screen'>
      <p className='mx-2'>
        ETH Price:{' '}
        <span className='text-green-700'>${Number(ethPrice).toFixed(2)}</span>{' '}
      </p>
      <p className='mx-2'>
        {' '}
        Gas: <span className='text-blue-700'>{gasPrice} Gwei</span>{' '}
      </p>
    </div>
  );
}

export default TopNav;
