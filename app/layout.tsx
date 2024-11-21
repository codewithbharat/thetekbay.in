import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TechBay",
  description: "TechBay is a platform for tech enthusiasts to share their knowledge and learn from others.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
