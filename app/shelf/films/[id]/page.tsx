import { notFound } from "next/navigation";
import { movies } from "@/data/movies";
import DetailLayout from "@/components/DetailLayout";

export function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id,
  }));
}

export default function FilmDetailPage({ params }: { params: { id: string } }) {
  const movie = movies.find((m) => m.id === params.id);

  if (!movie) {
    notFound();
  }

  return (
    <DetailLayout
      title={movie.title}
      subtitle={`${movie.year} · Directed by ${movie.director}`}
      content={movie.review}
      metaInfo={
        <>
          <div>
            Rating: {"★".repeat(movie.rating)}
            {"☆".repeat(5 - movie.rating)}
          </div>
          <span>•</span>
          <div>
            Watched{" "}
            {new Date(movie.dateWatched).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </>
      }
      previewContent={
        <div className="text-center p-8">
          <div className="text-lg font-light mb-2">{movie.title}</div>
          <div className="text-sm opacity-60">{movie.year}</div>
        </div>
      }
    />
  );
}
