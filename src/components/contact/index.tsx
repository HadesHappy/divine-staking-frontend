import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className="mx-64 mt-32">
      <div className="flex flex-row justify-between">
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-60 rounded-xl my-5 cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
          Audit
        </div>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-60 rounded-xl my-5 cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
          Contract
        </div>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 w-60 rounded-xl my-5 cursor-pointer text-3xl text-gray-800 hover:text-white font-bold text-center'>
          About
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white text-xl">
          www.divine.grace
        </div>
        <div className='flex flex-row gap-5 py-5'>
          <FaFacebookF className='w-5 h-5 text-white'/>
          <FaTwitter className='w-5 h-5 text-white' />
          <FaInstagram className='w-5 h-5 text-white' />
        </div>
      </div>
    </div>
  )
}

export default Contact;