import { contractAddress } from "../utils/constants"

const Earning = () => {
  return (
    <div>
      <div className="flex flex-row gap-20 items-center justify-center text-center mt-7">
        <div className="text-purple-500 text-4xl">Address:</div>
        <div className="text-white text-3xl pt-3">{contractAddress}</div>
      </div>
      <div className="mx-10 my-5 py-10 bg-[#2d2159] rounded-xl">
        <div className="flex flex-row px-10 justify-between">
          <div>
            <div className="uppercase text-white text-3xl">daily</div>
            <div className="uppercase text-white text-3xl">Earning</div>
            <div className="text-4xl text-purple-500 pt-10">1%</div>
          </div>
          <div>
            <div className="uppercase text-white text-3xl">holders</div>
            <div className="uppercase text-white text-3xl">bonus</div>
            <div className="text-4xl text-purple-500 pt-10">1.5%</div>
          </div>
          <div>
            <div className="uppercase text-white text-3xl">leaders</div>
            <div className="uppercase text-white text-3xl">bonus</div>
            <div className="text-4xl text-purple-500 pt-10">1%</div>
          </div>
          <div>
            <div className="uppercase text-white text-3xl">nft Bonus</div>
            <div className="uppercase text-purple-500 text-2xl tracking-widest pt-2">Active</div>
            <div className="text-3xl text-purple-500 pt-10">1%</div>
          </div>
          <div>
            <div className="uppercase text-white text-3xl">milestone</div>
            <div className="uppercase text-white text-3xl">share</div>
            <div className="uppercase text-2xl text-purple-500 pt-12 tracking-widest">active</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Earning