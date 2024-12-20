import React from 'react'

const card = ({children, style}: {children: React.ReactNode, style?: React.CSSProperties}) => {
  return (
    <div className='flex flex-col gap-2 p-6 rounded-[20px] border border-[#DCDFE4] ' style={style}>
        {children}
    </div>
  )
}

export default card