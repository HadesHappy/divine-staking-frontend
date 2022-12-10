import { useState } from 'react';
import { FaRegWindowClose, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import toast from 'react-hot-toast'
import { BeatLoader } from 'react-spinners';
import useMaticPrice from '../../hooks/useMaticPrice';
import { deposit } from '../../contract/roi.contract';
import { MINIMUM_DEPOSIT } from '../../utils/constants';

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  walletBalance: number | null;
  getBalance: Function;
}

const DepositModal = ({ showModal, setShowModal, walletBalance, getBalance }: Props) => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { price } = useMaticPrice();

  const onCloseClick = (e: any) => {
    e.stopPropagation();
    setShowModal(false);
  }
  const onOutSideClick = (e: any) => {
    if (e.target.id === 'outside')
      setShowModal(false)
  }

  const onChange = (e: any) => {
    setAmount(e.target.value);
  }

  const depositClick = async () => {
    if (price && amount <= Math.floor(MINIMUM_DEPOSIT / price))
      toast.error(`Invalid Amount. Minimum deposit amount is: ${Math.floor(MINIMUM_DEPOSIT / price)}`);
    else {
      if (walletBalance !== null && amount > walletBalance) {
        toast.error(`Exceed the wallet balance. Your maximum availability is ${walletBalance} matic`);
      }
      else {
        try {
          setLoading(true);
          const response = await deposit(amount);
          if (response.status === 'success'){
            toast.success(response.message);
            await getBalance();
          }
          else
            toast.error(response.message);
          setLoading(false);
        }
        catch (error) {
          toast.error(`something went wrong: ${error}`)
        }
      }
    }
  }

  return (
    <>
      {
        showModal ?
          (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="fixed inset-0 w-full h-full bg-black opacity-70" />
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none" id='outside' onClick={onOutSideClick}>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
                  <div className="border-0 rounded-xl shadow-lg relative bg-[#101728] px-5 text-white py-10 mt-1 w-[760px]">
                    <FaRegWindowClose className='w-5 h-5 my-1 float-right cursor-pointer' onClick={onCloseClick} />
                    <div className='px-10'>
                      <div className="uppercase text-3xl font-bold my-10 text-center">
                        Make New Participation
                      </div>
                      <div className='text-center text-lg my-5'>
                        Specify deposit <span className='text-purple-500 uppercase'>matic</span> amount here:
                      </div>
                      <input className='text-center text-white text-xl py-2 rounded-r-full rounded-l-full bg-gray-700 w-full outline-none' type='number' value={amount} onChange={onChange} />
                      {
                        loading ?
                          <div className='text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-52 text-center rounded-full mt-5 py-2 mx-auto cursor-wait'>
                            <BeatLoader />
                          </div>
                          :
                          <div className='text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-52 text-center rounded-full mt-5 py-2 text-gray-900 font-serif hover:text-white mx-auto font-bold cursor-pointer' onClick={depositClick}>
                            Deposit
                          </div>
                      }
                      <hr className='my-5 border-purple-500' />
                      <div className='flex flex-row gap-5 items-center'>
                        <FaExclamationTriangle className='text-pink-500' />
                        <div className='uppercase text-pink-500'>
                          important!
                        </div>
                      </div>
                      {
                        price && <div className='pl-10'>
                          Do not forget about blockchain fee! You should have {Math.floor(10 / price) + 5}-{Math.floor(10 / price) + 10} Matic more on your wallet, or your transaction will get *out of energy* status!<br />
                          You can buy/borrow energy for transactions from third-party websites to spend less fee.
                        </div>
                      }
                      <div className='my-2'>
                        <div className='flex flex-row items-center gap-5'>
                          <FaCheck className=' text-purple-500' />
                          <div className='text-lg'>Minimum participation amount
                            {
                              price &&
                              <span className='uppercase text-purple-500'> {Math.floor(10 / price)} matic</span>
                            }
                          </div>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                          <FaCheck className=' text-purple-500' />
                          <div className='text-lg'>We are working only with: <span className='uppercase text-purple-500'>matic</span> cryptocurrency</div>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                          <FaCheck className=' text-purple-500' />
                          <div className='text-lg'>Your participation will be activated after <span className=' text-purple-500'>1 confirmation</span> in blockchain</div>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                          <FaCheck className=' text-purple-500' />
                          <div className='text-lg'>Withdrawable rewards come instantly to your secure wallet balance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) :
          <></>
      }
    </>
  )
}

export default DepositModal;