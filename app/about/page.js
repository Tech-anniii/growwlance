export const metadata = {
  title: "About — Growwlance",
  description:
    "Growwlance helps brands grow with performance marketing, sharper analytics, and conversion-focused execution.",
  openGraph: {
    title: "About — Growwlance",
    description:
      "Growwlance helps brands grow with performance marketing, sharper analytics, and conversion-focused execution.",
    images: "/home/og-about.jpg",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-28 text-white md:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold md:text-6xl">About Aqueras</h1>
        <p className="mt-6 max-w-2xl text-gray-400">
          We help brands grow with performance marketing, sharper analytics,
          and conversion-focused execution.
        </p>
      </div>
    </main>
  );
}
