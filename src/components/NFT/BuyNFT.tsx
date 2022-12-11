const BuyNFT = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-80'>
      <div className="z-10">
        <div className="text-[100px] text-pink-600 uppercase font-bold text-center">Divine</div>
        <div className="text-[100px] text-pink-600 uppercase font-bold text-center -mt-16">pep nft</div>
      </div>
      <div className='-mt-32 w-[500px] h-[500px] flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-purple-500 to-slate-300 rounded-full'>
        <div className='uppercase text-center text-6xl text-white rounded-full px-16 py-10 bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 cursor-pointer'>
          buy nft
        </div>
      </div>
    </div>
  )
}

export default BuyNFT;