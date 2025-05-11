import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
