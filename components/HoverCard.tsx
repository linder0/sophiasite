"use client";

import { ReactNode } from "react";
import { useThemeHover } from "@/hooks/useThemeHover";
import { TRANSITIONS } from "@/lib/constants";

interface HoverCardProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  scale?: boolean;
}

export default function HoverCard({
  children,
  href,
  onClick,
  className = "",
  scale = true,
}: HoverCardProps) {
  const { handleMouseEnter, handleMouseLeave } = useThemeHover();

  const baseClassName = `border themed-border transition-all ${
    scale ? "hover:scale-[1.005]" : ""
  } ${className}`;

  const style = {
    borderColor: "var(--border-color)",
    transition: `transform ${TRANSITIONS.HOVER}, border-color ${TRANSITIONS.HOVER}`,
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      className={baseClassName}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
