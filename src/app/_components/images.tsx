import Image from "next/image";
import { getImages } from "~/server/queries";

export default async function Images() {
  const images = await getImages();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative h-24 w-48">
          <Image src={image.url} alt="" fill />
        </div>
      ))}
    </div>
  );
}
