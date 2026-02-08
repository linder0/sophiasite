import { notFound } from "next/navigation";
import { crosswords } from "@/data/crosswords";
import CrosswordPlayer from "@/components/CrosswordPlayer";
import { transformCrosswordData } from "@/lib/crosswordUtils";

export function generateStaticParams() {
  return crosswords.map((crossword) => ({
    id: crossword.id,
  }));
}

export default function CrosswordPage({ params }: { params: { id: string } }) {
  const crossword = crosswords.find((c) => c.id === params.id);

  if (!crossword) {
    notFound();
  }

  const guardianData = transformCrosswordData(crossword);

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-light mb-4">{crossword.title}</h1>
        <div className="flex gap-4 text-sm opacity-60">
          <span>{crossword.difficulty}</span>
          <span>•</span>
          <span>{new Date(crossword.date).toLocaleDateString()}</span>
        </div>
      </div>

      <CrosswordPlayer data={guardianData} />
    </div>
  );
}
