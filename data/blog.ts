export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-art-of-crossword-construction",
    title: "The Art of Crossword Construction",
    date: "2024-02-05",
    excerpt:
      "A deep dive into the creative process behind crafting crossword puzzles, from theme development to grid symmetry.",
    content: `
Creating a crossword puzzle is both an art and a science. It begins with an idea—often a theme that ties the puzzle together. The theme might be wordplay, a cultural reference, or simply a collection of related concepts.

The grid comes next. Every crossword must have rotational symmetry, meaning if you turn it 180 degrees, the pattern of black and white squares remains the same. This constraint is both limiting and liberating, forcing creativity within structure.

Then comes the fill. This is where the real craft emerges. Finding words that intersect naturally, avoiding obscure entries, and maintaining a fair difficulty level requires patience and an extensive vocabulary.

Finally, the clues. This is where personality shines. A clue can be straightforward or mischievously misleading. The best clues make solvers smile when they crack them, that delightful "aha!" moment that makes crosswords so addictive.

The process can take hours or even days, but the result—a puzzle that challenges and entertains—makes it all worthwhile.
    `,
  },
  {
    slug: "why-i-love-difficult-words",
    title: "Why I Love Difficult Words",
    date: "2024-01-28",
    excerpt:
      "Exploring the beauty of unusual vocabulary and why obscure words make puzzles more interesting.",
    content: `
There's something magical about stumbling upon a word you've never encountered before. Words like "eleemosynary" or "callipygian" aren't just difficult—they're doorways to richer expression and deeper understanding.

In crossword construction, these words serve a dual purpose. They challenge solvers to expand their vocabulary while filling tricky spaces in the grid. A well-placed obscure word can be the difference between an impossible corner and an elegant solution.

But I'm careful not to overuse them. The best puzzles balance accessibility with challenge. Too many difficult words frustrate solvers; too few bore them. The sweet spot is where learning meets fun.

When someone emails to say they learned a new word from one of my puzzles, that's the highest compliment. It means the puzzle wasn't just a diversion—it was a moment of growth.

Language is living and breathing. Every word, no matter how obscure, was once necessary to someone. By including these words in puzzles, we keep them alive, give them new relevance, and remind ourselves of the boundless creativity of human expression.
    `,
  },
  {
    slug: "reading-writing-and-wordplay",
    title: "Reading, Writing, and Wordplay",
    date: "2024-01-15",
    excerpt:
      "How my love of literature influences my crossword puzzles and vice versa.",
    content: `
Books and crosswords have always been intertwined in my life. Both are about language—its precision, its flexibility, its power to communicate and conceal.

When I read, I collect words like a magpie collects shiny objects. A particularly evocative phrase might end up as a crossword clue. A character's name might fit perfectly in a themed puzzle. Literature provides an endless well of material.

Writing prose is different from writing crossword clues, but the skills overlap. Both require economy of language. In a novel, every word should serve the story. In a crossword, every clue should be precise and engaging.

Wordplay appears in both mediums too. Authors use puns, double meanings, and linguistic tricks to add layers to their work. Crossword constructors do the same, condensed into a few words per clue.

My favorite puzzles reference literature explicitly—quotes as themes, author names as entries, book titles hidden in the grid. These puzzles feel like love letters to reading, celebrations of the written word in all its forms.

If you're a reader, you'll probably enjoy crosswords. And if you're a cruciverbalist (yes, that's the word for crossword enthusiasts), picking up a good book will feel familiar—another kind of puzzle to solve, another world built from words.
    `,
  },
];
