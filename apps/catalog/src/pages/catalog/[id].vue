<script setup lang="ts">
const good = { id: 1, title: 'iPhone 16', price: 123 };
</script>

<template>
    <ProductCard :good="good" />
</template>
