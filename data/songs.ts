export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  cover: string;
  rating: number;
  dateAdded: string;
  review: string;
}

export const songs: Song[] = [
  {
    id: "new-slang",
    title: "New Slang",
    artist: "The Shins",
    album: "Oh, Inverted World",
    cover: "/images/songs/new-slang.jpg",
    rating: 5,
    dateAdded: "2024-01-15",
    review: `
A song about language, essentially—which makes it a natural favorite. James Mercer's lyrics are dense with unusual word choices and unexpected phrases. "Gold teeth and a curse for this town" is the kind of opening line that makes you lean in.

The melody is deceptively simple, but the way it builds toward the chorus creates something genuinely moving. There's melancholy here, but also hope—the sense that new words, new ways of thinking, can change everything.

As someone who works with words constantly, I appreciate songs that treat language as more than just a vehicle for emotion. This song does both: the words matter, and they also make you feel.
    `,
  },
  {
    id: "this-must-be-the-place",
    title: "This Must Be the Place",
    artist: "Talking Heads",
    album: "Speaking in Tongues",
    cover: "/images/songs/this-must-be-the-place.jpg",
    rating: 5,
    dateAdded: "2023-12-20",
    review: `
David Byrne's love song to his house, or his partner, or both—the beauty is in the ambiguity. The lyrics read like a puzzle, simple words arranged in slightly off ways that reveal deeper meaning.

"Home is where I want to be / But I guess I'm already there" is perfect in its directness. No elaborate metaphors needed. Sometimes the clearest statements hit hardest.

The instrumental arrangement is warm and unhurried. This is a rare thing: a Talking Heads song that relaxes instead of energizes. It proves they could do intimate as well as cerebral.
    `,
  },
  {
    id: "grace",
    title: "Grace",
    artist: "Jeff Buckley",
    album: "Grace",
    cover: "/images/songs/grace.jpg",
    rating: 5,
    dateAdded: "2023-11-08",
    review: `
Jeff Buckley's voice is an instrument of almost supernatural beauty. This song showcases his range—tender whispers building to soaring peaks—but it's the control that impresses me most.

The lyrics are elliptical, almost cryptic. "It's my time coming, I'm not afraid to die" could mean anything, but Buckley's delivery makes it feel like truth. Sometimes precision matters less than conviction.

This is maximalist music: layers of guitar, dramatic dynamics, ambitious vocal leaps. It could easily tip into excess, but Buckley walks the line perfectly. Every choice serves the emotional arc.
    `,
  },
  {
    id: "pyramid-song",
    title: "Pyramid Song",
    artist: "Radiohead",
    album: "Amnesiac",
    cover: "/images/songs/pyramid-song.jpg",
    rating: 4,
    dateAdded: "2023-10-25",
    review: `
The rhythm here is deliberately disorienting. It sounds like it's in freeform time, but it's actually structured—just structured in an unusual way. A musical puzzle.

Thom Yorke's lyrics reference Dante's Inferno while also feeling deeply personal. "There was nothing to fear, nothing to doubt" is delivered with such yearning that you believe in whatever afterlife he's describing.

The string arrangement adds weight without overwhelming. This is Radiohead at their most patient—willing to let moments breathe, trusting the audience to stay with them through the uncertainty.
    `,
  },
];
