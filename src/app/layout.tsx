import "./globals.css";
import type { Metadata } from "next";
import Nav from "./nav";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Anshul Kanwar",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-900 text-stone-400 pb-20">
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
