import ax from './base.js';

export interface OrderItem {
    id?: number;
    quantity: number;
    productId: number;
}

export interface CreateOrderRequest {
    items: OrderItem[];
}

async function createOrder(request: CreateOrderRequest) {
    const res = await ax.post('/orders', request);
    return res.data;
}

const OrdersService = {
    createOrder,
};

export default OrdersService;
