<script setup lang="ts">
import type { Product } from '@/api/products';
import ProductsService from '@/api/products';
import { useCartStore } from '@/stores/cart';

const { addProductToCart } = useCartStore();

definePage({
    alias: 'cat',
    meta: {
        requiresAuth: true,
    },
});

const products = ref<Product[]>([]);

async function getProducts() {
    products.value = await ProductsService.getProducts();
}

onMounted(() => {
    getProducts();
});
</script>

<template>
    <div>
        <VRow>
            <VCol v-for="product in products" :key="product.id">
                <ProductCard :product="product" @add="addProductToCart(product)" />
            </VCol>
        </VRow>
        <VPagination class="mt-2" density="compact" />
    </div>
</template>

<route lang="json">
    {
      "name": "name-override",
      "meta": {
        "requiresAuth": false
      }
    }
</route>
