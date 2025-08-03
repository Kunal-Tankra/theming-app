import React from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../context/ThemeContext";

/**
 * Home page component
 * Displays a grid of product cards fetched from the API.
 * Applies theme styling via context.
 */
const Home = () => {
  // Get product data and loading status from custom hook
  const { products, isPending } = useGetProducts();

  // Get the current theme from context
  const { theme } = useTheme();

  // Show loading message while fetching products
  if (isPending) return <p className="mt-20 text-center">Loading products...</p>;

  return (
    <div className="mt-10 px-4">
      <h2 className="text-2xl mb-6 font-semibold text-center">Product List</h2>

      {/* Grid layout for product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Home;
