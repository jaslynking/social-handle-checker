import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Handle Checker",
  description: "Check username availability across developer platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.className}>
      <body>{children}</body>
    </html>
  );
}
