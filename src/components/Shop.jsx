import { useEffect } from "react";
import { getProducts } from "../api/productsApi";

function Shop() {

    useEffect(() => {
        async function fetchProducts() {
            const fragrances = await getProducts("fragrances");
            const beauty = await getProducts("beauty");
            const skincare = await getProducts("skin-care");

            console.log("Fragrances:", fragrances);
            console.log("Beauty:", beauty);
            console.log("Skincare:", skincare);
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Shop</h1>
        </div>
    );
}

export default Shop;