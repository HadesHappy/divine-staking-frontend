import FooterItem from "./FooterItem";
import {
  BsFillHouseDoorFill,
  BsHouseDoor,
  BsPlusSquareFill,
  BsPlusSquare,
  BsGeoFill,
  BsGeo,
  BsSave2Fill,
  BsSave2,
  BsPeopleFill,
  BsPeople
} from 'react-icons/bs';

interface Props {
  index: number,
  setIndex: (value: number) => void,
}

const Footer = ({ index, setIndex }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-screen bg-[#212244] rounded-t-3xl">
      <div className="flex flex-row px-7 py-3 justify-between items-center">
        <FooterItem text='Home' id={0} icon1={<BsHouseDoor className="text-white h-5 w-5" />} icon2={<BsFillHouseDoorFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
        <FooterItem text='Deposit' id={1} icon1={<BsSave2 className="text-white h-5 w-5" />} icon2={<BsSave2Fill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
        <FooterItem text='NFT' id={2} icon1={<BsGeo className="text-white h-5 w-5" />} icon2={<BsGeoFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
        <FooterItem text='Mine' id={3} icon1={<BsPlusSquare className="text-white h-5 w-5" />} icon2={<BsPlusSquareFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
        <FooterItem text='Team' id={4} icon1={<BsPeople className="text-white h-5 w-5" />} icon2={<BsPeopleFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
      </div>
    </div>
  )
}
export default Footer;

