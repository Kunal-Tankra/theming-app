// components/Theme3ProductCard.tsx
import React from "react";

interface Props {
  product: {
    id: string;
    title: string;
    description?: string;
    image?: string;
  };
}

const Theme3ProductCard = ({ product }: Props) => {
  return (
    <div className="border-l-8 border-indigo-500 bg-white dark:bg-slate-900 rounded shadow-md p-5 flex flex-col h-full transition-all duration-500">
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold text-indigo-600 mb-2">{product.title}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">{product.description || "Awesome product with unique design!"}</p>
      </div>
      <div>
        <button className="w-full bg-indigo-600 text-white font-medium py-2 rounded hover:bg-indigo-700">Explore</button>
      </div>
    </div>
  );
};

export default Theme3ProductCard;
