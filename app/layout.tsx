import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://aethericstudio.com"),
    title: "Aetheric Studio | Premium Software Engineering",
    description:
      "We build ultra-fast web applications, business dashboards, and custom SaaS MVPs for small and medium businesses in the US.",
    openGraph: {
      title: "Aetheric Studio | Premium Software Engineering",
      description:
        "We build ultra-fast web applications, business dashboards, and custom SaaS MVPs for small and medium businesses in the US.",
      url: "https://aethericstudio.com",
      siteName: "Aetheric Studio",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Aetheric Studio - Premium Software Engineering",
        },
      ],
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-zinc-950 text-zinc-100 antialiased font-sans">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
