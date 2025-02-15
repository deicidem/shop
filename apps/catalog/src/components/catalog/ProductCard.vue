<template>
    <VCard class="card">
        <template #title>
            {{ good.title }}
        </template>
        <template #text>
            {{ good.price }}
        </template>
        <template #actions>
            <VBtn color="primary" :to="{ path: `/catalog/${good.id}` }">
                Купить
            </VBtn>
        </template>
    </VCard>
</template>

<script lang="ts" setup>
defineProps<{
    good: {
        id: number;
        title: string;
        price: number;
    };
}>();
</script>

<style>
</style>
