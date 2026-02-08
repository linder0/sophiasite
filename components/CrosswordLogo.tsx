"use client";

import { useEffect, useState } from "react";

export default function CrosswordLogo() {
  const [mounted, setMounted] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [flippingCells, setFlippingCells] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    // Mark initial load complete after all cards have flipped (9 cards * 100ms + 300ms animation)
    setTimeout(() => {
      setInitialLoadComplete(true);
    }, 1200);
  }, []);

  const handleCardHover = (cellKey: string) => {
    if (!initialLoadComplete || flippingCells.has(cellKey)) return; // Prevent triggering during initial load or during animation

    setFlippingCells(prev => new Set(prev).add(cellKey));

    // Auto flip back after 300ms
    setTimeout(() => {
      setFlippingCells(prev => {
        const newSet = new Set(prev);
        newSet.delete(cellKey);
        return newSet;
      });
    }, 300);
  };

  // SOPHIA and KIM intersecting at the I
  // K
  // SOPHIA
  // M
  const grid = [
    ["", "", "", "", "K", ""],
    ["S", "O", "P", "H", "I", "A"],
    ["", "", "", "", "M", ""],
  ];

  // Calculate delay for staggered animation
  const getDelay = (rowIndex: number, colIndex: number) => {
    // Count only cells with letters
    let cellIndex = 0;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c]) {
          if (r === rowIndex && c === colIndex) {
            return cellIndex * 100; // 100ms delay between each card
          }
          cellIndex++;
        }
      }
    }
    return 0;
  };

  const getCellKey = (rowIndex: number, colIndex: number) =>
    `${rowIndex}-${colIndex}`;

  return (
    <div className="flex flex-col items-center gap-1 my-12">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((cell, colIndex) => {
            const cellKey = getCellKey(rowIndex, colIndex);
            const isFlipping = flippingCells.has(cellKey);
            const delay = getDelay(rowIndex, colIndex);

            return (
              <div
                key={cellKey}
                className={`w-12 h-12 ${cell ? "" : ""}`}
                style={{ perspective: "1000px" }}
              >
                {cell ? (
                  <div
                    className="relative w-full h-full cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipping
                        ? "rotateY(180deg)"
                        : mounted
                          ? "rotateY(0deg)"
                          : "rotateY(180deg)",
                      transition: "transform 0.3s ease-out",
                      transitionDelay: !initialLoadComplete && !isFlipping ? `${delay}ms` : "0ms",
                      willChange: "transform",
                      transformOrigin: "center center",
                    }}
                    onMouseEnter={() => handleCardHover(cellKey)}
                  >
                    {/* Front face */}
                    <div
                      className="absolute w-full h-full flex items-center justify-center text-2xl font-light themed-text border-2 bg-white"
                      style={{
                        borderColor: "var(--text-color)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transition: "color 0.4s ease, border-color 0.4s ease",
                      }}
                    >
                      {cell}
                    </div>
                    {/* Back face */}
                    <div
                      className="absolute w-full h-full flex items-center justify-center text-2xl font-light border-2"
                      style={{
                        backgroundColor: "var(--text-color)",
                        borderColor: "var(--text-color)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        transition: "background-color 0.4s ease, border-color 0.4s ease",
                      }}
                    >
                    </div>
                  </div>
                ) : (
                  <div className="w-12 h-12" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
