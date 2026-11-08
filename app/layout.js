import localFont from "next/font/local";

import { school } from "@/config/school";
import { isDemo } from "@/lib/mode";

import "./globals.css";

/**
 * Google Sans (variable 400–700), self-hosted from @fontsource-variable/google-sans (OFL).
 * Self-hosting means builds never depend on reaching fonts.googleapis.com (VPS, CI, Vercel all identical).
 */
const googleSans = localFont({
    src: "./fonts/GoogleSans-Latin-Variable.woff2",
    variable: "--font-google-sans",
    weight: "400 700",
    style: "normal",
    display: "swap",
    fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

/** Theme tokens from config → CSS variables (consumed by @theme in globals.css). */
const t = school.theme;
const themeVars = {
    "--brand": t.brand,
    "--brand-deep": t.brandDeep,
    "--brand-soft": t.brandSoft,
    "--sun": t.sun,
    "--sun-soft": t.sunSoft,
    "--sky": t.sky,
    "--sky-soft": t.skySoft,
    "--coral": t.coral,
    "--coral-soft": t.coralSoft,
    "--leaf": t.leaf ?? t.brand,
    "--leaf-soft": t.leafSoft ?? t.brandSoft,
    "--paper": t.paper,
    "--ink": t.ink,
};

export const metadata = {
    metadataBase: new URL(school.siteUrl),
    title: {
        default: `${school.name} | ${school.seo.titleSuffix}`,
        template: `%s | ${school.shortName} ${school.subName}`,
    },
    description: school.description,
    applicationName: school.name,
    keywords: school.seo.keywords,
    openGraph: {
        type: "website",
        locale: "en_BD",
        siteName: school.name,
        title: school.name,
        description: school.description,
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/" },
    // The Vercel demo duplicates the real school site: keep it out of search results.
    ...(isDemo && { robots: { index: false, follow: false } }),
};

export const viewport = {
    themeColor: t.brand,
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth" className={`${googleSans.variable} h-full antialiased`} style={themeVars}>
            <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
