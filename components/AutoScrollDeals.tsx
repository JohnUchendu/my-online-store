// components/AutoScrollDeals.tsx

"use client";
import Image from "next/image";
// components/AutoScrollDeals.tsx
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  paystackLink: string;
}

interface AutoScrollDealsProps {
  products: Product[];
}

export default function AutoScrollDeals({ products }: AutoScrollDealsProps) {
  const repeatedProducts = [...products, ...products];

  return (
    <section className="mt-12 bg-yellow-50 py-6 relative">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        🔥 Hot Deals & Best Sellers
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex space-x-4 animate-scroll"
          style={{ width: `${repeatedProducts.length * 200}px` }}
        >
          {repeatedProducts.map((product, idx) => (
            <div
              key={idx}
              className="w-48 flex-shrink-0"
              // Add this inline style to pause animation when hovering this card
              onMouseEnter={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) parent.style.animationPlayState = "paused";
              }}
              onMouseLeave={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) parent.style.animationPlayState = "running";
              }}
            >
              <div className="bg-white/90 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="p-2 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">${product.price}</p>
                  <Link
                    href={product.paystackLink}
                    className="mt-2 inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
