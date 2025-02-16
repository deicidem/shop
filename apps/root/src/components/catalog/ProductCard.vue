<template>
    <VCard class="card">
        <template #title>
            {{ good.name }}
        </template>
        <template #subtitle>
            Осталось: {{ good.stock }}
        </template>
        <template #text>
            {{ good.description }}
        </template>
        <template #actions>
            <div class="d-flex justify-space-between w-100">
                <VBtn :to="{ path: `/catalog/${good.id}` }">
                    Подробнее
                </VBtn>
                <VBtn variant="elevated" color="primary" :to="{ path: `/catalog/${good.id}` }">
                    Купить
                </VBtn>
            </div>
        </template>
    </VCard>
</template>

<script lang="ts" setup>
import type { Product } from '@/api/products';

defineProps<{
    good: Product;
}>();
</script>

<style>
</style>
