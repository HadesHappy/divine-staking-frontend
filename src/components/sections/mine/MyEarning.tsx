interface Props {
  text: string,
  description: string,
}

const EarningItem = ({ text, description }: Props) => (
  <div className="flex flex-col gap-3 items-center justify-center">
    <div className="text-white font-normal">
      {text}
    </div>
    <div className="text-indigo-300">
      {description}
    </div>
  </div>
)

const MyEarning = () => {
  return (
    <div className="p-7 my-5 rounded-xl bg-[#212244]">
      <div className="text-white text-lg">
        My earnings
      </div>
      <div className="bg-[#2c2c53] p-3 flex flex-row justify-between rounded-xl mt-5">
        <EarningItem text='0.00' description="Total Deposit" />
        <EarningItem text='0.00' description='Total Earned'/>
        <EarningItem text='0.00%' description="Percentage" />
      </div>
    </div>
  )
}

export default MyEarning;