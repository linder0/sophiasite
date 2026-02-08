import { MouseEvent } from "react";

export function useThemeHover() {
  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = "var(--text-color)";
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = "var(--border-color)";
  };

  return { handleMouseEnter, handleMouseLeave };
}
