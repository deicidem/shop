<script setup lang="ts">
import type { Product } from '@/api/products';
import ProductsService from '@/api/products';

const route = useRoute('/catalog/[id]');

const productId = computed(() => +route.params.id);

const product = ref<Product>();

async function getProduct() {
    product.value = await ProductsService.getProductById(productId.value);
}

onMounted(() => {
    getProduct();
});
</script>

<template>
    <ProductCard v-if="product" :good="product" />
    <div v-else>
        <VProgressCircular indeterminate width="2" size="24" />
    </div>
</template>
