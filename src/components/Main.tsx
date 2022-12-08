import React from 'react'
import Description from './Description'
import Divider from './Devider'

const Main = () => {
  return (
    <div>
      <div className='font-bold text-orange-500 text-[200px] tracking-widest text-center subpixel-antialiased'>Divine</div>
      <div className='font-bold text-white text-3xl text-center subpixel-antialiased -mt-5'>A decentralized community program</div>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 w-[400px] rounded-xl my-10 mx-auto cursor-pointer text-5xl text-gray-800 hover:text-white font-bold text-center tracking-widest'>Participate</div>
      <Divider />      
      <Description />
    </div>
  )
}

export default Main