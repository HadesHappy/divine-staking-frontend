import { BsFillExclamationCircleFill } from 'react-icons/bs'

interface Props {
  text: string;
  balance: number;
}

const BalanceItem = ({text, balance}: Props) => (
  <div className='space-y-2 py-3'>
    <div className="text-white font-normal text-sm">
      {text}
    </div>
    <div className="flex flex-row gap-2 items-center">
      <div className="bg-indigo-500 py-1 px-5 text-indigo-100 rounded-xl text-sm">{balance} USDT</div>
      <BsFillExclamationCircleFill className='text-indigo-300'/>
    </div>
  </div>
);

const Balance = () => {
  return(
    <div className="flex flex-row justify-between">
      <BalanceItem text='Wallet balance:' balance={0.14} />
      <BalanceItem text='Deposited balance:' balance={0.00} />
    </div>
  )
}

export default Balance;