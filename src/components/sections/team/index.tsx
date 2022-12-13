import Invite from './Invite';
import TeamInfo from './TeamInfo';
import Share from './Share';

const Team = () => {
  return(
    <div className='bg-[#101728] min-h-screen pb-24'>
      <Invite />
      <TeamInfo />
      <Share />
    </div>
  )
}

export default Team;