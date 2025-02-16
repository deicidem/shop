import ax from './base.js';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

async function getProducts() {
    const res = await ax.get<Product[]>('/products');
    return res.data;
}

async function getProductById(id: number) {
    const res = await ax.get<Product>(`/products/${id}`);
    return res.data;
}

const ProductsService = {
    getProducts,
    getProductById,
};

export default ProductsService;
