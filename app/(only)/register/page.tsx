
'use client';

import { ResgisterForm } from '@/components/regsiter-form';
import { useSignUp } from '@clerk/nextjs';
import { GalleryVerticalEnd } from 'lucide-react';
import { toast } from 'sonner';

export default function RegisterPage() {
  const { isLoaded, signUp } = useSignUp();
 
  const handleSocialRegister = async (provider: 'oauth_google' | 'oauth_linkedin') => {
  if (!isLoaded) return;

  try {
    await signUp.authenticateWithRedirect({
      strategy: provider,
      redirectUrl: '/auth/callback',
      redirectUrlComplete: '/dashboard',
    });
  } catch (error) {
    console.error('Error during social registration:', error);
    toast.error('Social registration failed. Please try again.');
  }
};


{/* google sign up button  */}
      // <button
      //   onClick={() => handleSocialRegister('oauth_google')}
      //   className="bg-red-500 text-white px-4 py-2 w-full mb-4"
      // >
      //   Register with Google
      // </button>

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Luxuria AI.
        </a>
        <ResgisterForm />
      </div>
    </div>
  )
}
