// components/Theme1ProductCard.tsx
import React from "react";

interface Props {
  product: {
    id: string;
    title: string;
    description?: string;
    image?: string;
  };
}

const Theme1ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow-md flex flex-col h-full transition-all duration-500">
      {product.image && <img src={product.image} alt={product.title} className="rounded mb-3 h-48 object-cover" />}
      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-4">{product.description || "This is a great product. Check it out!"}</p>
      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Details</button>
    </div>
  );
};

export default Theme1ProductCard;
