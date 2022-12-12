import {
  FaDonate,
  FaUserFriends
} from 'react-icons/fa';

const PoolInfo = () => {
  return (
    <div className='flex flex-row justify-between mx-7 px-10 rounded-xl bg-[#212244] mt-10'>
      <div className='flex flex-col items-center justify-center py-3'>
        <div className='w-7 h-7 rounded-full bg-teal-200 flex justify-center items-center text-teal-600'>
          <FaDonate />
        </div>
        <div className='text-indigo-300'>Staking Pool</div>
        <div className='text-white'>23423403</div>
      </div>
      <div className='flex flex-col items-center justify-center py-3'>
        <div className='w-7 h-7 rounded-full bg-rose-200 flex justify-center items-center text-rose-600'>
          <FaUserFriends />
        </div>
        <div className='text-indigo-300'>Participant</div>
        <div className='text-white'>3500</div>
      </div>
    </div>
  )
}

export default PoolInfo;