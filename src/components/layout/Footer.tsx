import FooterItem from "./FooterItem";
import { 
  BsFillHouseDoorFill,
  BsPlusSquareFill,
} from 'react-icons/bs';
import {
  SiCashapp,
  SiCodeproject,
} from 'react-icons/si';

const Footer = () => {
  return(
    <div className="fixed bottom-0 left-0 w-screen bg-[#212244] rounded-t-3xl">
      <div className="flex flex-row px-7 py-3 justify-between items-center">
        <FooterItem text='Home' icon={<BsFillHouseDoorFill className="text-white h-5 w-5" />} />
        <FooterItem text='Divine' icon={<SiCashapp className="text-white h-5 w-5" />} />
        <FooterItem text='NFT' icon={<SiCodeproject className="text-white h-5 w-5" />} />
        <FooterItem text='Withdraw' icon={< BsPlusSquareFill className="text-white h-5 w-5" />} />
      </div>
    </div>
    
  )
}
export default Footer;

