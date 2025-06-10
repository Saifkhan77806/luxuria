// app/register/page.tsx
'use client';

import { useSignIn, useSignUp } from '@clerk/nextjs';

export default function RegisterPage() {
  const { isLoaded, signUp } = useSignUp();
  const SignIn = useSignIn();

  const handleSocialRegister = async (provider: 'oauth_google' | 'oauth_linkedin') => {
    if (!isLoaded) return;

    await signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: '/auth/callback',
      redirectUrlComplete: '/dashboard',
    });
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
