export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  dateRead: string;
  review: string;
}

export const books: Book[] = [
  {
    id: "the-crossword-century",
    title: "The Crossword Century",
    author: "Alan Connor",
    cover: "/images/books/crossword-century.jpg",
    rating: 5,
    dateRead: "2024-01-10",
    review: `
A fascinating history of the crossword puzzle, from its invention in 1913 to its current status as a cultural institution. Connor explores how crosswords evolved, the constructors who shaped them, and their impact on language and culture.

What I loved most was learning about the early days of crosswords, when they were considered a dangerous fad that would rot people's brains. Now they're recommended by neurologists! The book is filled with clever wordplay and interesting puzzles woven into the narrative.

Essential reading for anyone serious about crosswords. It deepened my appreciation for the craft and inspired several puzzle ideas.
    `,
  },
  {
    id: "if-beale-street-could-talk",
    title: "If Beale Street Could Talk",
    author: "James Baldwin",
    cover: "/images/books/beale-street.jpg",
    rating: 5,
    dateRead: "2023-12-15",
    review: `
Baldwin's prose is devastating in its beauty and precision. This story of young love confronting systemic injustice is timeless—written in 1974, it feels urgently contemporary.

The language is what captivates me most. Baldwin wields words like a sculptor works clay, shaping them into something that transcends mere communication. Every sentence carries weight; every paragraph builds toward emotional truth.

I found myself underlining passages, not just for their meaning but for their construction. As someone who works with words daily, Baldwin reminds me what mastery looks like. This novel is a masterclass in voice, rhythm, and the power of precise language to convey the deepest human experiences.

A book I'll return to again and again.
    `,
  },
  {
    id: "word-freak",
    title: "Word Freak",
    author: "Stefan Fatsis",
    cover: "/images/books/word-freak.jpg",
    rating: 4,
    dateRead: "2023-11-28",
    review: `
An immersive journey into the competitive Scrabble world. Fatsis, a journalist, becomes obsessed with the game and documents his transformation from casual player to tournament competitor.

The dedication these players show to memorizing words—not for meaning, but for letter combinations—is both admirable and slightly absurd. Yet Fatsis makes you understand the appeal: the elegance of a perfect play, the thrill of drawing the right tiles, the meditative focus required at high levels.

While Scrabble and crosswords are different beasts, they share DNA. Both celebrate vocabulary, pattern recognition, and strategic thinking. Reading this made me reflect on my own relationship with words and games.

A fun, well-written exploration of obsession, competition, and the strange corners of language culture.
    `,
  },
  {
    id: "the-sense-of-style",
    title: "The Sense of Style",
    author: "Steven Pinker",
    cover: "/images/books/sense-of-style.jpg",
    rating: 4,
    dateRead: "2023-10-20",
    review: `
Pinker's guide to writing in the 21st century is intelligent, practical, and occasionally hilarious. He dismantles prescriptivist nonsense while offering genuine insights into what makes prose clear and engaging.

The section on "the curse of knowledge"—where experts forget what it's like not to know something—resonated deeply. As a crossword constructor, I constantly fight this curse. What seems obvious to me might be impenetrable to solvers.

His advice applies beyond prose writing. Crossword clues are miniature exercises in clear communication. They must be precise, fair, and accessible while still being clever. Pinker's emphasis on empathy with readers (or solvers) is something I try to practice with every puzzle.

Not all style guides are created equal, but this one earns its place on the shelf.
    `,
  },
];
