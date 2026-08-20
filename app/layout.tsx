import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soraya Farah | Programa Mente Clara",
  description:
    "Mente Clara é o programa autoral de Soraya Farah para compreender respostas ao estresse e praticar novas formas de responder com presença e consciência.",
  openGraph: {
    title: "Soraya Farah | Programa Mente Clara",
    description: "Compreenda o que acontece em você. Pratique novas formas de responder.",
    type: "website",
    images: ["/assets/v6/yoga-community.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#38474F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
