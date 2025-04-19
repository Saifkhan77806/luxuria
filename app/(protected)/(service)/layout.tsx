import { SlideShow } from '@/components/blocks/service/SlideShow'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='text-white flex flex-col items-center pl-2 min-h-screen'>
        <div className='w-full flex flex-col '>
        {children}
        </div>
        <div className='w-[70%]'>
          <h1 className='text-center text-xl font-semibold my-3'>Recents generations</h1>
        <SlideShow />
        </div>
        </div>
  )
}

export default layout