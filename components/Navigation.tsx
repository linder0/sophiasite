"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/lib/config";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-48 flex items-center">
      <div className="px-8">
        <ul className="flex flex-col gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-opacity block themed-text ${
                  isActive(link.href)
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
