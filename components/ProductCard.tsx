import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  paystackLink: string;
}

export default function ProductCard({
  title,
  price,
  image,
  paystackLink,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-xl transition bg-white">
      <Image src={image} alt={title} fill className="object-cover" />
      <h3 className="mt-3 font-bold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">₦{price.toFixed(2)}</p>
      <a
        href={paystackLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
      >
        Buy Now
      </a>
    </div>
  );
}
