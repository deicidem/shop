<script setup lang="ts">
import type { RegisterRequest } from '@/api/auth';
import AuthService from '@/api/auth';

const form = ref<RegisterRequest>({
    userName: '',
    email: '',
    password: '',
});

async function register() {
    try {
        await AuthService.register(form.value);
    }
    catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <VForm class="d-flex flex-column" @submit.prevent="register">
        <VTextField
            v-model="form.userName"
            label="Имя"
            variant="outlined"
            color="primary"
        />
        <VTextField
            v-model="form.email"
            label="E-mail"
            variant="outlined"
            color="primary"
        />
        <VTextField
            v-model="form.password"
            label="Пароль"
            variant="outlined"
            color="primary"
            type="password"
        />
        <VBtn
            type="submit"
            variant="flat"
            color="primary"
        >
            Зарегистрироваться
        </VBtn>
        <VBtn
            class="mt-2"
            to="/auth/register"
            variant="text"
            color="primary"
        >
            Войти
        </VBtn>
    </VForm>
</template>
