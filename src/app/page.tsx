import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative h-24 w-48">
            <Image src={image.url} alt="" fill />
          </div>
        ))}
      </div>
    </main>
  );
}
