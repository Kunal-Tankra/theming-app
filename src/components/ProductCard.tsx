// components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description?: string;
    image?: string;
  };
  theme: "theme1" | "theme2" | "theme3";
}

const ProductCard: React.FC<ProductCardProps> = ({ product, theme }) => {
  // Common styling for the card container
  const cardBaseClasses = "border dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-all duration-500";

  // Custom layout for Theme 2
  if (theme === "theme2") {
    return (
      <div className={`${cardBaseClasses} bg-white dark:bg-gray-800 flex flex-col sm:flex-row p-4 gap-4 h-full`}>
        {/* Show product image on the left for larger screens */}
        {product.image && <img src={product.image} alt={product.title} className="h-40 w-full sm:w-40 object-cover rounded" />}

        {/* Content section with title, description, and button */}
        <div className="flex flex-col justify-between flex-1">
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{(product.description || "This is a great product. Check it out!").slice(0, 60)}...</p>
          </div>

          {/* Call-to-action button at the bottom */}
          <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Details</button>
        </div>
      </div>
    );
  }

  // Default layout for Theme 1 and Theme 3
  return (
    <div className={`${cardBaseClasses} bg-white dark:bg-gray-800 p-4 flex flex-col h-full`}>
      {/* Product image at the top */}
      {product.image && <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded mb-3" />}

      {/* Product title */}
      <h3 className="text-lg font-bold mb-2">{product.title}</h3>

      {/* Description text */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">{product.description || "This is a great product. Check it out!"}</p>

      {/* Call-to-action button */}
      <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Details</button>
    </div>
  );
};

export default ProductCard;
