import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";
import { ModeToggle } from "./theme-toggler";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-b-slate-700 p-4 text-xl font-semibold">
      <Link href="/">Gallery</Link>
      <div className="flex items-center justify-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </nav>
  );
}
