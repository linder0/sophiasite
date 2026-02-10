"use client";

import { Mail, Linkedin, Twitter, Instagram, LucideIcon } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/config";

interface SocialLink {
  href: string;
  label: string;
  Icon: LucideIcon;
  isExternal?: boolean;
}

const socialLinks: SocialLink[] = [
  { href: `mailto:${SOCIAL_LINKS.email}`, label: "Email", Icon: Mail },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: Linkedin, isExternal: true },
  { href: SOCIAL_LINKS.twitter, label: "Twitter", Icon: Twitter, isExternal: true },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: Instagram, isExternal: true },
];

export default function SocialLinks() {
  return (
    <div className="fixed right-0 top-0 h-full w-48 flex items-center justify-end">
      <div className="pr-8">
        <ul className="flex flex-col gap-6 items-end">
          {socialLinks.map(({ href, label, Icon, isExternal }) => (
            <li key={label}>
              <a
                href={href}
                {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                className="opacity-50 hover:opacity-100 transition-opacity block themed-text"
                aria-label={label}
              >
                <Icon size={20} strokeWidth={1} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
