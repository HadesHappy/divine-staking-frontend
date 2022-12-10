import { useState, useEffect } from 'react';
import { getTotalDeposit } from "../contract/roi.contract";
import { useAccountContext } from '../contexts/accountContext';

const useContractInfo = () => {
  const [totalDeposit, setTotalDeposit] = useState<number | null>(null);
  const { account } = useAccountContext()

  const getDepositAmount = async () => {
    const amount = await getTotalDeposit(account || '0x00');
    if (amount) {
      setTotalDeposit(amount);
    }
  }

  useEffect(() => {
    getDepositAmount()
  })

  return { totalDeposit }
}

export default useContractInfo;