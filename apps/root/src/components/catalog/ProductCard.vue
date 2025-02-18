<template>
    <VCard class="card" variant="flat">
        <template #title>
            {{ product.name }}
        </template>
        <template #subtitle>
            Осталось: {{ product.stock }}
        </template>
        <template #text>
            {{ product.description }}
        </template>
        <template #actions>
            <div class="d-flex justify-space-between w-100">
                <VBtn color="primary" :to="{ path: `/catalog/${product.id}` }">
                    Подробнее
                </VBtn>
                <VBtn variant="flat" color="primary" @click="emit('add', product.id)">
                    В корзину
                </VBtn>
            </div>
        </template>
    </VCard>
</template>

<script lang="ts" setup>
import type { Product } from '@/api/products';

defineProps<{
    product: Product;
}>();

const emit = defineEmits<{
    add: [id: number];
}>();
</script>

<style>
</style>
