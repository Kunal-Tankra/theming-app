// components/ProductCard.tsx
import React from "react";
import Theme1ProductCard from "./ProductCards/Theme1Product";
import Theme2ProductCard from "./ProductCards/Theme2Product";
import Theme3ProductCard from "./ProductCards/Theme3Product";

// Product type definition
interface Product {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

// Props for ProductCard
interface ProductCardProps {
  product: Product;
  theme: "theme1" | "theme2" | "theme3";
}

// Render different layout based on selected theme
const ProductCard = ({ product, theme }: ProductCardProps) => {
  switch (theme) {
    case "theme1":
      return <Theme1ProductCard product={product} />;
    case "theme2":
      return <Theme2ProductCard product={product} />;
    case "theme3":
      return <Theme3ProductCard product={product} />;
    default:
      return null;
  }
};

export default ProductCard;
