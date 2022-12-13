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
    <div className='flex flex-row items-center justify-between py-5 px-7 bg-[#212244]'>
      <div className='text-center bg-indigo-600 text-white font-normal text-sm cursor-pointer py-2 px-2 rounded-md'>
        Connect Wallet
      </div>
      <div className='text-teal-500 text-xl font-normal' >Divine</div>
    </div>
  )
}

export default Header