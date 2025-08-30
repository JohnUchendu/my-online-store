// import React from "react";

// interface CategoryFilterProps {
//   categories: string[];
//   selectedCategory: string;
//   onSelectCategory: (category: string) => void;
// }

// export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
//   return (
//     <div className="flex space-x-4 mb-6">
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => onSelectCategory(category)}
//           className={`px-4 py-2 rounded ${
//             selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }


interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 rounded-full font-medium transition ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
