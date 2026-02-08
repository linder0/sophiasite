# Sophia Kim - Crosswords & Writing

A minimal, elegant website for Sophia Kim featuring crossword puzzles, writing, book reviews, and movie reviews.

## Features

- **Interactive Crossword Logo**: Landing page features "SOPHIA" and "KIM" intersecting at the shared "I"
- **Playable Crosswords**: Full crossword puzzle player with clue navigation and answer checking
- **Blog**: Writing about crosswords, language, and wordplay
- **Bookshelf**: Book reviews with ratings and cover display
- **Movies**: Film reviews with ratings and poster display

## Tech Stack

- **Next.js 16** with App Router
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**
- **@guardian/react-crossword** for interactive crossword functionality

## Design

- Clean, minimal aesthetic with white background
- Helvetica font family
- Responsive layout for all screen sizes
- Maximum content width of 1200px

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page with crossword logo
│   ├── crosswords/        # Crossword puzzles
│   ├── blog/              # Blog posts
│   ├── books/             # Book reviews
│   └── movies/            # Movie reviews
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   ├── CrosswordLogo.tsx  # Landing page crossword
│   └── CrosswordPlayer.tsx # Playable crossword component
├── data/                  # Content data files
│   ├── crosswords.ts      # Crossword puzzle data
│   ├── blog.ts            # Blog post content
│   ├── books.ts           # Book reviews
│   └── movies.ts          # Movie reviews
└── lib/                   # Utility functions
    └── crosswordUtils.ts  # Crossword data transformation
```

## Adding Content

### Crosswords

Edit `data/crosswords.ts` to add new crossword puzzles. Each crossword needs:
- Unique ID
- Title, difficulty, and date
- Across and down clues with answers and positions

### Blog Posts

Edit `data/blog.ts` to add new blog posts. Each post needs:
- Unique slug
- Title, date, and excerpt
- Full content text

### Book Reviews

Edit `data/books.ts` to add new book reviews. Each review needs:
- Unique ID
- Title, author, and cover image path
- Rating (1-5), date read, and review text

### Movie Reviews

Edit `data/movies.ts` to add new movie reviews. Each review needs:
- Unique ID
- Title, year, director, and poster image path
- Rating (1-5), date watched, and review text

## Building for Production

```bash
npm run build
npm start
```

## License

ISC
