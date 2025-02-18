<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const { incrementCartAmount, decrementCartAmount } = useCartStore();
const { cart, cartTotal } = storeToRefs(useCartStore());
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
            />
        </div>
    </VForm>
</template>
