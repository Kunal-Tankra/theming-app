import { useEffect, useState } from "react";

/**
 * Custom hook to fetch product data from the fakestore API.
 * Provides product list and loading state to consuming components.
 */
export const useGetProducts = () => {
    // State to store the fetched products
    const [products, setProducts] = useState([]);

    // State to track loading status
    const [isPending, setIsPending] = useState(true);

    // Function to fetch products from the API
    const fetchProducts = async () => {
        try {
            setIsPending(true); // Set loading state to true before fetching
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data); // Save fetched products to state
        } catch (error) {
            // Handle fetch failure
            console.error("Failed to fetch products:", error);
        } finally {
            setIsPending(false); // Always turn off loading indicator
        }
    };

    // Fetch products on initial component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, isPending };
};
