<script setup lang="ts">
import type { Product } from '@/api/products';
import ProductsService from '@/api/products';

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
                <ProductCard :good="product" />
            </VCol>
        </VRow>
        <VPagination class="mt-2" density="compact" />
    </div>
</template>
