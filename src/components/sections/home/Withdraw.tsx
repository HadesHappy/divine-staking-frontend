const Withdraw = () => {
  return (
    <div className="px-5 py-3 bg-[#2d2159] rounded-xl mt-5">
      <div className="flex flex-row justify-between items-center">
        <div className="text-white py-1">Withdrawable Balance: </div>
        <div className="text-purple-400 bg-[#3d3d69] rounded-xl w-2/5 flex flex-row items-center justify-center gap-3">
          <div className="text-white py-2 text-center">500</div>
          <img className='h-4 w-4' src="/assets/images/matic.svg" alt='matic' />
        </div>
      </div>

      <div className="text-white py-1">Enter the amount to withdraw</div>
      <div className="flex flex-row justify-between items-center">
        <input className="rounded-xl py-2 bg-[#3d3d69] outline-none w-2/5 font-normal text-white text-center" />
        <div className="flex flex-row items-center justify-center gap-1 px-5 py-1 rounded-full bg-[#3d3d69] text-orange-500 text-center cursor-pointer">
          <img className="h-4 w-4" src='/assets/images/matic.svg' alt='matic' />
          Max
        </div>
      </div>
      <div className="bg-purple-500 text-white text-center rounded-xl w-full py-2 mt-5 cursor-pointer">
        Withdraw
      </div>
      {/* <div className="bg-[#3d3d69] text-purple-400 text-center rounded-xl w-full py-2 mt-5 mb-3 cursor-pointer">
        Withdrawal Record
      </div> */}
    </div>
  )
}

export default Withdraw;