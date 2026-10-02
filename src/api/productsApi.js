
const API_BASE_URL = 'https://dummyjson.com/products/category/'

export async function getProducts(category) {
    try {
        const response = await fetch(API_BASE_URL + category);

        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        return data.products;
    } catch (error) {
        console.log(error);
        throw error;
    }
}