import { notFound } from "next/navigation";
import { songs } from "@/data/songs";
import DetailLayout from "@/components/DetailLayout";

export function generateStaticParams() {
  return songs.map((song) => ({
    id: song.id,
  }));
}

export default function SongDetailPage({ params }: { params: { id: string } }) {
  const song = songs.find((s) => s.id === params.id);

  if (!song) {
    notFound();
  }

  const subtitle = song.album ? `${song.artist} · from ${song.album}` : song.artist;

  return (
    <DetailLayout
      title={song.title}
      subtitle={subtitle}
      content={song.review}
      aspectRatio="square"
      metaInfo={
        <>
          <div>
            Rating: {"★".repeat(song.rating)}
            {"☆".repeat(5 - song.rating)}
          </div>
          <span>•</span>
          <div>
            Added{" "}
            {new Date(song.dateAdded).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </>
      }
      previewContent={
        <div className="text-center p-8">
          <div className="text-lg font-light mb-2">{song.title}</div>
          <div className="text-sm opacity-60">{song.artist}</div>
          {song.album && (
            <div className="text-xs opacity-40 mt-2">{song.album}</div>
          )}
        </div>
      }
    />
  );
}
