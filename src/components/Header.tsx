import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-row justify-between h-40 px-20'>
      <img src='/assets/images/1.png' alt='logo' />
      <div className='flex justify-center items-center'>
        <div className='flex flex-row gap-3 items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 px-7 rounded-lg cursor-pointer'>
          <img className='w-7 h-7' src='/assets/images/matic.svg' alt='matic' />
          <div className='text-gray-800 hover:text-white font-bold text-2xl'>Connect Wallet</div>
        </div>
      </div>
    </div>
  )
}

export default Header