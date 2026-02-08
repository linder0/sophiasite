"use client";

import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { themes } from "@/lib/themes";
import { useState, useEffect } from "react";

const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export default function ThemeDice() {
  const { randomizeTheme, getThemeIndex } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    setCurrentIndex(getThemeIndex());
  }, [getThemeIndex]);

  const handleClick = () => {
    if (isRolling) return;

    setIsRolling(true);
    const newIndex = randomizeTheme();

    // End rolling animation after 600ms
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsRolling(false);
    }, 600);
  };

  const DiceIcon = diceIcons[currentIndex];
  const currentThemeColor = themes[currentIndex].text;

  return (
    <div className="fixed right-8 top-0 h-full flex items-center z-50">
      <button
        onClick={handleClick}
        className="opacity-50 hover:opacity-100 transition-opacity duration-300 hover:scale-110 active:scale-95"
        aria-label="Roll for new theme"
        disabled={isRolling}
        style={{
          color: currentThemeColor,
          transition: "color 0.4s ease, opacity 0.3s ease, transform 0.2s ease",
        }}
      >
        <div
          className={`transition-transform duration-300 ${
            isRolling ? 'animate-spin' : ''
          }`}
        >
          <DiceIcon size={32} strokeWidth={1} />
        </div>
      </button>
    </div>
  );
}
