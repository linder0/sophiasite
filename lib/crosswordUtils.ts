import { CrosswordData } from "@/data/crosswords";

// Transform our crossword data format to @guardian/react-crossword format
export function transformCrosswordData(data: CrosswordData) {
  const entries = [];

  // Transform across clues
  for (const [number, clueData] of Object.entries(data.across)) {
    entries.push({
      id: `${number}-across`,
      number: parseInt(number),
      humanNumber: number,
      clue: clueData.clue,
      direction: "across",
      length: clueData.answer.length,
      group: [`${number}-across`],
      position: { x: clueData.col, y: clueData.row },
      separatorLocations: {},
      solution: clueData.answer,
    });
  }

  // Transform down clues
  for (const [number, clueData] of Object.entries(data.down)) {
    entries.push({
      id: `${number}-down`,
      number: parseInt(number),
      humanNumber: number,
      clue: clueData.clue,
      direction: "down",
      length: clueData.answer.length,
      group: [`${number}-down`],
      position: { x: clueData.col, y: clueData.row },
      separatorLocations: {},
      solution: clueData.answer,
    });
  }

  // Calculate grid dimensions
  let maxRows = 0;
  let maxCols = 0;

  entries.forEach((entry) => {
    if (entry.direction === "across") {
      maxRows = Math.max(maxRows, entry.position.y + 1);
      maxCols = Math.max(maxCols, entry.position.x + entry.length);
    } else {
      maxCols = Math.max(maxCols, entry.position.x + 1);
      maxRows = Math.max(maxRows, entry.position.y + entry.length);
    }
  });

  return {
    id: data.id,
    number: 0,
    name: data.title,
    date: new Date(data.date).getTime(),
    entries,
    solutionAvailable: true,
    dateSolutionAvailable: new Date(data.date).getTime(),
    dimensions: {
      cols: maxCols,
      rows: maxRows,
    },
    crosswordType: "quick",
  };
}
