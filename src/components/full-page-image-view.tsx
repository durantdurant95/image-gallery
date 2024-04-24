import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image src={image.url} alt={image.name} width={800} height={480} />
    </div>
  );
}
