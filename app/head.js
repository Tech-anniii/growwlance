export default function Head() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Growwlance Media",
    description:
      "Performance marketing, SEO, creative strategy, and funnel execution for brands that want measurable growth.",
    email: "info@Growwlance.com",
    telephone: "+91 8305994766",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://facebook.com/growwlance",
      "https://instagram.com/growwlance",
      "https://linkedin.com/company/growwlance",
    ],
  };

  return (
    <>
      <link rel="canonical" href="/" />

      <meta property="og:image" content="/home/hero-marketing-dashboard.jpeg" />
      <meta property="og:image:alt" content="Growwlance Media marketing dashboard preview" />

      <meta name="twitter:image" content="/home/hero-marketing-dashboard.jpeg" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}