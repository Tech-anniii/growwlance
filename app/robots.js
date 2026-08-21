export default function robots() {
  const baseUrl = "https://growwlance.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  };
}