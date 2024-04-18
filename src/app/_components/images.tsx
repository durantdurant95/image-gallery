import Image from "next/image";
import { db } from "~/server/db";

export default async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
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
