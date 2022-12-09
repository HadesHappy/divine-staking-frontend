import { FC, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Header: FC = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).ethereum) {
      // check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  const connectWallet = async (): Promise<void> => {
    // to get around type checking
    if (isMetamaskInstalled)
      (window as any).ethereum
        .request({
          method: 'eth_requestAccounts',
        })
        .then((accounts: string[]) => {
          setAccount(accounts[0])
          toast.success(`Connected wallet address: ${accounts[0].substring(0, 5)}...${accounts[0].substring(accounts[0].length-3)}`)
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