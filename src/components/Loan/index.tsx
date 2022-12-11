import Divider from "../descriptions/Devider";
import Application from "./Application";
import Repayment from "./Repayment";

const Loan = () => {
  return(
    <div className="mt-10">
      <Divider />
      <Application />
      <Repayment /> 
    </div>
  )
}

export default Loan;