import Link from "next/link";
import { ReactNode } from "react";
import { TRANSITIONS } from "@/lib/constants";

interface DetailLayoutProps {
  backLabel?: string;
  title: string;
  subtitle: string;
  metaInfo: ReactNode;
  content: string;
  aspectRatio?: "portrait" | "square";
  previewContent?: ReactNode;
}

export default function DetailLayout({
  backLabel = "Shelf",
  title,
  subtitle,
  metaInfo,
  content,
  aspectRatio = "portrait",
  previewContent,
}: DetailLayoutProps) {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/shelf"
        className="text-sm opacity-60 hover:opacity-100 transition-opacity mb-8 inline-block"
      >
        ← Back to {backLabel}
      </Link>

      <div className="grid md:grid-cols-[300px_1fr] gap-12">
        <div>
          <div
            className={`${
              aspectRatio === "square" ? "aspect-square" : "aspect-[2/3]"
            } border flex items-center justify-center sticky top-8`}
            style={{
              borderColor: "var(--border-color)",
              transition: `border-color ${TRANSITIONS.THEME}`,
            }}
          >
            {previewContent || (
              <div className="text-center p-8">
                <div className="text-lg font-light mb-2">{title}</div>
                <div className="text-sm opacity-60">{subtitle}</div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-light mb-2">{title}</h1>
          <p className="text-xl opacity-60 mb-4">{subtitle}</p>

          <div
            className="flex gap-4 text-sm opacity-60 mb-8 pb-8 border-b"
            style={{
              borderColor: "var(--border-color)",
              transition: `border-color ${TRANSITIONS.THEME}`,
            }}
          >
            {metaInfo}
          </div>

          <div className="prose prose-lg max-w-none">
            {content.split("\n").map((paragraph, index) => {
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
