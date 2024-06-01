import {SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
            <div>:shrug:</div>
    
            <div className="flex flex-row items-center gap-4">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
      </nav>
    );
  }