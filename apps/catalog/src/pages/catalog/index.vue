<script setup lang="ts">
console.log('catalog');

const goods = [
    { id: 1, title: 'iPhone 16', price: 123 },
    { id: 2, title: 'iPhone 15', price: 100 },
    { id: 1, title: 'iPhone 16 Pro Max', price: 200 },
];
</script>

<template>
    <div>
        <VRow>
            <VCol v-for="good in goods" :key="good.id">
                <ProductCard :good="good" />
            </VCol>
        </VRow>
        <VPagination class="mt-2" density="compact" />
    </div>
</template>
