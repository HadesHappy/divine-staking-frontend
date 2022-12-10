import { useState } from 'react';
import DepositModal from './DepositModal';
import toast from 'react-hot-toast';
import { useAccountContext } from '../../contexts/accountContext';

const Deposit = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { account } = useAccountContext();

  const onButtonClick = () => {
    console.log('account: ', account)
    if (account)
      setShowModal(true)
    else {
      toast.error('You should connect crypto wallet first.')
    }
  }
  return (
    <>
      <div className='font-bold text-orange-500 text-[200px] tracking-widest text-center subpixel-antialiased'>Divine</div>
      <div className='font-bold text-white text-4xl text-center subpixel-antialiased -mt-5'>A decentralized community program</div>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 w-[400px] rounded-xl mt-10 mb-5 mx-auto cursor-pointer text-5xl text-gray-800 hover:text-white font-bold text-center tracking-widest' onClick={onButtonClick}>
        Participate
      </div>
      <DepositModal showModal={showModal} setShowModal={setShowModal} account={account} />
    </>
  )
}

export default Deposit;