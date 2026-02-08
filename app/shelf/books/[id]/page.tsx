import { notFound } from "next/navigation";
import { books } from "@/data/books";
import DetailLayout from "@/components/DetailLayout";

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    notFound();
  }

  return (
    <DetailLayout
      title={book.title}
      subtitle={book.author}
      content={book.review}
      metaInfo={
        <>
          <div>
            Rating: {"★".repeat(book.rating)}
            {"☆".repeat(5 - book.rating)}
          </div>
          <span>•</span>
          <div>
            Read{" "}
            {new Date(book.dateRead).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </div>
        </>
      }
    />
  );
}
