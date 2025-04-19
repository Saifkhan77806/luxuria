import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProfileCont = () => {
  return (
    <div className='flex flex-col gap-2 items-center p-4'>
      <div className='w-32 h-32 rounded-full bg-gray-300'>
        <img src='https://github.com/shadcn.png' alt='profile' width={128} height={128} className='rounded-full' />
      </div>
      <p className='font-bold text-xl'>saif khan</p>
      <p>saifkhan@luxuria.com</p>
      <Button className='bg-purple-600 hover:bg-purple-700 w-full'>Edit profile</Button>
      <Button className='bg-purple-600 hover:bg-purple-700  w-full'>Create group</Button>
      <Button className='bg-purple-600 hover:bg-purple-700 w-full'>Change password</Button>

    </div>
  )
}

export default ProfileCont