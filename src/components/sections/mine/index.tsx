
import Wallet from "../common/Wallet";
import Withdraw from './Withdraw';
import MyEarning from "./MyEarning";

const Mine = () => {
  return (
    <div className="bg-[#161730] min-h-screen pb-20">
      <Wallet />
      <Withdraw />
      <MyEarning />
    </div>

  )
}

export default Mine;