'use client';
import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <ClerkProvider>
        {children}
        <Toaster />
      </ClerkProvider>
    </div>
  )
}

export default layout