
const Invite = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mx-64 mt-5">
        <div className="rounded-2xl flex flex-row gap-10 py-5 pl-5 pr-16 items-center bg-gradient-to-r from-pink-700 via-pink-500 to-purple-500 cursor-pointer">
          <div className="rounded-full bg-gradient-to-tl from-gray-500 via-gray-300 to-gray-700">
            <div className="m-3 w-16 h-16 bg-gradient-to-r from-pink-700 via-pink-500 to-pink-700 rounded-full"></div>
          </div>
          <div className="uppercase text-white text-4xl font-bold">
            <div>Invite</div>
            <div>Friends</div>
          </div>
        </div>
        <div className="uppercase text-5xl text-white font-extrabold">earn commissions</div>
      </div>
    </>
  )
}

export default Invite;