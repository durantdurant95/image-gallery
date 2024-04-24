import { getImage } from "~/server/queries";
export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full items-center gap-8 p-4">
      <img src={image.url} alt={image.name} className="w-2/3 object-contain" />
      <div className="flex w-1/3 flex-col gap-4">
        <p>{image.name}</p>
        <p>{image.url}</p>
      </div>
    </div>
  );
}
