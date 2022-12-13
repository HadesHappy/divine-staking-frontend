import React from 'react'

interface Props {
  id: number,
  text: string,
  icon1: JSX.Element,
  icon2: JSX.Element,
  index: number,
  setIndex: (value: number) => void
}

const FooterItem = ({ id, icon1, icon2, text, index, setIndex }: Props) => {
  const onClick = () => {
    setIndex(id);
  }
  return (
    <div className="flex flex-col gap-2 items-center justify-center cursor-pointer" onClick={onClick}>
      <div className="flex flex-row items-center justify-center w-9 h-9 rounded-xl bg-purple-500">
        {
          id === index ?
            icon2
            :
            icon1
        }
      </div>
      <div className="text-center font-normal text-white">
        {text}
      </div>
    </div>
  )
}

export default FooterItem