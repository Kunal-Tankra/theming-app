// components/Theme2ProductCard.tsx
import React from "react";

interface Props {
  product: {
    id: string;
    title: string;
    description?: string;
    image?: string;
  };
}

const Theme2ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-100 dark:bg-gray-800 shadow-lg flex flex-col sm:flex-row gap-4 transition-all duration-500">
      {product.image && <img src={product.image} alt={product.title} className="h-40 w-full sm:w-40 object-cover rounded" />}

      <div className="flex flex-col justify-between flex-1 overflow-hidden">
        <div>
          <h3 className="text-base font-bold mb-1 break-words">{product.title}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 break-words overflow-hidden">{(product.description || "This is a great product.").slice(0, 100)}...</p>
        </div>
        <button className="self-start bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm">View</button>
      </div>
    </div>
  );
};

export default Theme2ProductCard;
