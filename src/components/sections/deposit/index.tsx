import Wallet from "../common/Wallet";
import Divider from "../../descriptions/Devider";
import Stake from './Stake';
import Application from "./Application";
import Repayment from "./Repayment";

const Deposit = () => {
  return (
    <div className='bg-[#101728] min-h-screen pb-24'>
      <Wallet />
      <Stake />
      <Divider />
      <Application />
      <Repayment />      
    </div>
  )
}

export default Deposit;