import type { Product } from '@/api/products';
import { defineStore } from 'pinia';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    amount: number;
}

export const useCartStore = defineStore('cart', () => {
    const cart = ref<CartItem[]>([]);

    const cartTotal = computed(() => cart.value.reduce((acc, item) => acc + item.price * item.amount, 0));
    const cartAmount = computed(() => cart.value.reduce((acc, item) => acc + item.amount, 0));

    function incrementCartAmount(item: CartItem) {
        item.amount += 1;
    }

    function decrementCartAmount(item: CartItem) {
        item.amount -= 1;

        if (item.amount === 0) {
            cart.value.splice(cart.value.indexOf(item), 1);
        }
    }

    function addProductToCart(item: Product) {
        const existedItem = cart.value.find(i => i.id === item.id);

        if (existedItem) {
            existedItem.amount += 1;
            return;
        }

        cart.value.push({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: 1,
        });
    }

    function removeProductFromCart(item: CartItem) {
        const existedItem = cart.value.find(i => i.id === item.id);
        if (!existedItem) {
            return;
        }

        existedItem.amount -= 1;

        if (existedItem.amount === 0) {
            cart.value.splice(cart.value.indexOf(existedItem), 1);
        }
    }

    return {
        cart,
        cartTotal,
        cartAmount,
        addProductToCart,
        removeProductFromCart,
        incrementCartAmount,
        decrementCartAmount,
    };
});
