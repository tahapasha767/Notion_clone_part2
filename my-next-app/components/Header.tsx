"use client";
import React, { use } from 'react';
import { useUser, SignInButton, UserButton } from '@clerk/clerk-react';
import { UserProfile } from '@clerk/nextjs'

function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return null; // wait until Clerk loads user data

  return (
    <div className="w-full flex items-center justify-between p-6 pb-4">
      {isSignedIn ? (
        <>
        {console.log(user)}
          <div className="font-semibold">{user.lastName || "Taha"}'s Space</div>
          {/* <div>Home</div> */}
          <UserButton/>
          
        </>
      ) : (
        <SignInButton/>
      )}
    </div>
  );
}

export default Header;
