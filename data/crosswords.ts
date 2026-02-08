export interface CrosswordData {
  id: string;
  title: string;
  difficulty: string;
  date: string;
  across: Record<string, { clue: string; answer: string; row: number; col: number }>;
  down: Record<string, { clue: string; answer: string; row: number; col: number }>;
}

export const crosswords: CrosswordData[] = [
  {
    id: "simple-puzzle",
    title: "Simple Sunday",
    difficulty: "Easy",
    date: "2024-01-15",
    across: {
      "1": {
        clue: "Opposite of down",
        answer: "UP",
        row: 0,
        col: 0,
      },
      "3": {
        clue: "Feline pet",
        answer: "CAT",
        row: 1,
        col: 0,
      },
      "4": {
        clue: "Take a seat",
        answer: "SIT",
        row: 2,
        col: 0,
      },
    },
    down: {
      "1": {
        clue: "Not in",
        answer: "OUT",
        row: 0,
        col: 0,
      },
      "2": {
        clue: "Consumed food",
        answer: "ATE",
        row: 0,
        col: 1,
      },
    },
  },
  {
    id: "weekend-challenge",
    title: "Weekend Challenge",
    difficulty: "Medium",
    date: "2024-01-22",
    across: {
      "1": {
        clue: "Large body of water",
        answer: "OCEAN",
        row: 0,
        col: 0,
      },
      "6": {
        clue: "Opposite of yes",
        answer: "NO",
        row: 1,
        col: 0,
      },
      "7": {
        clue: "Female deer",
        answer: "DOE",
        row: 1,
        col: 3,
      },
      "8": {
        clue: "Actress Thurman",
        answer: "UMA",
        row: 2,
        col: 0,
      },
      "9": {
        clue: "Tiny bit",
        answer: "TAD",
        row: 2,
        col: 4,
      },
    },
    down: {
      "1": {
        clue: "Single unit",
        answer: "ONE",
        row: 0,
        col: 0,
      },
      "2": {
        clue: "Forbidden",
        answer: "TABU",
        row: 0,
        col: 1,
      },
      "3": {
        clue: "Make amends",
        answer: "ATONE",
        row: 0,
        col: 2,
      },
      "4": {
        clue: "Bread spread",
        answer: "JAM",
        row: 0,
        col: 3,
      },
      "5": {
        clue: "Opposite of off",
        answer: "ON",
        row: 0,
        col: 4,
      },
    },
  },
  {
    id: "daily-brain-teaser",
    title: "Daily Brain Teaser",
    difficulty: "Hard",
    date: "2024-02-01",
    across: {
      "1": {
        clue: "Express gratitude",
        answer: "THANK",
        row: 0,
        col: 0,
      },
      "6": {
        clue: "Compete",
        answer: "VIE",
        row: 1,
        col: 0,
      },
      "7": {
        clue: "Poker stake",
        answer: "ANTE",
        row: 1,
        col: 4,
      },
      "8": {
        clue: "Skilled",
        answer: "ADEPT",
        row: 2,
        col: 0,
      },
    },
    down: {
      "1": {
        clue: "Piece of chicken",
        answer: "THIGH",
        row: 0,
        col: 0,
      },
      "2": {
        clue: "Annoy",
        answer: "IRK",
        row: 0,
        col: 1,
      },
      "3": {
        clue: "Greek letter",
        answer: "ETA",
        row: 0,
        col: 2,
      },
      "4": {
        clue: "Positive response",
        answer: "NAH",
        row: 0,
        col: 3,
      },
      "5": {
        clue: "Conclude",
        answer: "END",
        row: 0,
        col: 4,
      },
    },
  },
];
