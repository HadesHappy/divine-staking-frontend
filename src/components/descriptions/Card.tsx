const Card = ({title = '', content = ''}) => {
  return(
    <div className="w-[400px] text-center">
      <div className="uppercase text-2xl font-bold text-white">{title}</div>
      <div className="text-normal text-white my-5">{content}</div>
    </div>
  )
}

export default Card