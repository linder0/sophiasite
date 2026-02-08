export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  poster: string;
  rating: number;
  dateWatched: string;
  review: string;
}

export const movies: Movie[] = [
  {
    id: "wordplay",
    title: "Wordplay",
    year: 2006,
    director: "Patrick Creadon",
    poster: "/images/movies/wordplay.jpg",
    rating: 5,
    dateWatched: "2024-01-20",
    review: `
A documentary about crossword puzzles and the annual American Crossword Puzzle Tournament. Director Patrick Creadon captures both the competitive intensity and the pure joy of solving.

Will Shortz, the New York Times crossword editor, is the perfect guide. His passion for puzzles is infectious, and the film does an excellent job explaining why crosswords matter beyond simple entertainment.

The tournament footage is surprisingly tense—watching top solvers race through puzzles is thrilling even if you can't see what they're solving. The film also features celebrity solvers including Jon Stewart and Bill Clinton, showing how crosswords cut across all demographics.

For anyone who's ever filled in a grid, this is essential viewing. For constructors, it's inspiring—a reminder of why we create these puzzles and the community they build.
    `,
  },
  {
    id: "arrival",
    title: "Arrival",
    year: 2016,
    director: "Denis Villeneuve",
    poster: "/images/movies/arrival.jpg",
    rating: 5,
    dateWatched: "2023-12-01",
    review: `
A profound meditation on language, time, and human connection wrapped in a science fiction premise. Amy Adams gives a career-best performance as a linguist attempting to communicate with aliens.

What makes Arrival special is its respect for language as something more than a communication tool. The film explores how language shapes thought, how grammar reveals worldview, how words can be puzzles to unlock reality itself.

As someone who works with language daily, I was captivated by the depiction of linguistic analysis. The process of decoding the alien language mirrors the work of solving (or constructing) a particularly difficult puzzle—finding patterns, testing hypotheses, building understanding piece by piece.

The emotional core of the film sneaks up on you. By the end, it's not really about aliens at all—it's about choosing to engage deeply with life despite knowing its sorrows. Beautiful, thoughtful, and deeply moving.
    `,
  },
  {
    id: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    poster: "/images/movies/grand-budapest.jpg",
    rating: 4,
    dateWatched: "2023-11-10",
    review: `
Wes Anderson's meticulous visual style is on full display in this caper about a hotel concierge and his protégé. Every frame is composed like a miniature painting, every detail deliberate.

The film's structure—stories within stories—appeals to my puzzle-making brain. Anderson constructs his narrative like a elaborate crossword: multiple layers, interconnected pieces, and a satisfying resolution that brings everything together.

Ralph Fiennes is delightful as Gustave H., delivering rapid-fire dialogue with perfect timing. The script is littered with wonderful words and phrases, the kind of precise language that makes writing feel like an art form.

It's confection, but sophisticated confection. Not every film needs to grapple with heavy themes. Sometimes it's enough to delight in craftsmanship, both visual and verbal. Anderson delivers both in spades.
    `,
  },
  {
    id: "get-out",
    title: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    poster: "/images/movies/get-out.jpg",
    rating: 5,
    dateWatched: "2023-10-15",
    review: `
Jordan Peele's directorial debut is a masterclass in layered storytelling. On the surface, it's a taut thriller. Beneath that, it's incisive social commentary. And beneath that, it's a deeply personal horror about losing autonomy.

What strikes me most is how carefully constructed it is. Every detail matters, every line of dialogue serves multiple purposes. Rewatching reveals new layers—it's a puzzle where the full picture only emerges once you know the solution.

Daniel Kaluuya's performance anchors everything. His character's increasing unease mirrors our own growing dread. The "sunken place" is a brilliant visual metaphor, one that's entered the cultural lexicon.

Peele proves that genre films can be intelligent without sacrificing entertainment. This is horror that trusts its audience, that rewards attention and thought. The kind of movie that sparks conversations long after the credits roll.
    `,
  },
];
