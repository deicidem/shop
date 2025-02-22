<script setup lang="ts">
import type { CreateOrderRequest } from '@/api/orders';
import OrdersService from '@/api/orders';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const { incrementCartAmount, decrementCartAmount, removeProductFromCart } = useCartStore();
const { cart, cartTotal } = storeToRefs(useCartStore());

async function createOrder() {
    const request: CreateOrderRequest = {
        items: cart.value.map(i => ({
            productId: i.id,
            quantity: i.amount,
        })),
    };

    const resp = await OrdersService.createOrder(request);
    console.log(resp);
}
</script>

<template>
    <VForm class="d-flex flex-column">
        <h1 class="mb-4">
            Корзина: {{ cartTotal.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) }}
        </h1>
        <div class="d-flex flex-column ga-4">
            <CartItem
                v-for="item in cart"
                :key="item.id"
                :item="item"
                @add="incrementCartAmount(item)"
                @remove="decrementCartAmount(item)"
                @delete="removeProductFromCart(item)"
            />
        </div>

        <VBtn
            class="mt-4"
            color="success"
            variant="flat"
            @click="createOrder"
        >
            Оформить заказ
        </VBtn>
    </VForm>
</template>
