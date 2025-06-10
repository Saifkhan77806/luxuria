// app/auth/callback/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@clerk/nextjs';

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

      // OPTIONAL: save to your DB

      router.push('/dashboard');
    }
  }, [isLoaded, session, router]);

  return <div className="text-center py-10">Processing authentication...</div>;
}
