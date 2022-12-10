import toast from 'react-hot-toast';
import { useMetamaskStatus } from '../hooks/useMetamaskStatus';
import { useAccountContext } from '../contexts/accountContext';

const Header = () => {
  const { isMetamaskInstalled } = useMetamaskStatus();
  const { setAddress } = useAccountContext();

  const connectWallet = async (): Promise<void> => {
    // to get around type checking
    if (isMetamaskInstalled)
      (window as any).ethereum
        .request({
          method: 'eth_requestAccounts',
        })
        .then((accounts: string[]) => {
          setAddress(accounts[0])
          toast.success(`Connected wallet address: ${accounts[0].substring(0, 5)}...${accounts[0].substring(accounts[0].length - 3)}`)
        })
        .catch((error: any) => {
          toast.error(`Something went wrong: ${error}`);
        });
    else
      toast.error('You should install Crypto Wallet first.')
  }

  return (
    <div className='flex flex-row justify-between h-40 px-20'>
      <img src='/assets/images/1.png' alt='logo' />
      <div className='flex justify-center items-center'>
        <div className='flex flex-row gap-3 items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 px-7 rounded-lg cursor-pointer' onClick={connectWallet}>
          <img className='w-7 h-7' src='/assets/images/matic.svg' alt='matic' />
          <div className='text-gray-800 hover:text-white font-bold text-2xl'>Connect Wallet</div>
        </div>
      </div>
    </div>
  )
}

export default Header