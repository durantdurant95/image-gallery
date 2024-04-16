import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/bafea2fa-3073-4f34-94f0-c642d1a4a960-tcjfko.jpg",
    "https://utfs.io/f/67ac8133-e37f-48f1-9628-406383bd456a-o6jcr9.jpg",
    "https://utfs.io/f/3c55db43-1ffe-4411-ae29-89a3564795df-of8bho.jpg",
    "https://utfs.io/f/81339ae7-7851-4f83-aa84-629929262e91-5kvpfo.jpg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index,
    url,
  }));

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="relative h-24 w-48">
            <Image src={image.url} alt="" fill />
          </div>
        ))}
      </div>
    </main>
  );
}
