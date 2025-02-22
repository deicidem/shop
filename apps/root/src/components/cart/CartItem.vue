<script setup lang="ts">
import type { CartItem } from '@/stores/cart';

const props = defineProps<{
    item: CartItem;
}>();

const emit = defineEmits<{
    add: [];
    remove: [];
    delete: [];
}>();
</script>

<template>
    <VCard variant="outlined">
        <template #title>
            {{ item.name }}
        </template>
        <template #subtitle>
            {{ item.price }} * {{ item.amount }}
        </template>
        <template #actions>
            <div class="w-100 d-flex justify-space-between align-center ga-2">
                <VBtn color="error" @click="emit('delete')">
                    Удалить из корзины
                </VBtn>
                <div>
                    <VBtn
                        color="success"
                        icon
                        size="x-small"
                        @click="emit('add')"
                    >
                        <VIcon icon="mdi-plus" />
                    </VBtn>
                    {{ item.amount }}
                    <VBtn
                        color="error"
                        icon
                        size="x-small"
                        @click="emit('remove')"
                    >
                        <VIcon icon="mdi-minus" />
                    </VBtn>
                </div>
            </div>
        </template>
    </VCard>
</template>
