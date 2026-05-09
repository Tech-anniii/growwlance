import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: {
    default: "Growwlance Media | Performance Marketing & SEO Growth",
    template: "%s | Growwlance Media",
  },
  description:
    "Performance marketing, SEO, creative strategy, and funnel execution for brands that want measurable growth.",
  keywords: [
    "performance marketing",
    "SEO",
    "digital marketing agency",
    "paid media",
    "funnel optimization",
    "growth marketing",
  ],
  applicationName: "Growwlance Media",
  authors: [{ name: "Growwlance Media" }],
  creator: "Growwlance Media",
  publisher: "Growwlance Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Growwlance Media | Performance Marketing & SEO Growth",
    description:
      "Performance marketing, SEO, creative strategy, and funnel execution for brands that want measurable growth.",
    siteName: "Growwlance Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growwlance Media | Performance Marketing & SEO Growth",
    description:
      "Performance marketing, SEO, creative strategy, and funnel execution for brands that want measurable growth.",
  },
};

export const viewport = {
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white">

        {/* Global UI */}
        <ScrollProgress />

        {/* Layout */}
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}