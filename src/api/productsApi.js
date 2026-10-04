import perfumes from "../data/perfumes.json";

export function getProductsFromDataset() {
    return perfumes;
}

export async function getProducts() {
    const response = await fetch(
        "/api/perfumes?limit=500&offset=0"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products.");
    }

    const data = await response.json();

    if (!Array.isArray(data.perfumes)) {
        throw new Error("The perfume API returned an invalid product list.");
    }

    return data.perfumes
        .filter((perfume) => perfume.gender === "Women")
        .map((perfume) => ({
            ...perfume,
            price: Math.floor(Math.random() * 476) + 25,
        }));
}
