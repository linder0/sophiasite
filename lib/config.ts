/**
 * Centralized configuration for the VROOM application
 */

// Navigation links
export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/pages/what-is-vroom", label: "What is VROOM" },
  { href: "/pages/vroom-nights", label: "VROOM Nights" },
  { href: "/pages/vroom-select", label: "VROOM Select" },
  { href: "/pages/vroom-partnerships", label: "Partnerships" },
] as const;

// Social media links
export const SOCIAL_LINKS = {
  email: "xuelinda7@gmail.com",
  linkedin: "https://www.linkedin.com/company/usevroom/",
  twitter: "https://x.com/usevroom",
  instagram: "https://instagram.com/usevroom",
} as const;

// Notion page configurations
export const NOTION_PAGES = {
  "what-is-vroom": {
    url: "https://fan-angora-201.notion.site/What-is-VROOM-2fb8e294c47680afb9fac692c6828a43?source=copy_link",
    title: "What is VROOM",
  },
  "vroom-nights": {
    url: "https://fan-angora-201.notion.site/VROOM-Nights-2fb8e294c47680ad9b68f026f58a777a?source=copy_link",
    title: "VROOM Nights",
  },
  "vroom-select": {
    url: "https://usevroom.notion.site/VROOM-Select-2fb8e294c47680b892f6c3fee41cf877?source=copy_link",
    title: "VROOM Select",
  },
  "vroom-partnerships": {
    url: "https://usevroom.notion.site/VROOM-Partnerships-2fc8e294c47680d8b3f1dcb436fd4797?source=copy_link",
    title: "VROOM Partnerships",
  },
} as const;

// Revalidation time for Notion pages (in seconds)
export const NOTION_REVALIDATE_TIME = 3600; // 1 hour
