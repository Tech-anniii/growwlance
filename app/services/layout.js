export const metadata = {
  title: "Digital Marketing Services | Growwlance",
  description:
    "Explore Growwlance digital marketing services including SEO, performance marketing, social media marketing, website development, branding, content creation, AI automation, lead generation, and more.",
  keywords: [
    "digital marketing services",
    "SEO services India",
    "performance marketing services",
    "social media marketing services",
    "website development services",
    "branding services",
    "AI automation services",
    "lead generation services",
  ],
  alternates: {
    canonical: "https://growwlance.in/services",
  },
  openGraph: {
    title: "Digital Marketing Services | Growwlance",
    description:
      "SEO, performance marketing, social media, website development, branding, AI automation and growth services from Growwlance.",
    url: "https://growwlance.in/services",
    siteName: "Growwlance",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://growwlance.in/home/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Growwlance Digital Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services | Growwlance",
    description:
      "SEO, performance marketing, social media, website development, branding, AI automation and growth services.",
    images: ["https://growwlance.in/home/og-services.jpg"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}