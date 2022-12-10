import Card from './Card'
import texts from '../../utils/texts'

const PlatformDescription = () => {
  return (
    <div className='px-10'>
      <div className='text-white font-bold text-4xl text-center mb-5'>Why use <span className='text-purple-500'>Divine</span> platform?</div>
      <div className='flex flex-row gap-10 justify-center'>
        {
          texts.map((text, index) =>
            <Card title={text.title} content={text.content} key={index} />)
        }
      </div>
    </div>
  )
}

export default PlatformDescription;