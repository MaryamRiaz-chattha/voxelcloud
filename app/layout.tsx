import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoxelCloud - 3D SaaS Platform",
  description: "AI-powered 3D SaaS platform built with Next.js, Tailwind, and Spline.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
