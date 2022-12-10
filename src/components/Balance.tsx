import useBalance from '../hooks/useBalance';
import useContractInfo from '../hooks/useContractInfo';

const Balance = () => {
  const { walletBalance } = useBalance();
  const { totalDeposit } = useContractInfo();

  return (
    <div className="mx-64 mt-7">
      <div className="text-4xl text-purple-500">Wallet balance:</div>
      <div className="bg-[#2d2159] rounded-md flex flex-row justify-between pl-10 pr-32 mt-5 items-center">
        <div className="text-white text-4xl py-5">{walletBalance || 0}</div>
        <img className='w-9 h-9' src='/assets/images/matic.svg' alt='matic' />
      </div>
      <div className="flex flex-row gap-10 mt-10 justify-center items-center">
        <div className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div className="rounded-full bg-[#2d2159] m-10">
            <div className="flex items-center justify-center text-4xl text-white h-48 w-48">2.55%</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-10">
            <div className="uppercase text-white text-3xl">total deposit:</div>
            <div className="text-3xl py-5 w-60 text-center bg-[#2d2159] text-white">{totalDeposit || 0}</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-3 my-4" />
          <div className="flex flex-row items-center gap-10">
            <div className="uppercase text-white text-3xl">total earned:</div>
            <div className="text-3xl py-5 w-60 text-center bg-[#2d2159] text-white">2800</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance;