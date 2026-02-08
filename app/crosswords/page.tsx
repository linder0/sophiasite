"use client";

import HoverCard from "@/components/HoverCard";

const MINI_CROSSWORDS = [
  { date: "Sept. 14", url: "https://nyunews.us7.list-manage.com/track/click?u=55aa0ab3692ba635701ae542e&id=a7d7decb31&e=a513dbcd2d" },
  { date: "Sept. 21", url: "https://nyunews.us7.list-manage.com/track/click?u=55aa0ab3692ba635701ae542e&id=07ccc23c4a&e=e265eac60c" },
  { date: "Sept. 28", url: "https://puzzleme.amuselabs.com/pmm/crossword?id=012294d2&set=7118a196f1a5c72915d6ac57cc375db2fd6bc93765a8ed3b87b4d71f59dd66c6" },
  { date: "Oct. 5", url: "https://puzzleme.amuselabs.com/pmm/crossword?id=9d17944f&set=7118a196f1a5c72915d6ac57cc375db2fd6bc93765a8ed3b87b4d71f59dd66c6" },
  { date: "Oct. 19", url: "https://crosshare.org/crosswords/2DQhIUkn3pf2XW5CKIlR/wsns-sunday-crossword-oct-19" },
  { date: "Oct. 26", url: "https://crosshare.org/crosswords/ll1ZtwyVYTaY3IFOwWKP/wsns-sunday-crossword-oct-26" },
  { date: "Nov. 2", url: "https://crosshare.org/crosswords/Z5hh17mw3Bn9CdvZcfkm/wsns-sunday-crossword-nov-2" },
  { date: "Nov. 9", url: "https://crosshare.org/crosswords/sCsKWogZ3Y1BSKQYVf6s/wsns-sunday-crossword-nov-9" },
  { date: "Nov. 16", url: "https://crosshare.org/crosswords/xg8NY3MelNLObx3048q3/wsns-sunday-crossword-nov-16" },
  { date: "Nov. 23", url: "https://crosshare.org/crosswords/G10XRxN0VdvIyd8T7QZi/wsns-sunday-crossword-nov-23" },
  { date: "Dec. 7", url: "https://crosshare.org/crosswords/XMRwfQVNzdh6rd0iNfAE/wsns-sunday-crossword-dec-7" },
];

const FULL_SIZED_CROSSWORDS = [
  {
    title: "Romance Issue",
    date: "Spring 2025",
    url: "https://nyunews.com/underthearch/2025/5/5/the-romance-issue/",
  },
  {
    title: "Commuter Issue",
    date: "Fall 2025",
    url: "https://nyunews.com/underthearch/commuter/2025/10/6/crossword/",
  },
  {
    title: "Career Issue",
    date: "Fall 2025",
    url: "https://nyunews.com/underthearch/career/2025/10/23/crossword/",
  },
  {
    title: "Health Issue",
    date: "Fall 2025",
    url: "https://nyunews.com/underthearch/health/2025/12/08/crossword/",
  },
];

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function CrosswordsPage() {

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-light mb-4">Crosswords</h1>
        <p className="text-lg opacity-70">
          A collection of puzzles for Washington Square News and Under the Arch
        </p>
      </div>

      {/* Mini Crosswords Section */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-2">Mini Crosswords</h2>
          <p className="opacity-60">
            Weekly puzzles published through Washington Square News&apos; Daybook newsletter · Fall 2025
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MINI_CROSSWORDS.map((crossword) => (
            <HoverCard key={crossword.date} href={crossword.url} className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-light">{crossword.date}</span>
                <ExternalLinkIcon />
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* Full-Sized Crosswords Section */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-2">Full-Sized Crosswords</h2>
          <p className="opacity-60">
            Themed puzzles for Under the Arch magazine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FULL_SIZED_CROSSWORDS.map((crossword) => (
            <HoverCard key={crossword.title} href={crossword.url} className="p-8">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-light">{crossword.title}</h3>
                  <div className="w-5 h-5 flex-shrink-0 mt-1">
                    <ExternalLinkIcon />
                  </div>
                </div>
                <p className="text-sm opacity-60">{crossword.date}</p>
              </div>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* Special Bonus Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-light mb-2">Special Bonus</h2>
          <p className="opacity-60">
            Unpublished full-size crossword
          </p>
        </div>

        <HoverCard
          href="https://puzzleme.amuselabs.com/pmm/crossword?id=1a38b678&set=dfef9a5f01c9c191ed0d93fe1321273a6a8dfae064f76dde95de3b365c0bf2d0"
          className="block p-8 max-w-2xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-light">
              &ldquo;You&apos;re telling me a ___ ___ this ___?&rdquo;
            </h3>
            <div className="w-5 h-5 flex-shrink-0 ml-4">
              <ExternalLinkIcon />
            </div>
          </div>
        </HoverCard>
      </section>
    </div>
  );
}
