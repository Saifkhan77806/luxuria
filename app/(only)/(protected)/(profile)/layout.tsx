import ProfileCont from '@/components/blocks/profile/ProfileCont'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='ml-4 max-sm:flex-col max-[800]:flex-col flex gap-2 min-h-screen pr-5 w-full'>
        
        <div className='bg-gray-400 rounded-md w-[30%] max-[800px]:w-full h-[500] max-[800]:h-[400] max-[800]:static max-sm:top-5 fixed right-2'>
        <ProfileCont />
        </div>
        <div className='bg-gray-400 rounded-md min-h-screen w-[60%] max-[800px]:w-full h-[300]'>
        {children}
        </div>
    </div>
  )
}

export default layout