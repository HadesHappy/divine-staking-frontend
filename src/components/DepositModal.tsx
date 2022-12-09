import { FaRegWindowClose, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

interface Props {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const DepositModal = ({ showModal, setShowModal }: Props) => {
  const onCloseClick = (e: any) => {
    e.stopPropagation();
    setShowModal(false);
  }
  const onOutSideClick = (e: any) => {
    if (e.target.id === 'outside')
      setShowModal(false)
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
                      <input className='text-center text-white text-xl py-2 rounded-r-full rounded-l-full bg-gray-700 w-full outline-none' type='number' />
                      <div className='text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-52 text-center rounded-full mt-5 py-2 text-gray-700 hover:text-white mx-auto font-bold cursor-pointer'>Deposit</div>
                      <hr className='my-5 border-purple-500' />
                      <div className='flex flex-row gap-5 items-center'>
                        <FaExclamationTriangle className='text-pink-500' />
                        <div className='uppercase text-pink-500'>
                          important!
                        </div>
                      </div>
                      <div className='pl-10'>
                        Do not forget about blockchain fee! You should have 150-200 TRX more on your wallet, or your transaction will get *out of energy* status!<br />
                        You can buy/borrow energy for transactions from third-party websites to spend less fee.
                      </div>
                      <div className='my-2'>
                        <div className='flex flex-row items-center gap-5'>
                          <FaCheck className=' text-purple-500' />
                          <div className='text-lg'>Minimum participation amount <span className='uppercase text-purple-500'>10 matic</span></div>
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