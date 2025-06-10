// app/dashboard/page.tsx
'use client';

import { useUser, SignOutButton } from '@clerk/nextjs';

export default function DashboardPage() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  const profileUrl = user?.externalAccounts?.[0]?.imageUrl;
  console.log("profile url", user);
  const email = user?.emailAddresses?.[0]?.emailAddress;

  return (
    <div className="max-w-md mx-auto py-10 px-4 text-center">
      <h1 className="text-2xl mb-4">Welcome, {user?.firstName}</h1>
      <p>Email: {email}</p>
      {profileUrl && (
        <p>
          Profile URL: <a href={profileUrl} className="text-blue-500 underline">{profileUrl}</a>
        </p>
      )}
      <SignOutButton redirectUrl='/register'>
        <button className="bg-gray-500 text-white px-4 py-2 mt-4">Sign Out</button>
      </SignOutButton>
    </div>
  );
}
