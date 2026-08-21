import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const siteUrl = "https://growwlance.in";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Growwlance | Digital Marketing & Website Development Agency",
    template: "%s | Growwlance",
  },

  description:
    "Growwlance is a digital marketing and website development agency in India helping businesses grow with SEO, performance marketing, social media marketing, web development, branding, content creation, and AI automation.",

  keywords: [
    "Growwlance",
    "digital marketing agency",
    "digital marketing agency India",
    "digital marketing company India",
    "SEO agency India",
    "SEO services India",
    "performance marketing agency",
    "performance marketing services",
    "social media marketing agency",
    "social media marketing services",
    "website development company",
    "website development agency India",
    "web design agency",
    "Next.js development",
    "branding agency",
    "content marketing agency",
    "AI automation agency",
    "lead generation agency",
  ],

  authors: [
    {
      name: "Growwlance",
      url: siteUrl,
    },
  ],

  creator: "Growwlance",
  publisher: "Growwlance",

  category: "Digital Marketing",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Growwlance | Digital Marketing & Website Development Agency",

    description:
      "Grow your business with SEO, performance marketing, social media marketing, website development, branding, content, and AI automation.",

    url: siteUrl,

    siteName: "Growwlance",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/home/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Growwlance - Digital Marketing and Website Development Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Growwlance | Digital Marketing & Website Development Agency",

    description:
      "SEO, performance marketing, social media, website development, branding, content, and AI automation for growing businesses.",

    images: ["/home/og-image.jpg"],

    creator: "@growwlance",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050816] text-white antialiased">
        <ScrollProgress />

        <Navbar />

        {children}

        <Footer />

        <WhatsAppFloat />
      </body>
    </html>
  );
}