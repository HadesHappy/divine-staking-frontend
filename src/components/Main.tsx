import Description from './descriptions'
import Deposit from './deposit'
import Balance from './Balance'
import Withdraw from './Withdraw'
import Header from './Header'

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
    </>
  )
}

export default Main