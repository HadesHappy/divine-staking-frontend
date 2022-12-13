const Withdraw = () => {
  return (
    <div className="px-7 ">
      <div className="px-5 py-3 bg-[#2d2159] rounded-xl">
        <div className="text-white py-1">withdrawal amount</div>
        <div className="flex flex-row justify-between items-center">
          <input className="rounded-xl py-2 bg-[#3d3d69] outline-none w-2/5 font-normal text-white text-center" value={0}/>
          <div className="flex flex-row gap-1 items-center">
            <img className='h-4 w-4' src="/assets/images/matic.svg" alt='matic' />
            <div className="text-white uppercase">matic</div>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#3d3d69] text-orange-500 text-center cursor-pointer">
            Max
          </div>
        </div>
        <div className="bg-purple-500 text-white text-center rounded-xl w-full py-2 my-5 cursor-pointer">
          Withdraw
        </div>
        <div className="bg-[#3d3d69] text-purple-400 text-center rounded-xl w-full py-2 mt-5 mb-3 cursor-pointer">
          Withdrawal Record
        </div>
      </div>
    </div>
  )
}

export default Withdraw;