import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "VROOM - Event Operations Company",
  description: "We automate the logistical backbone of events so hosts can focus on taste, intention, and the people in the room.",
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
          <SocialLinks />
          <main className="ml-48 mr-48">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
