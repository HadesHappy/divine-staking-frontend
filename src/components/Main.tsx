import Description from './Description'
import Divider from './Devider'
import Deposit from './Deposit'
import Earning from './Earning'
import Balance from './Balance'
import Withdraw from './Withdraw'

const Main = () => {
  return (
    <>
      <Deposit />
      <Divider />      
      <Description />
      <Divider />
      <Earning />
      <Balance /> 
      <Withdraw />
    </>
  )
}

export default Main