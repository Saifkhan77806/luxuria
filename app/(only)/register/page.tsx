// app/register/page.tsx
'use client';

import { useSignUp } from '@clerk/nextjs';
import { toast } from 'sonner';

export default function RegisterPage() {
  const { isLoaded, signUp } = useSignUp();
  // const SignIn = useSignIn();

  // ...existing code...
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
    // Handle error (e.g., show a toast notification)
    toast.error('Social registration failed. Please try again.');
  }
};



  return (
    <div className="max-w-md mx-auto py-10 px-4 text-center">
      <h1 className="text-2xl mb-6">Register with Social</h1>

      <button
        onClick={() => handleSocialRegister('oauth_google')}
        className="bg-red-500 text-white px-4 py-2 w-full mb-4"
      >
        Register with Google
      </button>

      <button
        onClick={() => handleSocialRegister('oauth_linkedin')}
        className="bg-blue-700 text-white px-4 py-2 w-full"
      >
        Register with LinkedIn
      </button>
    </div>
  );
}
