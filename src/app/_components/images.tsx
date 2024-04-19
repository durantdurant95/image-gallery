import Image from "next/image";
import { getImages } from "~/server/queries";

export default async function Images() {
  const images = await getImages();
  return (
    <div className="flex flex-wrap justify-center gap-8 px-8">
      {images.map((image) => (
        <div key={image.id}>
          <div className="relative h-40 w-80">
            <Image src={image.url} alt={image.name} fill />
          </div>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
