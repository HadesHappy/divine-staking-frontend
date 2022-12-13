import Images from '../common/Images'
import Participate from './Participate';
import Address from './Address';
import Description from './Description';
import Balance from './Balance';
import PoolInfo from './PoolInfo';

const Home = () => {
  return (
    <div className='bg-[#101728] min-h-screen mb-14'>
      <div className='px-7 rounded-b-3xl bg-[#212244]'>
        <Images />
        <Participate />
        <Address />
        <Description />
        <Balance />
      </div>
      <PoolInfo />
    </div>
    
  )
}

export default Home;