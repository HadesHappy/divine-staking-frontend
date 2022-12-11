const Repayment = () => {
  return(
    <div className="mx-64 mt-10">
      <div className="text-4xl text-purple-500">Loan Repayment:</div>
      <div className="bg-[#2d2159] p-10 rounded-xl mt-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-14 items-center">
            <div className="uppercase font-bold text-white text-4xl">loan balance:</div>
            <div className="bg-purple-500 py-5 w-[450px] text-4xl text-white uppercase px-32">500</div>
          </div>
          <div className="flex flex-row gap-28 items-center">
            <div className="uppercase font-bold text-white text-4xl">repay loan:</div>
            <div className="bg-purple-500 py-5 w-[450px] text-white text-4xl px-32">0</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-5">
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-60 rounded-xl cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
            Process
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repayment;