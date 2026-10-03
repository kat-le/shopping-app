
const API_BASE_URL = 'https://perfumapidatabase.onrender.com/'

export async function getProducts() {
    try {
         const response = await fetch(
            `${API_BASE_URL}perfumes?limit=500&offset=0`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        return data.perfumes
               .filter((perfume) => perfume.gender === "Women")
               .map((perfume) => ({
                    id: perfume,
                    name: perfume.name,
                    brand: perfume.brand,
                    description: perfume.description,
                    image_url: perfume.image_url
               }))
    } catch (error) {
        console.log(error);
        throw error;
    }
}