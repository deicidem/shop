<script lang="ts" setup>
//
</script>

<template>
    <VLayout>
        <VAppBar>
            <template #title>
                <VBtn to="/">
                    Home
                </VBtn>
            </template>
            <VBtn to="/auth/login">
                Login
            </VBtn>
            <VBtn to="/auth/register">
                Register
            </VBtn>
        </VAppBar>
        <VMain>
            <VContainer>
                <RouterView />
            </VContainer>
        </VMain>
    </VLayout>
</template>
