"use client";

import { useState } from "react";
import ProductGrid from "./ProductGrid";
import CategoryFilter from "./ProductFilter";
import SearchBar from "./SearchBar";
import products from "@/data/product";

export default function HomeContent() {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const allCategories = ["All", ...categories];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Apply filters
  let filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <section className="p-6">
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </section>
  );
}
