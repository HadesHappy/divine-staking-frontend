import { useState, useEffect } from 'react'
import { useAccountContext } from '../contexts/accountContext';
import { ethers } from 'ethers';
import { LOCAL_NETWORK } from '../utils/constants';

const useBalance = () => {
  const { account } = useAccountContext();
  const [walletBalance, setWalletBalance] = useState<number | null>(null);

  const getBalance = async (): Promise<void> => {
    const provider = new ethers.providers.JsonRpcProvider(LOCAL_NETWORK);
    if (account) {
      provider.getBalance(account)
        .then((balance: any) => {
          const balanceInEth = ethers.utils.formatEther(balance);
          setWalletBalance(Number(balanceInEth));
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      setWalletBalance(null)
    }
  }

  useEffect(() => {
    getBalance()
  }, [account])

  return { walletBalance };
}

export default useBalance;