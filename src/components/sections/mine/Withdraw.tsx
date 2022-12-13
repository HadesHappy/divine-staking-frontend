import Wallet from "../common/Wallet";

const Withdraw = () => {
  return (
    <div className="px-7 py-5">
      <Wallet />
      <div className="px-5 py-3 bg-[#212244] rounded-xl">
        <div className="text-white py-1">withdrawal amount</div>
        <div className="flex flex-row justify-between items-center">
          <input className="rounded-xl py-2 bg-[#2c2c53] outline-none w-2/5 font-normal text-white text-center text-lg" value={0}/>
          <div className="flex flex-row gap-1 items-center">
            <img className='h-5 w-5' src="/assets/images/matic.svg" alt='matic' />
            <div className="text-white uppercase">matic</div>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#2c2c53] text-orange-500 text-center cursor-pointer">
            Max
          </div>
        </div>
        <div className="bg-indigo-600 text-white text-center rounded-xl w-full py-2 my-5 cursor-pointer">
          Withdraw
        </div>
        <div className="bg-[#2c2c53] text-indigo-400 text-center rounded-xl w-full py-2 mt-5 mb-3 cursor-pointer">
          Withdrawal Record
        </div>
      </div>
    </div>
  )
}

export default Withdraw;