"use client";

import Link from "next/link";
import { useThemeHover } from "@/hooks/useThemeHover";
import { TRANSITIONS } from "@/lib/constants";

interface ItemCardProps {
  id: string;
  title: string;
  subtitle: string;
  type: "books" | "films" | "songs";
  aspectRatio?: "portrait" | "square";
}

export default function ItemCard({
  id,
  title,
  subtitle,
  type,
  aspectRatio = "portrait",
}: ItemCardProps) {
  const { handleMouseEnter, handleMouseLeave } = useThemeHover();

  return (
    <Link href={`/shelf/${type}/${id}`} className="group flex flex-col">
      <div
        className={`${
          aspectRatio === "square" ? "aspect-square" : "aspect-[2/3]"
        } mb-4 flex items-center justify-center border`}
        style={{
          borderColor: "var(--border-color)",
          transition: `border-color ${TRANSITIONS.HOVER}`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center p-6">
          <div className="text-sm font-light mb-2">{title}</div>
          <div className="text-xs opacity-60">{subtitle}</div>
        </div>
      </div>
      <div className="text-sm">
        <div className="font-light">{title}</div>
        <div className="text-xs opacity-60 mt-1">{subtitle}</div>
      </div>
    </Link>
  );
}
