import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";

function Shop() {
    const [perfumes, setPerfumes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const products = await getProducts();
                setPerfumes(products);
            } catch {
                setError("Unable to load perfumes.");
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Shop</h1>
            {error ? (
                <p role="alert">{error}</p>
            ) : perfumes.length === 0 ? (
                <p>Loading perfumes...</p>
            ) : (
                <ul>
                    {perfumes.map((perfume, index) => (
                        <li key={`${perfume.name}-${index}`}>
                            <h2>{perfume.name}</h2>
                            <p>{perfume.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Shop;