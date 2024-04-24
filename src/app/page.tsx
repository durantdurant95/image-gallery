import { SignedIn, SignedOut } from "@clerk/nextjs";
import "@uploadthing/react/styles.css";
import Images from "./_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="p-4">
      <SignedOut>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sign in to view images</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}
