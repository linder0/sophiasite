"use client";

import { SOCIAL_LINKS } from "@/lib/config";

export default function CTAButton() {
  return (
    <div className="mt-16 mb-8">
      <a
        href={`mailto:${SOCIAL_LINKS.email}`}
        className="inline-block px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black themed-border transition-all duration-200"
      >
        Get in Touch
      </a>
    </div>
  );
}
