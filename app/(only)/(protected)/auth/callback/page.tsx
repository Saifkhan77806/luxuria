// app/auth/callback/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@clerk/nextjs';
import { toast } from 'sonner';


export default function AuthCallback() {
  const { isLoaded, session } = useSession();
  const router = useRouter();


  useEffect(() => {
    console.log('Session:', session);
    if (isLoaded && session) {

      const provider = session?.user?.externalAccounts?.[0]?.provider;
      const profileUrl = session?.user?.externalAccounts?.[0]?.imageUrl;
      const email = session?.user?.emailAddresses?.[0]?.emailAddress;

      console.log('Provider:', provider);
      console.log('Profile URL:', profileUrl);
      console.log('Email:', email);
      console.log('Session:', session);

      // OPTIONAL: save to your DB

      fetch('/api/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, profileUrl }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log('User created');
          router.push('/dashboard')
        }})
      

    }else{
      console.log('Session not loaded or user not authenticated');
      toast("User is not authenticated or user is already registered")
      // Optionally redirect to a sign-in page or show an error
      router.push('/register');
    }
  }, [isLoaded, session, router]);

  return <div className="text-center py-10">Processing authentication...</div>;
}
