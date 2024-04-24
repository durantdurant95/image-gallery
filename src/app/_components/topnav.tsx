"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
import { ModeToggle } from "./theme-toggler";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between border-b border-b-slate-700 p-4 text-xl font-semibold">
      <Link href="/">Gallery</Link>
      <div className="flex items-center justify-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
        <ModeToggle />
      </div>
    </nav>
  );
}
