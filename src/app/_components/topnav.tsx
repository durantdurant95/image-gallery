import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-b-slate-700 p-4 text-xl font-semibold text-white ">
      <p>Gallery</p>

      <div>
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
