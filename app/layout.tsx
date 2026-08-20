import type { Metadata, Viewport } from "next";
import "./globals.css";

const SOCIAL_IMAGE_PATH = "og-soraya-farah.jpg";
const FALLBACK_ASSET_BASE =
  "https://raw.githubusercontent.com/SinguBoss/soraya-farah-mente-clara/main/public/";

function resolveSiteBase(value: string | undefined): URL | null {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return new URL("/", url);
  } catch {
    return null;
  }
}

const configuredSiteBase = resolveSiteBase(process.env.NEXT_PUBLIC_SITE_URL);
const metadataBase = configuredSiteBase ?? new URL(FALLBACK_ASSET_BASE);
const socialImageUrl = new URL(SOCIAL_IMAGE_PATH, metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title: "Soraya Farah | Programa Mente Clara",
  description:
    "Mente Clara é o programa autoral de Soraya Farah para compreender respostas ao estresse e praticar novas formas de responder com presença e consciência.",
  alternates: configuredSiteBase
    ? { canonical: configuredSiteBase.toString() }
    : undefined,
  openGraph: {
    title: "Soraya Farah | Programa Mente Clara",
    description: "Compreenda o que acontece em você. Pratique novas formas de responder.",
    type: "website",
    locale: "pt_BR",
    siteName: "Soraya Farah | Programa Mente Clara",
    url: configuredSiteBase?.toString(),
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Experiência de yoga e bem-estar em comunidade com Soraya Farah",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soraya Farah | Programa Mente Clara",
    description: "Compreenda o que acontece em você. Pratique novas formas de responder.",
    images: [socialImageUrl],
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
