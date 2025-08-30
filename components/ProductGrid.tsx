// components/ProductGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

// Define the types first
type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  paystackLink: string;
};

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
          <h3 className="font-semibold text-lg">{product.title}</h3>
          <p className="text-blue-600 font-bold mb-3">₦{product.price}</p>
          <Link
            href={product.paystackLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
          >
            Buy Now
          </Link>
        </div>
      ))}
    </div>
  );
}
