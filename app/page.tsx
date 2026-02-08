"use client";

import CrosswordLogo from "@/components/CrosswordLogo";
import { Mail, Instagram, Twitter, Film } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center themed-text">
        <CrosswordLogo />
        <p className="text-lg leading-relaxed opacity-80 mt-8 max-w-2xl px-6">
          Writer, crossword constructor, and lover of words. I create puzzles
          that challenge and delight, write about language and literature, and
          share my thoughts on books and films.
        </p>

        <div className="flex gap-6 justify-center mt-8">
          <a
            href="https://substack.com/@sophiakim"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Substack"
          >
            <Mail size={20} strokeWidth={1} />
          </a>
          <a
            href="https://instagram.com/sophiakim"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1} />
          </a>
          <a
            href="https://twitter.com/sophiakim"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Twitter"
          >
            <Twitter size={20} strokeWidth={1} />
          </a>
          <a
            href="https://letterboxd.com/sophiakim"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Letterboxd"
          >
            <Film size={20} strokeWidth={1} />
          </a>
        </div>
      </div>
    </div>
  );
}
