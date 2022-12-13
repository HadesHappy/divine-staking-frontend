import toast from 'react-hot-toast';
import { useMetamaskStatus } from '../../hooks/useMetamaskStatus';
import { useAccountContext } from '../../contexts/accountContext';

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
    <div className='flex flex-row items-center justify-between py-5 px-7 bg-[#101728]' >
      <div className='text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-normal text-sm cursor-pointer py-1 px-5 rounded-full'>
        Connect Wallet
      </div>
      <img className='w-40 h-12' src='/assets/images/logo.jpg' alt='logo' />
    </div>
  )
}

export default Header