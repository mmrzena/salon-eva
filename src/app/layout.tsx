import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Psí salon Eva - Profesionální péče o vašeho psa",
  description: "Psí salon Eva v Jičíně nabízí kompletní péči o vašeho psa. Koupání, stříhání, úprava srsti a další služby. Objednávky na tel. 605 213 768.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
