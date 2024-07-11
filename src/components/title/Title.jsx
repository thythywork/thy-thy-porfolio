import React from 'react'

const Title = ({title}) => {
  return (
    <div className='p-4 text-[#D0D4FE] text-center grid grid-cols-8 move-bottom-to-top'>
      <h1 className='md:text-[3em] text-3xl col-start-1 col-span-2 font-bold'>{title}</h1>
      <div className='border-b-2 border-[#D0D4FE] col-end-8 col-span-5 self-center'></div>
    </div>
  )
}

export default Title
