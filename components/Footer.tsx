import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyStore</h2>
          <p className="text-gray-400">
            Fresh food and drinks delivered to your door. Fast, reliable, and secure online shopping.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home </Link> </li>
            <li><Link href="/about" className="hover:text-white">About </Link> </li>
            <li><Link href="/contact" className="hover:text-white">Contact </Link> </li>
            <li><Link href="/products" className="hover:text-white">Products </Link> </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/category/food" className="hover:text-white">Food</a></li>
            <li><a href="/category/drinks" className="hover:text-white">Drinks</a></li>
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact & Newsletter</h3>
          <p className="text-gray-400 mb-2">Email: <a href="mailto:info@mystore.com" className="hover:text-white">info@mystore.com</a></p>
          <p className="text-gray-400 mb-4">Phone: <a href="tel:+2348012345678" className="hover:text-white">+234 801 234 5678</a></p>
          
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-gray-900 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-semibold"
            >
              Subscribe
            </button>
          </form>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}
