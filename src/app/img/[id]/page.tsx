import FullPageImageView from "~/components/full-page-image-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid photo ID");
  return <FullPageImageView id={idAsNumber} />;
}
