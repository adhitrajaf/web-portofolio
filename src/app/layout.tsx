import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adhitya Fajar Rachmadi, S.T. | Middleware Engineer & IT Programmer",
  description:
    "Official portfolio of Adhitya Fajar Rachmadi, S.T. — IT Programmer (Middleware R&D) at PT Care Technologies & Dedicated IT and Business Analyst at Zurich Indonesia. Experienced in Enterprise Middleware, SQL Server, REST APIs, and Production AI/ML Systems.",
  keywords: [
    "Adhitya Fajar Rachmadi",
    "Middleware Engineer",
    "IT Programmer",
    "IT Business Analyst",
    "Care Technologies",
    "Zurich Indonesia",
    "C#",
    "Visual Basic",
    "Laravel",
    "SQL Server",
    "AI Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
