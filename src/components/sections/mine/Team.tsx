interface Props {
  text: string,
  description: string,
}

const TeamItem = ({ text, description }: Props) => (
  <div className="flex flex-col gap-3 items-center justify-center">
    <div className="text-white font-normal">
      {text}
    </div>
    <div className="text-indigo-300">
      {description}
    </div>
  </div>
)

const Team = () => {
  return (
    <div className="p-7 my-5 rounded-xl bg-[#212244]">
      <div className="text-white text-lg">
        My team
      </div>
      <div className="bg-[#2c2c53] p-3 flex flex-row justify-between rounded-xl mt-5">
        <TeamItem text='0' description="People" />
        <TeamItem text='0.00' description='Team Earning' />
      </div>
      <div className="bg-indigo-600 text-white text-center rounded-xl w-full py-2 mt-5 cursor-pointer">
        Withdraw
      </div>
    </div>
  )
}

export default Team;