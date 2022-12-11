const Withdraw = () => {
  return (
    <div className="mx-64 mt-7">
      <div className="text-4xl text-purple-500">Withdraw wallet:</div>
      <div className="bg-[#2d2159] rounded-md  pl-10 pr-32 py-5 mt-5">
        <div className="flex flex-row justify-between items-center">
          <input type='number' className="text-white text-4xl py-5 px-10 w-72 bg-purple-500 outline-none" />
          <div className="flex flex-row gap-3">
            <img className='w-9 h-9' src='/assets/images/matic.svg' alt='matic' />
            <div className="uppercase text-3xl text-purple-600 cursor-pointer">max</div>
          </div>
        </div>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-60 rounded-xl my-5 cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
          Withdraw
        </div>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-80 rounded-xl cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
          Withdraw Record
        </div>
      </div>
    </div>
  )
}

export default Withdraw;