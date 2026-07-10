import type { Metadata } from "next";
import { poppins, inter, manrope } from "@/lib/fonts";
import "./globals.css";
import { organizationSchema } from "@/lib/metadata";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "SARVD Academy — Every Student Seen. Every Dream Supported.",
    template: "%s | SARVD Academy",
  },
  description:
    "India's most trusted personalized learning and mentorship platform. Expert guidance for Class 5–12, JEE, NEET, CUET, UPSC, and professional courses. Elite 5 batch & Ultimate One 1:1 mentorship.",
  keywords: [
    "SARVD Academy", "personalized learning", "JEE coaching", "NEET coaching", "CUET preparation",
    "UPSC coaching", "class 5 to 12 tuition", "Elite 5 batch", "one-on-one tutoring", "private mentor India",
    "online coaching India", "best coaching institute", "scholarship for students"
  ],
  authors: [{ name: "SARVD Academy" }],
  creator: "SARVD Academy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sarvdacademy.com",
    siteName: "SARVD Academy",
    title: "SARVD Academy — Every Student Seen. Every Dream Supported.",
    description: "India's most trusted personalized learning and mentorship platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SARVD Academy — Personalized Learning for Every Student",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://sarvdacademy.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
