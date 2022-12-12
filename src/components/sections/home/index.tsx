import Images from '../common/Images'
import Participate from './Participate';
import Address from './Address';
import Description from './Description';
import Balance from './Balance';
import PoolInfo from './PoolInfo';

const Home = () => {
  return (
    <div className='bg-[#161730] min-h-screen mb-10'>
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