import React from 'react'

interface Props {
  text: string,
  icon: JSX.Element,
}

const FooterItem = ({ icon, text }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
      <div className="flex flex-row items-center justify-center w-9 h-9 rounded-xl bg-indigo-500">
        {icon}
      </div>
      <div className="text-center font-normal text-sm text-white">
        {text}
      </div>
    </div>
  )
}

export default FooterItem