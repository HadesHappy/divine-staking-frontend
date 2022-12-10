import { useState } from 'react'

const useBalance = () => {
  const [walletBalance, setWalletBalance] = useState<number | null>(null);
  const setBalance = (amount: number) => {
    setWalletBalance(amount);
  }
  return { walletBalance, setBalance }
}