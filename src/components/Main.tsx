import Description from './descriptions'
import Deposit from './deposit'
import Balance from './Balance'
import Withdraw from './Withdraw'
import Header from './Header'

const Main = () => {
  return (
    <>
      <Header/>
      <Deposit/>
      <Description />
      <Balance /> 
      <Withdraw />
    </>
  )
}

export default Main