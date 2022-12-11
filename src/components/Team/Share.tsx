import { FaUsers } from 'react-icons/fa';

const Share = () => {
  return (
    <div className='mx-64'>
      <div className='uppercase text-4xl text-purple-500 mt-10 mb-5'>my team:</div>
      <div className="bg-[#2d2159] p-10 rounded-lg">
        <div className="flex flex-row gap-36">
          <div className='space-y-20'>
            <div className="uppercase text-white text-4xl font-bold">people</div>
            <div className="flex flex-row items-center justify-center gap-5 bg-purple-500 rounded-md px-5">
              <div className="text-white text-4xl py-5">20</div>
              <FaUsers className='w-10 h-10' />
            </div>
          </div>
          <div className='space-y-20'>
            <div className="uppercase text-white text-4xl font-bold">today team earnings</div>
            <div className='flex flex-row gap-20'>
              <div className="flex flex-row items-center justify-center gap-5 bg-purple-500 rounded-md px-5">
                <div className="text-white text-4xl py-5">500</div>
                <img className='w-8 h-8' src='/assets/images/matic.svg' alt='matic' />
              </div>
              <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-60 rounded-xl cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
                Withdraw
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center mt-5'>
        <div className='w-[250px] bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 rounded-full'>
          <div className='uppercase text-center text-4xl text-white font-bold py-3 px-10 m-3 rounded-full bg-gray-900 cursor-pointer'>
            share
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share;