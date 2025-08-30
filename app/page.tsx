
import AutoScrollDeals from "@/components/AutoScrollDeals";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import products from "@/data/product";

export const metadata = {
  title: "My Online Store – Fresh Food & Drinks Delivered",
  description: "Order fresh food and drinks online. Fast delivery and secure payment.",
  keywords: ["food delivery", "online store", "drinks", "fast delivery", "jollof rice", "soft drinks"],
  authors: [{ name: "MyStore" }],
  openGraph: {
    title: "My Online Store – Fresh Food & Drinks",
    description: "Order fresh food and drinks online. Fast delivery and secure payment.",
    url: "https://mystore.com",
    siteName: "My Online Store",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "My Online Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Online Store",
    description: "Order fresh food and drinks online. Fast delivery and secure payment.",
    images: ["/images/og-home.jpg"],
    creator: "@mystore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HomeContent />
    <AutoScrollDeals products={products} />

    </div>
  );
}
