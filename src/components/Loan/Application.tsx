const Application = () => {
  return (
    <div className="mx-64">
      <div className="text-4xl text-purple-500">Loan Application:</div>
      <div className="bg-[#2d2159] p-10 rounded-xl mt-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-16 items-center">
            <div className="uppercase font-bold text-white text-4xl">loan status:</div>
            <div className="bg-purple-500 py-5 w-[450px] text-4xl text-purple-400 uppercase px-32">available</div>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <div className="uppercase font-bold text-white text-4xl">loan amount:</div>
            <div className="bg-purple-500 w-[450px]">
              <div className="flex flex-row items-center gap-16 bg-purple-500 rounded-md px-32">
                <div className="text-white text-4xl py-5">1000</div>
                <img className='w-8 h-8' src='/assets/images/matic.svg' alt='matic' />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-32 items-center">
            <div className="uppercase font-bold text-white text-4xl">get loan:</div>
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

export default Application;