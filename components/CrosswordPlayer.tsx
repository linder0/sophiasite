"use client";

import { Crossword } from "@guardian/react-crossword";

interface CrosswordPlayerProps {
  data: any;
}

export default function CrosswordPlayer({ data }: CrosswordPlayerProps) {
  return (
    <div className="crossword-container">
      <Crossword data={data} />
    </div>
  );
}
