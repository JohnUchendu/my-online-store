export const metadata = {
  title: "About Us – My Online Store",
  description:
    "Learn more about MyStore, our mission, values, and commitment to fresh food & drinks.",
  keywords: ["about us", "online store", "food delivery", "fresh drinks"],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
      <main className="flex-1 max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          About Us
        </h1>

        <section className="space-y-4 bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700">
            At MyStore, our mission is to make fresh food and drinks easily
            accessible to everyone. We believe in fast delivery, high-quality
            products, and excellent customer service.
          </p>
        </section>

        <section className="space-y-4 bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-gray-700">
            Founded in 2025, MyStore started with the goal of simplifying online
            shopping for fresh food and drinks in Nigeria. From humble
            beginnings, we now serve thousands of happy customers every month.
          </p>
        </section>

        <section className="space-y-4 bg-white/80 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Quality – We ensure only the best products reach our customers.
            </li>
            <li>Reliability – Fast and dependable delivery every time.</li>
            <li>Customer Focus – Your satisfaction is our priority.</li>
            <li>
              Integrity – Transparent and honest service in everything we do.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
