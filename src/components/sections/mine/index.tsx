
import Address from "./Address";
import Invite from "./Invite";
import Withdraw from './Withdraw';
import MyEarning from "./MyEarning";
import Team from './Team';

const Mine = () => {
  return (
    <div className="bg-[#161730] pb-20">
      {/* <Address /> */}
      <Withdraw />
      <MyEarning />
      <Invite />
      <Team />
    </div>

  )
}

export default Mine;