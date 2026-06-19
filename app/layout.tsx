import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darls Hub | Healthcare & Marketing Graphic Designer",
  description:
    "Professional graphic design services specializing in healthcare marketing, social media design, branding and print materials."
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