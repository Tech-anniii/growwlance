export const metadata = {
  title: "Our Works | Growwlance Portfolio & Projects",
  description:
    "Explore Growwlance projects, websites, digital marketing campaigns, branding work, and technology solutions built for modern businesses.",
  keywords: [
    "Growwlance portfolio",
    "digital marketing portfolio",
    "website development portfolio",
    "SEO case studies",
    "marketing agency portfolio",
    "web development projects",
  ],
  alternates: {
    canonical: "https://growwlance.in/works",
  },
  openGraph: {
    title: "Our Works | Growwlance Portfolio & Projects",
    description:
      "Explore websites, marketing campaigns, branding projects, and digital growth solutions by Growwlance.",
    url: "https://growwlance.in/works",
    siteName: "Growwlance",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://growwlance.in/home/og-works.jpg",
        width: 1200,
        height: 630,
        alt: "Growwlance Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Works | Growwlance Portfolio & Projects",
    description:
      "Explore Growwlance websites, marketing campaigns, branding projects, and digital growth solutions.",
    images: ["https://growwlance.in/home/og-works.jpg"],
  },
};

export default function WorksLayout({ children }) {
  return children;
}