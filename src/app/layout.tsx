import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Psí salon Eva Jičín | Profesionální péče o vašeho psa | 605 213 768",
  description: "Psí salon Eva v Jičíně - více jak 15 let zkušeností. Koupání španělskou kosmetikou PSH, stříhání, úprava srsti. Individuální přístup v klidném prostředí. Na Tobolce 200, Jičín. Objednávky: 605 213 768",
  keywords: ["psí salon Jičín", "stříhání psů Jičín", "péče o psy Jičín", "koupání psů", "úprava srsti", "psí salon Eva", "grooming Jičín", "kosmetika PSH"],
  authors: [{ name: "Eva Mrzenová" }],
  creator: "Psí salon Eva",
  publisher: "Psí salon Eva",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://psi-salon-eva.cz",
    siteName: "Psí salon Eva",
    title: "Psí salon Eva Jičín | Profesionální péče o vašeho psa",
    description: "Psí salon Eva v Jičíně - více jak 15 let zkušeností. Koupání, stříhání, úprava srsti s individuálním přístupem. Objednávky: 605 213 768",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Psí salon Eva Jičín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psí salon Eva Jičín | Profesionální péče o vašeho psa",
    description: "Více jak 15 let zkušeností v péči o psy. Koupání, stříhání, úprava srsti. Objednávky: 605 213 768",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://psi-salon-eva.cz",
  },
  other: {
    "geo.region": "CZ-KH",
    "geo.placename": "Jičín",
    "geo.position": "50.4372;15.3517",
  },
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
