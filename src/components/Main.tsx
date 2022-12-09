import {useState, useEffect} from 'react'
import Description from './Description'
import Divider from './Devider'
import Deposit from './Deposit'
import Earning from './Earning'
import Balance from './Balance'
import Withdraw from './Withdraw'
import Header from './Header'

const Main = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<number | null>(null)

  useEffect(() => {
    if ((window as any).ethereum) {
      // check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);

  return (
    <>
      <Header isMetamaskInstalled={isMetamaskInstalled} setIsMetamaskInstalled={setIsMetamaskInstalled} setAccount={setAccount} />
      <Deposit account = {account} />
      <Divider />      
      <Description />
      <Divider />
      <Earning />
      <Balance account = {account} walletBalance={walletBalance} setWalletBalance={setWalletBalance} /> 
      <Withdraw />
    </>
  )
}

export default Main