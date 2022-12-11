import Description from './descriptions'
import Deposit from './deposit'
import Balance from './Balance'
import Withdraw from './Withdraw'
import Header from './Header'
import Team from './Team';
import Loan from './Loan'
import NFT from './NFT';
import Contact from './contact'

import useBalance from '../hooks/useBalance'

const Main = () => {
  const { walletBalance, getBalance } = useBalance();
  return (
    <>
      <Header/>
      <Deposit walletBalance = {walletBalance} getBalance={getBalance} />
      <Description />
      <Balance walletBalance = {walletBalance} /> 
      <Withdraw />
      <Team />
      <Loan />
      <NFT />
      <Contact />
    </>
  )
}

export default Main