import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";
export default async function FullPageImageView(props: { id: number }) {
  // Get the image data from the server
  const image = await getImage(props.id);

  // Call Clerk to get the user's info
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full items-center gap-8 p-4">
      <img src={image.url} alt={image.name} className="w-2/3 object-contain" />
      <div className="flex w-1/3 flex-col gap-4">
        <p>{image.name}</p>
        <p>Uploaded by: {uploaderInfo.fullName}</p>
        <p>Created on: {new Date(image.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
