<script lang="ts" setup>
import AuthService from '@/api/auth';
import { useAuthStore } from '@/stores/auth';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const router = useRouter();

const { cartAmount } = storeToRefs(useCartStore());
const { isAuth } = storeToRefs(useAuthStore());

onMounted(async () => {
    if (isAuth.value)
        return;
    try {
        await AuthService.checkAuth();
        isAuth.value = true;
    }
    catch (error) {
        console.error(error);
        isAuth.value = false;
    }
});

async function logout() {
    await AuthService.logout();
    isAuth.value = false;
    router.push('/auth/login');
}
</script>

<template>
    <VLayout>
        <VAppBar color="secondary" flat>
            <template #title>
                <VBtn to="/">
                    Главная
                </VBtn>
            </template>
            <div class="mr-5">
                <template v-if="isAuth">
                    <VBtn to="/cart">
                        Корзина <span v-if="cartAmount">: {{ cartAmount }}</span>
                    </VBtn>
                    <VBtn @click="logout">
                        Выйти
                    </VBtn>
                </template>
                <template v-else>
                    <VBtn to="/auth/login">
                        Вход
                    </VBtn>
                    <VBtn to="/auth/register">
                        Регистрация
                    </VBtn>
                </template>
            </div>
        </VAppBar>
        <VMain class="bg-blue-grey-lighten-5">
            <VContainer class="mt-4">
                <RouterView />
            </VContainer>
        </VMain>
    </VLayout>
</template>
