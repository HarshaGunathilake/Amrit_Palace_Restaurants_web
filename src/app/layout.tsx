import type { Metadata } from "next";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amrit Palace — Fine Indian Dining, Galle",
  description:
    "A modern expression of timeless Indian cuisine. Amrit Palace is an intimate fine-dining room in Galle, Sri Lanka, established 1996.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-parchment text-midnight antialiased">{children}</body>
    </html>
  );
}
