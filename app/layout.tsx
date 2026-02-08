import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ThemeDice from "@/components/ThemeDice";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sophia Kim - Crosswords & Writing",
  description: "Crossword puzzles, writing, and reviews by Sophia Kim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased themed-bg themed-text">
        <ThemeProvider>
          <Navigation />
          <ThemeDice />
          <main className="ml-48 mr-48">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
