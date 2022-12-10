const Divider = () => {
  return (
    <div className='flex flex-row items-center gap-3 px-10 py-5'>
      <div className='border-t w-full rounded-xl'></div>
      <img className='w-7 h-7' src='/assets/images/matic.svg' alt='matic' />
      <div className='border-t w-full'></div>
    </div>
  )
}

export default Divider;