interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        return response.json();
    } catch (error: any) {
        console.log(error.message);
        throw error;
    }
};
