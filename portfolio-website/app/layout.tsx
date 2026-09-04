import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// La mono se usa solo en detalles (etiquetas, badges), así que no la
// precargamos: evita el warning de "preloaded but not used" y no bloquea
// el render inicial.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-mono",
});

const SITE_URL = "https://lorenzojaviercolodro.vercel.app";
const NAME = "Lorenzo Javier Colodro";
const ROLE = "Full Stack Developer";
const DESCRIPTION =
  "Full Stack Developer specialised in React, Node.js, TypeScript and AWS serverless architectures. I build scalable, event-driven applications — from responsive UIs to infrastructure as code with AWS CDK.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} — ${ROLE}`,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Lorenzo Javier Colodro",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "AWS CDK",
    "AWS Serverless",
    "Step Functions",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${NAME} — Portfolio`,
    title: `${NAME} — ${ROLE}`,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: `${NAME} — ${ROLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description: DESCRIPTION,
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  jobTitle: ROLE,
  description: DESCRIPTION,
  sameAs: [
    "https://github.com/javiercolodro",
    "https://www.linkedin.com/in/lorenzojaviercolodro/",
  ],
  knowsAbout: [
    "React",
    "Node.js",
    "TypeScript",
    "AWS CDK",
    "AWS Step Functions",
    "PostgreSQL",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-base text-slate-300 antialiased selection:bg-accent/30 selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
