interface Props {
  text: string,
  description: string,
}

const TeamItem = ({ text, description }: Props) => (
  <div className="flex flex-col gap-3 items-center justify-center">
    <div className="text-white font-normal">
      {text}
    </div>
    <div className="text-purple-400">
      {description}
    </div>
  </div>
)

const TeamInfo = () => {
  return (
    <div className="p-7 my-5 rounded-3xl bg-[#2d2159]">
      <div className="text-white text-base">
        My team
      </div>
      <div className="bg-[#3d3d69] p-3 flex flex-row justify-between rounded-xl mt-5">
        <TeamItem text='0' description="People" />
        <TeamItem text='0.00' description='Team Earning' />
      </div>
      <div className="bg-purple-500 text-white text-center rounded-xl w-full py-2 mt-5 cursor-pointer">
        Withdraw
      </div>
    </div>
  )
}

export default TeamInfo;