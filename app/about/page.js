export const metadata = {
  title: "About Growwlance | Digital Growth Partner",
  description:
    "Learn about Growwlance, a digital marketing agency helping businesses grow through SEO, performance marketing, social media, website development, branding, content, and AI automation.",
  keywords: [
    "about Growwlance",
    "digital marketing agency India",
    "digital growth agency",
    "SEO agency",
    "performance marketing agency",
  ],
  alternates: {
    canonical: "https://growwlance.in/about",
  },
  openGraph: {
    title: "About Growwlance | Digital Growth Partner",
    description:
      "Discover how Growwlance combines marketing, technology, creativity, and AI to help businesses grow online.",
    url: "https://growwlance.in/about",
    siteName: "Growwlance",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://growwlance.in/home/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Growwlance",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-28 text-white md:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold md:text-6xl">About Growwlance — Your Digital Growth Partner</h1>
        <p className="mt-6 max-w-2xl text-gray-400">
          We help brands grow with performance marketing, sharper analytics,
          and conversion-focused execution.
        </p>
      </div>
    </main>
  );
}
